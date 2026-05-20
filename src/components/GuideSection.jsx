import { useState } from 'react';
import { GUIDE_ITEMS } from '../data/guides';

export default function GuideSection() {
  const defaultItem = GUIDE_ITEMS.find((g) => g.defaultActive) || GUIDE_ITEMS[0];
  const [activeId, setActiveId] = useState(defaultItem.id);
  const active = GUIDE_ITEMS.find((g) => g.id === activeId) || defaultItem;

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Thailand Travel Guide</h2>
        </div>

        <div className="grid min-h-[78vh] overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-2xl lg:grid-cols-[290px_1fr]">
          <div className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
            <div className="space-y-3">
              {GUIDE_ITEMS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`guide-btn flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#022b57] to-[#003b70] text-white shadow-lg'
                        : `border bg-white shadow-md hover:-translate-y-1 hover:shadow-xl ${
                            item.borderAccent ? 'border-red-500' : 'border-slate-200'
                          }`
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${
                        isActive ? 'bg-white/10' : item.iconBg
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="pr-2">
                      <h3
                        className={`text-lg font-bold leading-tight ${isActive ? 'text-white' : 'text-navy'}`}
                      >
                        {item.title}
                      </h3>
                      <p className={`mt-1 text-sm ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#bfdbfe] p-3 sm:p-5">
            <div className="absolute -top-24 right-0 h-52 w-72 rounded-full bg-blue-400/20 blur-3xl sm:h-72" />
            <div className="absolute -bottom-24 left-0 h-52 w-72 rounded-full bg-cyan-300/20 blur-3xl sm:h-72" />
            <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[2rem] border border-white/40 bg-white/20 p-3 shadow-[0_20px_60px_rgba(37,99,235,0.18)] backdrop-blur-xl sm:p-5">
              <img
                src={active.image}
                alt="Thailand Guide"
                className="guide-image h-auto max-h-[72vh] w-auto max-w-full rounded-[1.5rem] border border-white/60 object-contain shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
