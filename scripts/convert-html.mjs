import fs from 'fs';
import path from 'path';

const SOURCE = '/Users/mayankgoyal/Downloads/KOH-LandingPage-main';
const OUT = '/Users/mayankgoyal/Downloads/thailand landing page/src/generated';

const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  crossorigin: 'crossOrigin',
  autocomplete: 'autoComplete',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  cellspacing: 'cellSpacing',
  cellpadding: 'cellPadding',
  usemap: 'useMap',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
};

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

function extractBody(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return html;
  let body = bodyMatch[1];
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<!--[\s\S]*?-->/g, '');
  return body.trim();
}

function extractStyles(html) {
  const styles = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(html))) styles.push(m[1].trim());
  return styles.join('\n\n');
}

function fixAssetPaths(s) {
  return s
    .replace(/src="\.\//g, 'src="/')
    .replace(/src="img\//g, 'src="/img/')
    .replace(/src="([^"/][^"]*)"/g, (match, p1) => {
      if (p1.startsWith('http') || p1.startsWith('data:') || p1.startsWith('/')) return match;
      return `src="/${p1}"`;
    })
    .replace(/href="(about|contact|privacy|terms|cancel)\.html"/g, 'href="/$1"');
}

function convertAttributes(tag) {
  return tag.replace(/\s([a-zA-Z_:][-a-zA-Z0-9_:]*)(=("[^"]*"|'[^']*'|\{[^}]*\}))?/g, (full, name, valuePart = '') => {
    const lower = name.toLowerCase();
    if (lower.startsWith('on') && valuePart) {
      const mapped = 'on' + lower.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const finalName = mapped === name ? mapped : mapped;
      if (lower === 'onclick' && valuePart.includes('openEnquiryModal')) {
        return ' onClick={openEnquiryModal}';
      }
      if (lower === 'onclick' && valuePart.includes('closeEnquiryModal')) {
        return ' onClick={closeEnquiryModal}';
      }
      if (lower === 'onclick' && valuePart.includes('changeGuide')) {
        return full;
      }
      return ` ${finalName}={undefined /* was ${name} */}`;
    }
    const jsxName = ATTR_MAP[lower] || name;
    return ` ${jsxName}${valuePart}`;
  });
}

function selfCloseTags(s) {
  return s.replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g, (match, tag, attrs) => {
    if (!VOID_TAGS.has(tag.toLowerCase())) return match;
    if (match.endsWith('/>')) return match;
    return `<${tag}${attrs} />`;
  });
}

function stripGuideOnclick(s) {
  return s.replace(/\s+onclick="changeGuide\([^"]*\)"/g, '');
}

function htmlToJsx(html) {
  let s = extractBody(html);
  s = fixAssetPaths(s);
  s = s.replace(/\sclass=/g, ' className=');
  s = s.replace(/\sfor=/g, ' htmlFor=');
  s = stripGuideOnclick(s);
  s = selfCloseTags(s);
  s = s.replace(/<br>/gi, '<br />');
  s = s.replace(/<hr>/gi, '<hr />');
  s = s.replace(/javascript:void\(0\)/g, '#');
  return s;
}

function wrapComponent(name, jsx, imports = []) {
  return `${imports.join('\n')}
export default function ${name}() {
  return (
    <>
${jsx.split('\n').map((line) => '      ' + line).join('\n')}
    </>
  );
}
`;
}

fs.mkdirSync(OUT, { recursive: true });

const pages = [
  { file: 'about.html', component: 'AboutContent' },
  { file: 'contact.html', component: 'ContactContent' },
  { file: 'privacy.html', component: 'PrivacyContent' },
  { file: 'terms.html', component: 'TermsContent' },
  { file: 'cancel.html', component: 'CancelContent' },
];

for (const { file, component } of pages) {
  const html = fs.readFileSync(path.join(SOURCE, file), 'utf8');
  const jsx = htmlToJsx(html);
  const styles = extractStyles(html);
  fs.writeFileSync(path.join(OUT, `${component}.jsx`), wrapComponent(component, jsx));
  if (styles) {
    fs.writeFileSync(path.join(OUT, `${component}.styles.css`), styles);
  }
  console.log('Converted', file, '->', component);
}

// Index: body without modals/footer scripts — split manually
let indexHtml = fs.readFileSync(path.join(SOURCE, 'index.html'), 'utf8');
indexHtml = indexHtml.replace(/<\/body>[\s\S]*$/i, '</body>');
let indexBody = extractBody(indexHtml);

// Remove enquiry modal, duplicate modal stub, mobile bar (handled in Layout)
const cutMarkers = [
  '<!-- MOBILE BOTTOM BAR -->',
  '<!-- ENQUIRY MODAL -->',
  '<motion.div id="enquiryModal">',
  '<motion.div id="enquiryModal">',
];
for (const marker of cutMarkers) {
  const idx = indexBody.indexOf(marker);
  if (idx !== -1) indexBody = indexBody.slice(0, idx);
}

// Cut footer onward — Layout provides footer
const footerIdx = indexBody.indexOf('<!-- Footer -->');
if (footerIdx !== -1) indexBody = indexBody.slice(0, footerIdx);

// Replace empty package section with component placeholder
indexBody = indexBody.replace(
  /<motion\.div id="package-filters"[\s\S]*?<\/motion\.motion>/,
  '{{PACKAGE_GALLERY}}'
);

indexBody = indexBody.replace(
  /<div id="package-filters"[\s\S]*?<\/div>\s*<\/motion\.motion>/,
  '{{PACKAGE_GALLERY}}'
);

indexBody = indexBody.replace(
  /<div id="package-filters"[\s\S]*?package-container[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
  '{{PACKAGE_GALLERY}}\n  </section>'
);

let indexJsx = fixAssetPaths(indexBody);
indexJsx = indexJsx.replace(/\sclass=/g, ' className=');
indexJsx = indexJsx.replace(/\sfor=/g, ' htmlFor=');
indexJsx = stripGuideOnclick(indexJsx);
indexJsx = selfCloseTags(indexJsx);
indexJsx = indexJsx.replace(/<br>/gi, '<br />');

const indexStyles = extractStyles(indexHtml);
fs.writeFileSync(path.join(OUT, 'index.styles.css'), indexStyles);
fs.writeFileSync(path.join(OUT, 'HomeBody.raw.jsx'), indexJsx);
console.log('Index body extracted, length:', indexJsx.length);
