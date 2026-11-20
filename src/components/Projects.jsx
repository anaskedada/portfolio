import { projectAssets } from '../content.js';
import Todo from './Todo.jsx';
import { TagList } from './TechIcon.jsx';

function SectionHead({ id, route, title, intro }) {
  return (
    <div className="section-head">
      <p className="route" aria-hidden="true">
        /{route}
      </p>
      <h2 id={`${id}-title`}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

// Screenshot (or private note / placeholder) for a project.
function ProjectImage({ assets, title, t, compact = false }) {
  const L = t.projects.labels;

  if (assets.private) {
    return (
      <div className={`private-note${compact ? ' is-compact' : ''}`}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
        <span>{L.private}</span>
      </div>
    );
  }

  if (!assets.cover) {
    return (
      <div className="shot-placeholder">
        <Todo t={t}>
          {L.screenshots} – {title}
        </Todo>
      </div>
    );
  }

  const image = (
    <img
      src={assets.cover}
      alt={title}
      loading="lazy"
      decoding="async"
      width={assets.portrait ? 667 : 1200}
      height={assets.portrait ? 1440 : 750}
    />
  );

  const classes = `shot${assets.portrait ? ' is-portrait' : ''}`;

  return (
    <figure className={classes}>
      {assets.full ? (
        <a className="shot-frame" href={assets.full} target="_blank" rel="noopener" aria-label={`${title} – ${L.fullPage}`}>
          {image}
        </a>
      ) : (
        <div className="shot-frame">{image}</div>
      )}
    </figure>
  );
}

function CaseStudy({ p, index, t }) {
  const L = t.projects.labels;
  const assets = projectAssets[p.key] || {};
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="case" aria-labelledby={`case-${p.key}`}>
      <header className="case-head">
        <span className="case-num" aria-hidden="true">
          {num}
        </span>
        <div>
          <h3 id={`case-${p.key}`}>{p.title}</h3>
          <p className="case-type">{p.type}</p>
        </div>
      </header>

      <TagList items={p.stack} label={L.stack} />

      <div className="case-body">
        <div className="case-side">
          <h4>{L.problem}</h4>
          <p>{p.problem}</p>
          {p.result && (
            <>
              <h4>{L.result}</h4>
              <p className="case-result">{p.result}</p>
            </>
          )}
        </div>
        <div className="case-main">
          <h4>{L.built}</h4>
          <ul className="built">
            {p.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="case-media">
        <ProjectImage assets={assets} title={p.title} t={t} />
        <ProjectLinks assets={assets} t={t} showFullPage />
      </div>
    </article>
  );
}

// Live site / Google Play / maintenance note for a project.
function ProjectLinks({ assets, t, showFullPage = false }) {
  const L = t.projects.labels;
  const hasLive = assets.url || assets.store;
  if (assets.private && !hasLive) return null;

  return (
    <p className="case-link">
      {assets.url && (
        <a className="link-live" href={assets.url} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          {L.view} <span aria-hidden="true">↗</span>
        </a>
      )}
      {assets.store && (
        <a className="link-live" href={assets.store} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M5 3.8v16.4c0 .5.5.8.9.6l14-8.2c.4-.2.4-.8 0-1L5.9 3.2c-.4-.2-.9.1-.9.6Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M5.4 3.6 15 13.4M5.4 20.4 15 10.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          {L.store} <span aria-hidden="true">↗</span>
        </a>
      )}
      {assets.maintenance && !hasLive && (
        <span className="maintenance-note">
          <span className="maint-dot" aria-hidden="true" />
          {L.maintenance}
        </span>
      )}
      {!hasLive && !assets.maintenance && <Todo t={t}>{L.link}</Todo>}
      {showFullPage && assets.full && (
        <a className="link-sub" href={assets.full} target="_blank" rel="noopener">
          {L.fullPage}
        </a>
      )}
    </p>
  );
}

export { SectionHead, ProjectImage, ProjectLinks };

export default function Projects({ t }) {
  const P = t.projects;
  return (
    <section className="section" id="projets" aria-labelledby="projets-title">
      <div className="wrap">
        <SectionHead id="projets" route="projets" title={P.heading} intro={P.intro} />
        <div className="cases">
          {P.items.map((p, i) => (
            <CaseStudy key={p.key} p={p} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
