import { links, projectAssets } from '../content.js';
import { SectionHead, ProjectImage, ProjectLinks } from './Projects.jsx';
import Todo from './Todo.jsx';
import TechIcon, { TagList } from './TechIcon.jsx';

export function About({ t }) {
  return (
    <section className="section" id="profil" aria-labelledby="profil-title">
      <div className="wrap narrow">
        <SectionHead id="profil" route="profil" title={t.about.heading} />
        <p className="lead">{t.about.text}</p>
      </div>
    </section>
  );
}

export function Skills({ t }) {
  const S = t.skills;
  return (
    <section className="section" id="competences" aria-labelledby="competences-title">
      <div className="wrap">
        <SectionHead id="competences" route="competences" title={S.heading} />
        <div className="skills-primary">
          <h3>{S.primary.name}</h3>
          <TagList items={S.primary.items} large />
        </div>
        {S.ai && (
          <div className="skills-primary skills-ai">
            <h3>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <rect x="5" y="7" width="14" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <path d="M12 3.5V7M9.5 12h.01M14.5 12h.01M9.5 15h5M3 11.5v3M21 11.5v3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              {S.ai.name}
            </h3>
            <p className="skills-intro">{S.ai.intro}</p>
            <TagList items={S.ai.items} large />
          </div>
        )}
        <dl className="skills-grid">
          {S.groups.map((g) => (
            <div key={g.name} className="skill-group">
              <dt>{g.name}</dt>
              <dd>
                <ul className="mini-list">
                  {g.items.map((s) => (
                    <li key={s}>
                      <TechIcon name={s} size={14} />
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function OtherProjects({ t }) {
  const O = t.other;
  return (
    <section className="section" id="autres-projets" aria-labelledby="autres-projets-title">
      <div className="wrap">
        <SectionHead id="autres-projets" route="autres-projets" title={O.heading} />
        <ul className="other-list">
          {O.items.map((p) => {
            const assets = projectAssets[p.key] || {};
            return (
              <li key={p.key}>
                <ProjectImage assets={assets} title={p.title} t={t} compact />
                <div className="other-title">
                  <h3>{p.title}</h3>
                  {p.stack && <span className="other-stack">{p.stack}</span>}
                </div>
                <p>{p.text}</p>
                {p.result && (
                  <p className="other-result">
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M4 14a8 8 0 1 1 16 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="m12 14 3.5-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    {p.result}
                  </p>
                )}
                <ProjectLinks assets={assets} t={t} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Experience({ t }) {
  const E = t.experience;
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <SectionHead id="experience" route="experience" title={E.heading} />
      <ol className="timeline">
        {E.items.map((e) => (
          <li key={e.dates}>
            <p className="tl-dates">{e.dates}</p>
            <h3>
              {e.role} <span className="tl-org">– {e.org}</span>
            </h3>
            <p>{e.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Education({ t }) {
  const E = t.education;
  return (
    <section className="section" id="formation" aria-labelledby="formation-title">
      <SectionHead id="formation" route="formation" title={E.heading} />
      <ul className="edu-list">
        {E.items.map((e) => (
          <li key={e.year}>
            <span className="edu-year">{e.year}</span>
            <div>
              <h3>{e.title}</h3>
              <p>{e.school}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Contact({ t }) {
  const C = t.contact;
  const rows = [
    {
      key: 'email',
      value: (
        <a className="contact-email" href={`mailto:${links.email}`}>
          {links.email}
        </a>
      ),
    },
    {
      key: 'phone',
      value: links.phone ? (
        <a href={`tel:${links.phone.replace(/\s+/g, '')}`}>{links.phone}</a>
      ) : (
        <Todo t={t}>{C.todo.phone}</Todo>
      ),
    },
    {
      key: 'linkedin',
      value: links.linkedin ? (
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          {links.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
        </a>
      ) : (
        <Todo t={t}>{C.todo.linkedin}</Todo>
      ),
    },
    {
      key: 'github',
      value: links.github ? (
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          {links.github.replace(/^https?:\/\/(www\.)?/, '')}
        </a>
      ) : (
        <Todo t={t}>{C.todo.github}</Todo>
      ),
    },
    {
      key: 'cv',
      value: links.cv ? (
        <a href={links.cv} download>
          {C.cvLink}
        </a>
      ) : (
        <Todo t={t}>{C.todo.cv}</Todo>
      ),
    },
  ];

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap narrow">
        <SectionHead id="contact" route="contact" title={C.heading} intro={C.intro} />
        <dl className="contact-list">
          {rows.map((r) => (
            <div key={r.key}>
              <dt>{C.labels[r.key]}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
