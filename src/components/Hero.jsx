import { links } from '../content.js';
import Todo from './Todo.jsx';
import TechIcon, { ORBIT, STRIP } from './TechIcon.jsx';

// The signature element: the profile rendered as an API response.
// Lines "stream in" one after another (CSS animation, delay set per line).
function ProfileResponse({ t }) {
  const j = t.hero.json;
  const stack = ['PHP', 'Symfony', 'Doctrine', 'MySQL', 'API REST'];
  const Str = ({ v }) => <span className="j-str">"{v}"</span>;
  const Arr = ({ items }) => (
    <>
      [
      {items.map((v, i) => (
        <span key={v}>
          <Str v={v} />
          {i < items.length - 1 ? ', ' : ''}
        </span>
      ))}
      ]
    </>
  );

  const rows = [
    ['name', <Str v="Anass Kedada" />],
    ['role', <Str v={j.role} />],
    ['stack', <Arr items={stack} />],
    ['focus', <Arr items={j.focus} />],
    ['location', <Str v={j.location} />],
    ['contract', <Str v={j.contract} />],
  ];
  const line = (i) => ({ '--i': i });

  return (
    <div className="response-stage">
      <ul className="orbit" aria-hidden="true">
        {ORBIT.map(([label, icon], i) => (
          <li key={label} className={`orbit-badge ob-${i + 1}`}>
            <TechIcon icon={icon} size={18} />
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <figure className="response" aria-label="JSON">
        <div className="response-bar">
          <span className="dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="verb">GET</span>
          <span className="path">/api/developers/anass-kedada</span>
          <span className="status">
            <span className="status-dot" aria-hidden="true" />
            200 OK
          </span>
        </div>
        <pre className="response-body">
          <code>
            <span className="j-line" style={line(0)}>
              {'{'}
            </span>
            {rows.map(([k, v], i) => (
              <span key={k} className="j-line j-in" style={line(i + 1)}>
                <span className="j-key">"{k}"</span>: {v}
                {i < rows.length - 1 ? ',' : ''}
              </span>
            ))}
            <span className="j-line" style={line(rows.length + 1)}>
              {'}'}
              <span className="cursor" aria-hidden="true" />
            </span>
          </code>
        </pre>
      </figure>
    </div>
  );
}

// Infinite, pausable strip of stack logos (duplicated once for a seamless loop).
export function StackStrip() {
  const half = Math.ceil(STRIP.length / 2);
  const rows = [STRIP.slice(0, half), STRIP.slice(half)];
  return (
    <div className="stack-strip" aria-label="Stack technique">
      {rows.map((row, r) => (
        <div key={r} className={`strip-row${r === 1 ? ' is-reverse' : ''}`}>
          <ul className="strip-track">
            {[...row, ...row].map(([label, icon], i) => (
              <li key={`${label}-${i}`} aria-hidden={i >= row.length ? 'true' : undefined}>
                <TechIcon icon={icon} size={22} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Hero({ t }) {
  const h = t.hero;
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="hero-location rise" style={{ '--d': '0ms' }}>
            <span className="live-dot" aria-hidden="true" />
            {h.location}
          </p>
          <h1 className="rise" style={{ '--d': '80ms' }}>
            {h.name}
          </h1>
          <p className="hero-title rise" style={{ '--d': '160ms' }}>
            {h.title}
          </p>
          <p className="hero-tagline rise" style={{ '--d': '240ms' }}>
            {h.tagline}
          </p>
          <div className="hero-actions rise" style={{ '--d': '320ms' }}>
            {links.cv ? (
              <a className="btn btn-primary" href={links.cv} download>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {h.cv}
              </a>
            ) : (
              <span className="btn btn-primary is-disabled" aria-disabled="true">
                {h.cv}
              </span>
            )}
            <a className="btn btn-secondary" href="#contact">
              {h.contact}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          {!links.cv && (
            <p className="hero-todo">
              <Todo t={t}>{h.cvTodo}</Todo>
            </p>
          )}
        </div>
        <ProfileResponse t={t} />
      </div>
    </section>
  );
}
