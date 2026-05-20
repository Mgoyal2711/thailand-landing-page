import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PACKAGE_CATEGORIES, PACKAGE_IMAGES_BY_CATEGORY } from '../data/packages';

function PackageCard({ src, idx, onEnquire }) {
  return (
    <article className="group relative min-w-[82%] overflow-hidden rounded-2xl border border-white/50 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[45%] lg:min-w-[30%]">
      <div className="relative aspect-[3/4] overflow-visible">
        <img
          src={`/${src}`}
          alt={`Thailand package ${idx + 1}`}
          loading="lazy"
          decoding="async"
          className="ko-img h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="border-t border-red-500 bg-white p-4">
          <h4 className="mb-3 text-sm font-bold text-navy">Package Inclusions</h4>
          <div className="grid grid-cols-4 gap-3 text-center">
            {[
              ['🚘', 'Transfers'],
              ['🏩', 'Hotels'],
              ['🍷', 'Meals'],
              ['🏝️', 'Sightseeing'],
            ].map(([emoji, label]) => (
              <div key={label} className="flex flex-col items-center">
                <div className="text-4xl">{emoji}</div>
                <span className="mt-1 text-[11px] font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onEnquire}
              className="flex items-center justify-center rounded-xl bg-[#a50f2d] px-4 py-3 text-sm font-bold text-white transition hover:scale-105"
            >
              ENQUIRE NOW
            </button>
            <a
              href="https://wa.me/919599260057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl bg-[#32b255] px-4 py-3 text-sm font-bold text-white transition hover:scale-105"
            >
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Skeletons() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <div key={i} className="package-skeleton h-64 min-w-[82%] sm:min-w-[45%] lg:min-w-[30%]" />
      ))}
    </>
  );
}

export default function PackageGallery({ onEnquire }) {
  const [activeCategory, setActiveCategory] = useState(PACKAGE_CATEGORIES[0]);
  const [loading, setLoading] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setLoading(false);
      gridRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    }, 380);
    return () => clearTimeout(t);
  }, [activeCategory]);

  const scroll = (dir) => {
    gridRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  const images = PACKAGE_IMAGES_BY_CATEGORY[activeCategory] || [];

  return (
    <section className="px-4 pt-10 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center reveal">
          <h2 className="font-display mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
            Popular Thailand Packages
          </h2>
          <p className="fire-text mx-auto mt-3 max-w-3xl text-base font-bold leading-relaxed">
            Expert-crafted Thailand packages for
            <span> Couples</span>, <span> Friends</span>, <span> Families</span> &amp;
            <span> Honeymoon Travelers</span>
          </p>
        </div>
        <div className="glass-panel reveal mb-8 flex flex-wrap justify-center gap-3 rounded-2xl p-4 shadow-card">
          {PACKAGE_CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`${
                  isActive
                    ? 'btn-travel-gradient text-white shadow-lg'
                    : 'bg-white text-navy hover:border-ocean/30 hover:bg-slate-100'
                } rounded-full border border-red-500 px-4 py-2 text-sm font-semibold transition duration-300`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="package-container reveal">
          <div className="relative">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="btn-travel-gradient absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-premium transition hover:brightness-110 md:flex"
              aria-label="Previous packages"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div ref={gridRef} id="package-grid" className="slider-track flex gap-5 overflow-x-auto rounded-2xl">
              {loading ? (
                <Skeletons />
              ) : (
                images.map((src, idx) => (
                  <PackageCard key={`${activeCategory}-${src}`} src={src} idx={idx} onEnquire={onEnquire} />
                ))
              )}
            </div>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="btn-travel-gradient absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-premium transition hover:brightness-110 md:flex"
              aria-label="Next packages"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
