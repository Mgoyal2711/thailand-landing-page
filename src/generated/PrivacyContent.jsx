
export default function PrivacyContent() {
  return (
    <>
      <section className="hero-section relative overflow-hidden">
      
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
            className="h-[260px] w-full object-cover" />
      
          <div className="overlay absolute inset-0"></div>
      
          <div className="absolute inset-0 flex items-center justify-center px-4">
      
            <div className="max-w-4xl text-center text-white">
      
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
      
                <i data-lucide="shield-check" className="h-4 w-4 text-gold"></i>
                Kingdom Of Holidays
      
              </div>
      
              <h1 className="text-4xl font-extrabold sm:text-5xl">
                Privacy
                <span className="text-gold">Policy</span>
              </h1>
      
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
      
                Your privacy and data protection matter to us.
                Please review how Kingdom Of Holidays collects,
                uses and protects your personal information.
      
              </p>
      
            </div>
      
          </div>
      
        </section>
      
        
      
        <section className="px-4 py-10">
      
          <div className="mx-auto max-w-7xl space-y-6">
      
            
      
            <div className="top-info-card rounded-[28px] bg-white p-5 shadow-lg">
      
              <div className="flex items-start gap-4">
      
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-ocean">
      
                  <i data-lucide="lock" className="h-7 w-7"></i>
      
                </div>
      
                <div>
      
                  <h2 className="text-2xl font-extrabold text-navy">
                    Your Privacy Matters
                  </h2>
      
                  <p className="mt-2 text-sm leading-7 text-slate-600">
      
                    Kingdom Of Holidays respects your privacy and is committed
                    to protecting all personal information shared with us while
                    using our website, booking services and travel platforms.
      
                  </p>
      
                </div>
      
              </div>
      
            </div>
      
            
      
            <div className="grid gap-6 lg:grid-cols-2">
      
              
      
              <div className="policy-card rounded-[28px] bg-white p-6 shadow-lg">
      
                <div className="mb-5 flex items-center gap-4">
      
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-ocean">
      
                    <i data-lucide="user-round" className="h-7 w-7"></i>
      
                  </div>
      
                  <div>
      
                    <p className="text-xs font-bold uppercase tracking-[3px] text-ocean">
                      Information
                    </p>
      
                    <h3 className="text-2xl font-extrabold text-navy">
                      Personal Identification
                    </h3>
      
                  </div>
      
                </div>
      
                <div className="space-y-3 text-sm leading-7 text-slate-700">
      
                  <div className="rounded-2xl bg-slate-50 p-4">
                    We may collect details such as your name, phone number,
                    email address, payment details and booking information.
                  </div>
      
                  <div className="rounded-2xl bg-slate-50 p-4">
                    Users can also browse our website anonymously without sharing personal data.
                  </div>
      
                  <div className="rounded-2xl bg-yellow-50 p-4">
                    Certain services may not function properly if information is not shared.
                  </div>
      
                </div>
      
              </div>
      
              
      
              <div className="policy-card rounded-[28px] bg-white p-6 shadow-lg">
      
                <div className="mb-5 flex items-center gap-4">
      
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
      
                    <i data-lucide="monitor" className="h-7 w-7"></i>
      
                  </div>
      
                  <div>
      
                    <p className="text-xs font-bold uppercase tracking-[3px] text-green-600">
                      Technical Data
                    </p>
      
                    <h3 className="text-2xl font-extrabold text-navy">
                      Non-Personal Information
                    </h3>
      
                  </div>
      
                </div>
      
                <div className="space-y-3 text-sm leading-7 text-slate-700">
      
                  <div className="rounded-2xl bg-slate-50 p-4">
                    Browser type, device information, operating system and ISP details may be collected.
                  </div>
      
                  <div className="rounded-2xl bg-slate-50 p-4">
                    This helps us improve website performance and user experience.
                  </div>
      
                  <div className="rounded-2xl bg-blue-50 p-4">
                    Cookies may be used to enhance browsing and track site activity.
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
            
      
            <div className="rounded-[28px] bg-white p-6 shadow-lg">
      
              <div className="mb-6 flex items-center gap-4">
      
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
      
                  <i data-lucide="database" className="h-7 w-7"></i>
      
                </div>
      
                <div>
      
                  <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
                    Usage
                  </p>
      
                  <h2 className="text-3xl font-extrabold text-navy">
                    How We Use Information
                  </h2>
      
                </div>
      
              </div>
      
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      
                <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  To improve customer service and travel support.
                </div>
      
                <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  To personalize user experience and understand customer preferences.
                </div>
      
                <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  To process payments and complete bookings securely.
                </div>
      
                <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  To share promotional offers, newsletters and updates.
                </div>
      
                <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  To run surveys, contests and website promotions.
                </div>
      
                <div className="rounded-2xl bg-yellow-50 p-5 text-sm leading-7 text-slate-700">
                  Some information may be shared with third-party partners for marketing purposes.
                </div>
      
              </div>
      
            </div>
      
            
      
            <div className="grid gap-6 lg:grid-cols-2">
      
              
      
              <div className="policy-card rounded-[28px] bg-white p-6 shadow-lg">
      
                <div className="mb-5 flex items-center gap-4">
      
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
      
                    <i data-lucide="shield" className="h-7 w-7"></i>
      
                  </div>
      
                  <div>
      
                    <p className="text-xs font-bold uppercase tracking-[3px] text-red-500">
                      Protection
                    </p>
      
                    <h3 className="text-2xl font-extrabold text-navy">
                      Data Security
                    </h3>
      
                  </div>
      
                </div>
      
                <div className="space-y-3 text-sm leading-7 text-slate-700">
      
                  <div className="rounded-2xl bg-slate-50 p-4">
                    We use secure systems and SSL encryption for data protection.
                  </div>
      
                  <div className="rounded-2xl bg-slate-50 p-4">
                    Payment and transaction information is processed securely.
                  </div>
      
                  <div className="rounded-2xl bg-green-50 p-4">
                    Our systems comply with PCI vulnerability standards.
                  </div>
      
                </div>
      
              </div>
      
              
      
              <div className="policy-card rounded-[28px] bg-white p-6 shadow-lg">
      
                <div className="mb-5 flex items-center gap-4">
      
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
      
                    <i data-lucide="globe" className="h-7 w-7"></i>
      
                  </div>
      
                  <div>
      
                    <p className="text-xs font-bold uppercase tracking-[3px] text-orange-500">
                      Third Party
                    </p>
      
                    <h3 className="text-2xl font-extrabold text-navy">
                      External Websites & Ads
                    </h3>
      
                  </div>
      
                </div>
      
                <div className="space-y-3 text-sm leading-7 text-slate-700">
      
                  <div className="rounded-2xl bg-slate-50 p-4">
                    Our website may contain links to external websites and advertisers.
                  </div>
      
                  <div className="rounded-2xl bg-slate-50 p-4">
                    These websites operate under their own privacy policies.
                  </div>
      
                  <div className="rounded-2xl bg-yellow-50 p-4">
                    Google AdSense and advertising cookies may be used for personalized ads.
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
            
      
            <div className="rounded-[28px] bg-white p-6 shadow-lg">
      
              <div className="mb-5 flex items-center gap-4">
      
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
      
                  <i data-lucide="baby" className="h-7 w-7"></i>
      
                </div>
      
                <div>
      
                  <p className="text-xs font-bold uppercase tracking-[3px] text-pink-500">
                    Protection
                  </p>
      
                  <h2 className="text-3xl font-extrabold text-navy">
                    Children's Privacy
                  </h2>
      
                </div>
      
              </div>
      
              <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-8 text-slate-700">
      
                Protecting children’s privacy is extremely important to us.
                We do not knowingly collect personal information from children under 13 years of age.
      
              </div>
      
            </div>
      
          
      
            
      
            <footer className="mt-10 bg-[#031633] px-4 py-10 text-center text-white rounded-[28px]">
      
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Kingdom Of Holidays
              </h2>
      
              <p className="mt-2 text-sm text-white/70 sm:text-base">
                Creating unforgettable travel memories.
              </p>
      
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      
                <a href="index.html"
                  className="rounded-full bg-[#FFC107] px-6 py-3 text-sm font-bold text-black transition hover:scale-105">
      
                  Back To Home
      
                </a>
      
      
              </div>
      
      
      
            </footer>
      
          </div>
      
        </section>
    </>
  );
}
