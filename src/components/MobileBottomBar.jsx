export default function MobileBottomBar({ onEnquire }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden">
      <div className="grid grid-cols-3 text-center text-white">
        <a href="tel:+919599260057" className="bg-blue-500 py-2">
          <i className="fa-solid fa-phone text-sm" />
          <p className="mt-1 text-xs">Call</p>
        </a>
        <button type="button" onClick={onEnquire} className="bg-purple-500 py-2">
          <i className="fa-regular fa-envelope text-sm" />
          <p className="mt-1 text-xs">Enquire</p>
        </button>
        <a href="https://wa.me/919599260057" className="bg-green-500 py-2">
          <i className="fa-brands fa-whatsapp text-sm" />
          <p className="mt-1 text-xs">WhatsApp</p>
        </a>
      </div>
    </div>
  );
}
