
export default function AboutContent() {
  return (
    <>
      <section className="relative h-[42vh] overflow-hidden">
      
          
      
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
            className="absolute inset-0 h-full w-full object-cover" />
      
          
      
          <div className="hero-overlay absolute inset-0"></div>
      
          
      
          <div className="relative z-10 flex h-full items-center justify-center px-4">
      
            <div className="max-w-4xl text-center text-white">
      
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[4px] text-yellow-300 md:text-xs">
                About Kingdom Of Holidays
              </p>
      
              <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
                Creating Luxury Travel Experiences
              </h1>
      
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-white/90 md:text-[15px]">
                We create unforgettable journeys across Thailand,
                Uttarakhand, Himachal Pradesh and Andaman with
                personalized itineraries and premium hospitality.
              </p>
      
            </div>
      
          </div>
      
        </section>
      
        
      
        <section className="py-10 px-4">
      
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
      
            
      
            <div className="relative">
      
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974&auto=format&fit=crop"
                className="h-[350px] w-full rounded-[1.8rem] object-cover shadow-xl" />
      
              
      
              <div
                className="absolute bottom-3 right-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
      
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                  Happy Travelers
                </p>
      
              </div>
      
            </div>
      
            
      
            <div>
      
              <p className="text-xs font-semibold uppercase tracking-[4px] text-[#003459]">
                Welcome To Kingdom Of Holidays
              </p>
      
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900">
                Your Trusted Travel Partner
              </h2>
      
              <p className="mt-4 text-[15px] leading-7 text-slate-600">
      
                We are a company of trusted and experienced travel specialists
                creating customized luxury experiences for Indian and
                international travelers.
      
              </p>
      
              <p className="mt-3 text-[15px] leading-7 text-slate-600">
      
                Our expertise includes Thailand, Uttarakhand,
                Himachal Pradesh and Andaman packages with
                premium stays, transport and personalized planning.
      
              </p>
      
              <p className="mt-3 text-[15px] leading-7 text-slate-600">
      
                We focus on stress-free holidays, unforgettable memories
                and seamless travel support.
      
              </p>
      
            </div>
      
          </div>
      
        </section>
      
        
      
        <section className="bg-white py-10 px-4">
      
          <div className="mx-auto max-w-6xl">
      
            
      
            <div className="text-center">
      
              <p className="text-xs font-semibold uppercase tracking-[4px] text-[#003459]">
                Why Choose Us
              </p>
      
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Travel Beyond Expectations
              </h2>
      
            </div>
      
            
      
            <div className="mt-8 grid gap-5 md:grid-cols-3">
      
              
      
              <div
                className="rounded-[1.8rem] bg-[#f8f9fa] p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
                <div className="mb-3 text-3xl">
                  🌍
                </div>
      
                <h3 className="text-lg font-bold text-slate-900">
                  Customized Trips
                </h3>
      
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tailor-made travel plans according to your
                  budget and travel style.
                </p>
      
              </div>
      
              
      
              <div
                className="rounded-[1.8rem] bg-[#f8f9fa] p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
                <div className="mb-3 text-3xl">
                  ⭐
                </div>
      
                <h3 className="text-lg font-bold text-slate-900">
                  Trusted Service
                </h3>
      
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Professional support and seamless planning
                  trusted by thousands of travelers.
                </p>
      
              </div>
      
              
      
              <div
                className="rounded-[1.8rem] bg-[#f8f9fa] p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
                <div className="mb-3 text-3xl">
                  ✈️
                </div>
      
                <h3 className="text-lg font-bold text-slate-900">
                  Complete Assistance
                </h3>
      
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Flights, hotels, sightseeing and transfers —
                  everything handled smoothly.
                </p>
      
              </div>
      
            </div>
      
          </div>
      
        </section>
      
        
      
        <footer className="bg-[#0a192f] py-8 text-center text-white">
      
          <h3 className="text-xl font-bold">
            Kingdom Of Holidays
          </h3>
      
          <p className="mt-2 text-xs text-white/70">
            Creating unforgettable travel memories.
          </p>
      
          <a href="index.html"
            className="mt-5 inline-block rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-bold text-black transition hover:scale-105">
      
            Back To Home
      
          </a>
      
        </footer>
    </>
  );
}
