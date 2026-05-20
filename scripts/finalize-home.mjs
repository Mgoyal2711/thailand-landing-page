import fs from 'fs';

const SOURCE = '/Users/mayankgoyal/Downloads/KOH-LandingPage-main/index.html';
const OUT = '/Users/mayankgoyal/Downloads/thailand landing page/src/pages/Home.jsx';

let html = fs.readFileSync(SOURCE, 'utf8');
html = html.replace(/<\/body>[\s\S]*$/i, '</body>');

let body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];
body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

// Replacements while HTML comments still exist
body = body.replace(
  /<!-- Packages -->[\s\S]*?<!-- TOP ATTRACTIONS -->/,
  '<PackageGallery onEnquire={openEnquiryModal} />\n\n  <!-- TOP ATTRACTIONS -->'
);

body = body.replace(
  /<!-- Thailand Info Hub -->[\s\S]*?<!-- OTHER POPULAR TOUR PACKAGES -->/,
  '<GuideSection />\n\n  <!-- OTHER POPULAR TOUR PACKAGES -->'
);

const footerIdx = body.indexOf('<footer');
if (footerIdx !== -1) body = body.slice(0, footerIdx);

body = body.replace(/<!--[\s\S]*?-->/g, '');

while (body.includes('<style>')) {
  const s = body.indexOf('<style>');
  const e = body.indexOf('</style>', s) + 8;
  body = body.slice(0, s) + body.slice(e);
}

body = body
  .replace(/<motion.div <div/g, '<div')
  .replace(/<div <motion.div/g, '<div')
  .replace(/\sclass=/g, ' className=')
  .replace(/\sfor=/g, ' htmlFor=')
  .replace(/src="\.\//g, 'src="/')
  .replace(/href="(about|contact|privacy|terms|cancel)\.html"/g, 'href="/$1"')
  .replace(/onclick="openEnquiryModal\(\)"/g, 'onClick={openEnquiryModal}')
  .replace(/\sonclick="changeGuide\([^"]*\)"/g, '')
  .replace(/javascript:void\(0\)/g, '#');

// Fix other popular: ensure max-w-7xl closes
body = body.replace(
  /(<section className="py-14 bg-gradient-to-r from-\[#063a7b\] to-\[#0d4e9e\] overflow-hidden">[\s\S]*?)(<\/section>)/,
  (full, inner, close) => {
    const opens = (inner.match(/<div/g) || []).length;
    const closes = (inner.match(/<\/motion.div>/g) || []).length + (inner.match(/<\/motion.div>/g) || []).length;
    const closeDivs = (inner.match(/<\/div>/g) || []).length;
    if (opens > closeDivs) {
      return inner + '\n    </div>\n  ' + close;
    }
    return full;
  }
);

for (const tag of ['img', 'input', 'br', 'hr']) {
  body = body.replace(new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi'), `<${tag}$1 />`);
}

const component = `import PackageGallery from '../components/PackageGallery';
import GuideSection from '../components/GuideSection';

export default function Home({ openEnquiryModal }) {
  return (
    <>
${body.split('\n').map((l) => (l.trim() ? '      ' + l : l)).join('\n')}
    </>
  );
}
`;

fs.writeFileSync(OUT, component);
console.log('lines', component.split('\n').length);
