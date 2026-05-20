import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-lg">
                <img src="/img/koh logo.jpeg" alt="Kingdom of Holidays" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-lg font-bold text-navy">Kingdom of Holidays</p>
                <p className="text-xs text-slate-500">Thailand packages · Custom itineraries</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-1 font-semibold text-navy">Quick Links</h4>
            <div className="flex flex-col gap-0.5 text-sm text-slate-600">
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms &amp; Conditions</Link>
              <Link to="/cancel">Cancellation Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-1 font-semibold text-navy">📍 Thailand Office</h4>
            <p className="text-sm leading-5 text-slate-500">
              193/59, Rungland Alley
              <br />
              South Pattaya Road
              <br />
              Nangpura, Banglamung
              <br />
              Chonburi – 20150
            </p>
            <p className="mt-1 text-sm text-slate-500">📞 +66 924751704</p>
          </div>

          <div>
            <h4 className="mb-1 font-semibold text-navy">📍 India Office</h4>
            <p className="text-sm leading-5 text-slate-500">
              SHOPPER SQUARE MALL
              <br />
              1st Floor, SNO4 14/8 Raj Nagar
              <br />
              DELHI-NCR-GZB -201002
            </p>
            <p className="mt-1 text-sm text-slate-500">📞 +91 9971600663</p>
          </div>
        </div>

        <div className="mt-4 border-t pt-3 text-center">
          <p className="text-sm text-slate-500">© 2024 Kingdom of Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
