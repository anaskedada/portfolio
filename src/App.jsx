import { useEffect, useState } from 'react';
import { content } from './content.js';
import Header from './components/Header.jsx';
import Hero, { StackStrip } from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import {
  About,
  Skills,
  OtherProjects,
  Experience,
  Education,
  Contact,
} from './components/Sections.jsx';

function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: setting just won't persist */
  }
}

function initialLang() {
  const saved = readStored('lang');
  if (saved === 'fr' || saved === 'en') return saved;
  return 'fr';
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    store('lang', lang);
  }, [lang, t]);

  // Scroll reveal: blocks fade/slide in the first time they enter the viewport.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll(
      '.section-head, .lead, .skills-primary, .skill-group, .case, .other-list > li, .timeline > li, .edu-list > li, .contact-list > div'
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    targets.forEach((el) => {
      // Stagger siblings slightly (max 4 steps).
      const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty('--rd', `${Math.min(idx, 4) * 70}ms`);
      el.classList.add('reveal');
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.meta.skip}
      </a>
      <Header t={t} lang={lang} setLang={setLang} />
      <main id="main">
        <Hero t={t} />
        <StackStrip />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <OtherProjects t={t} />
        <div className="wrap split">
          <Experience t={t} />
          <Education t={t} />
        </div>
        <Contact t={t} />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Anass Kedada</span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </>
  );
}
