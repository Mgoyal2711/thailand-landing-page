import fs from 'fs';
import path from 'path';

const rawPath = path.resolve('src/generated/HomeBody.raw.jsx');
const outPath = path.resolve('src/pages/Home.jsx');

let raw = fs.readFileSync(rawPath, 'utf8');

// Remove footer, whatsapp, mobile bar, enquiry modal (handled in Layout)
const footerIdx = raw.indexOf('<footer');
if (footerIdx !== -1) raw = raw.slice(0, footerIdx);

// Replace package placeholder
raw = raw.replace('{{PACKAGE_GALLERY}}', '<PackageGallery />');

// Replace guide section with component
const guideStart = raw.indexOf('<section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">');
const guideEnd = raw.indexOf('<section className="py-14 bg-gradient-to-r from-[#063a7b]');
if (guideStart !== -1 && guideEnd !== -1) {
  raw = raw.slice(0, guideStart) + '<GuideSection />\n\n  ' + raw.slice(guideEnd);
}

raw = raw
  .replace(/onclick="openEnquiryModal\(\)"/g, 'onClick={openEnquiryModal}')
  .replace(/onclick="closeEnquiryModal\(\)"/g, 'onClick={closeEnquiryModal}')
  .replace(/href="javascript:void\(0\)"/g, 'href="#"')
  .replace(/onfocus="\(this\.type='date'\)"/g, "onFocus={(e) => { e.target.type = 'date'; }}")
  .replace(/onblur="if\(!this\.value\)this\.type='text'"/g, "onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}");

const component = `import PackageGallery from '../components/PackageGallery';
import GuideSection from '../components/GuideSection';

export default function Home({ openEnquiryModal }) {
  return (
    <>
${raw}
    </>
  );
}
`;

fs.writeFileSync(outPath, component);
console.log('Wrote', outPath, 'length', component.length);
