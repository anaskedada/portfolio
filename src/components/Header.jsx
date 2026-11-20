import { useEffect, useRef, useState } from 'react';

// index.html sets data-theme before React loads (dark by default).
function currentTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export default function Header({ t, lang, setLang }) {
  const [theme, setTheme] = useState(currentTheme);
  const [active, setActive] = useState('');
  const progressRef = useRef(null);

  // Reading progress bar + current section in the menu.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
      // Active = the section whose top most recently passed the 35% line.
      let current = '';
      let best = -Infinity;
      for (const item of t.nav) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.35 && top > best) {
          best = top;
          current = item.id;
        }
      }
      // The last section may be too short to reach the line: use it at page end.
      if (p > 0.995) current = t.nav[t.nav.length - 1].id;
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [t.nav]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  }

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#top">
          Anass Kedada
        </a>
        <nav aria-label="Navigation principale" className="main-nav">
          <ul>
            {t.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : undefined}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-tools">
          <div className="lang-switch" role="group" aria-label={t.meta.langLabel}>
            {['fr', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                lang={code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.meta.themeToLight : t.meta.themeToDark}
            title={theme === 'dark' ? t.meta.themeToLight : t.meta.themeToDark}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}
