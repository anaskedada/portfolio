import {
  siPhp,
  siSymfony,
  siDoctrine,
  siMysql,
  siJavascript,
  siTypescript,
  siReact,
  siVuedotjs,
  siHtml5,
  siCss,
  siWordpress,
  siWoocommerce,
  siPrestashop,
  siFlutter,
  siDart,
  siFirebase,
  siStripe,
  siCloudflare,
  siGit,
  siGithub,
  siBitbucket,
  siDocker,
  siJest,
  siVite,
  siJsonwebtokens,
} from './icons.js';

// Brand logos from Simple Icons (CC0). Keys are matched case-insensitively
// against the skill / stack labels used in content.js.
const ICONS = {
  php: siPhp,
  symfony: siSymfony,
  'symfony (api)': siSymfony,
  'api symfony': siSymfony,
  'doctrine orm': siDoctrine,
  doctrine: siDoctrine,
  mysql: siMysql,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  'react native': siReact,
  'vue.js': siVuedotjs,
  html: siHtml5,
  css: siCss,
  wordpress: siWordpress,
  woocommerce: siWoocommerce,
  prestashop: siPrestashop,
  'prestashop (modules sur mesure)': siPrestashop,
  'prestashop (custom modules)': siPrestashop,
  flutter: siFlutter,
  'flutter / dart': siFlutter,
  dart: siDart,
  firebase: siFirebase,
  'firebase (firestore, fcm)': siFirebase,
  stripe: siStripe,
  cloudflare: siCloudflare,
  'cloudflare cdn': siCloudflare,
  git: siGit,
  github: siGithub,
  bitbucket: siBitbucket,
  docker: siDocker,
  jest: siJest,
  vite: siVite,
  jwt: siJsonwebtokens,
};

export function getIcon(label) {
  return ICONS[String(label).toLowerCase()] || null;
}

// Very dark brand colours (Symfony, GitHub, JWT…) would vanish in dark mode:
// those follow the text colour instead.
function isTooDark(hex) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 60;
}

export default function TechIcon({ name, icon, size = 16, mono = false, className = '' }) {
  const si = icon || getIcon(name);
  if (!si) return null;
  const color = mono || isTooDark(si.hex) ? 'currentColor' : `#${si.hex}`;
  return (
    <svg
      className={`tech-icon ${className}`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      focusable="false"
    >
      <path d={si.path} />
    </svg>
  );
}

// Tag list with logos, used for skills and project stacks.
export function TagList({ items, large = false, label }) {
  return (
    <ul className={`tags${large ? ' tags-lg' : ''}`} aria-label={label}>
      {items.map((s) => (
        <li key={s}>
          <TechIcon name={s} size={large ? 17 : 14} />
          {s}
        </li>
      ))}
    </ul>
  );
}

// Logos for the scrolling stack strip.
export const STRIP = [
  ['PHP', siPhp],
  ['Symfony', siSymfony],
  ['Doctrine', siDoctrine],
  ['MySQL', siMysql],
  ['JWT', siJsonwebtokens],
  ['Docker', siDocker],
  ['Git', siGit],
  ['GitHub', siGithub],
  ['Stripe', siStripe],
  ['Cloudflare', siCloudflare],
  ['JavaScript', siJavascript],
  ['TypeScript', siTypescript],
  ['React', siReact],
  ['Vue.js', siVuedotjs],
  ['Vite', siVite],
  ['WordPress', siWordpress],
  ['WooCommerce', siWoocommerce],
  ['PrestaShop', siPrestashop],
  ['Flutter', siFlutter],
  ['Dart', siDart],
  ['Firebase', siFirebase],
  ['Jest', siJest],
];

// Badges that float around the hero code card.
export const ORBIT = [
  ['PHP', siPhp],
  ['Symfony', siSymfony],
  ['MySQL', siMysql],
  ['Docker', siDocker],
  ['React', siReact],
  ['Stripe', siStripe],
];
