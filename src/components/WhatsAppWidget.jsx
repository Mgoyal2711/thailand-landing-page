import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 hidden flex-col items-center lg:flex sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
        <div className="mt-2 animate-bounce rounded-full bg-white/95 px-3 py-1.5 text-center shadow-lg backdrop-blur">
          <p className="text-[11px] font-bold leading-tight text-slate-800">Avg Callback</p>
          <p className="text-[10px] font-semibold text-red-500">Under 15 mins</p>
        </div>
      </div>

      <div
        id="whatsappPopup"
        className={`fixed bottom-24 right-6 z-50 w-[290px] overflow-hidden rounded-[2rem] bg-white shadow-2xl ${open ? '' : 'hidden'}`}
      >
        <div className="bg-[#25D366] px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold leading-tight">Kingdom of Holidays</h3>
              <p className="text-xs text-white/90">Thailand Travel Experts</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f5f7] p-4">
          <div className="mb-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow">
            👋 Hello! Welcome to Kingdom of Holidays
          </div>
          <div className="rounded-2xl bg-white px-4 py-4 text-sm leading-7 text-slate-700 shadow">
            ✈️ Our travel experts are live &amp; available for chat.
            <br />
            <br />
            Get best Thailand packages, flight deals &amp; customized itineraries instantly.
          </div>
          <a
            href="https://wa.me/919599260057"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-lg font-semibold text-white transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-6 w-6" />
            Start WhatsApp Chat
          </a>
        </div>
      </div>
    </>
  );
}
