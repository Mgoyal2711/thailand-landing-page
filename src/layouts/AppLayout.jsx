// import { useState, useCallback } from 'react';
// import { Outlet } from 'react-router-dom';
// import emailjs from '@emailjs/browser';
// import Footer from '../components/Footer';
// import WhatsAppWidget from '../components/WhatsAppWidget';
// import MobileBottomBar from '../components/MobileBottomBar';
// import EnquiryModal from '../components/EnquiryModal';
// import { useReveal } from '../hooks/useReveal';
// import { useCountdown } from '../hooks/useCountdown';
// import { useLucideIcons } from '../hooks/useLucideIcons';

// emailjs.init('5nlF7sfx0GCXUMqiq');

// export default function AppLayout() {
//   const [enquiryOpen, setEnquiryOpen] = useState(false);
//   const openEnquiryModal = useCallback(() => setEnquiryOpen(true), []);
//   const closeEnquiryModal = useCallback(() => setEnquiryOpen(false), []);

//   useReveal();
//   useCountdown();
//   useLucideIcons();

//   return (
//     <div className="bg-softwhite font-sans text-slate-800 antialiased pb-16 lg:pb-0">
//       <Outlet context={{ openEnquiryModal, closeEnquiryModal }} />
//       <Footer />
//       <WhatsAppWidget />
//       <MobileBottomBar onEnquire={openEnquiryModal} />
//       <EnquiryModal open={enquiryOpen} onClose={closeEnquiryModal} />
//     </div>
//   );
// }



// import { useState, useCallback, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import emailjs from '@emailjs/browser';

// import Footer from '../components/Footer';
// import WhatsAppWidget from '../components/WhatsAppWidget';
// import MobileBottomBar from '../components/MobileBottomBar';
// import EnquiryModal from '../components/EnquiryModal';

// import { useReveal } from '../hooks/useReveal';
// import { useCountdown } from '../hooks/useCountdown';
// import { useLucideIcons } from '../hooks/useLucideIcons';

// emailjs.init('5nlF7sfx0GCXUMqiq');

// export default function AppLayout() {
//   const [enquiryOpen, setEnquiryOpen] = useState(false);

//   // MANUAL OPEN
//   const openEnquiryModal = useCallback(() => {
//     setEnquiryOpen(true);
//   }, []);

//   // CLOSE + REOPEN AFTER 1 MIN
//   const closeEnquiryModal = useCallback(() => {
//     setEnquiryOpen(false);

//     setTimeout(() => {
//       setEnquiryOpen(true);
//     }, 60000); // 1 minute
//   }, []);

//   // AUTO OPEN AFTER 30 SEC
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setEnquiryOpen(true);
//     }, 30000); // 30 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   useReveal();
//   useCountdown();
//   useLucideIcons();

//   return (
//     <div className="bg-softwhite font-sans text-slate-800 antialiased pb-16 lg:pb-0">
      
//       <Outlet
//         context={{
//           openEnquiryModal,
//           closeEnquiryModal,
//         }}
//       />

//       <Footer />

//       <WhatsAppWidget />

//       <MobileBottomBar
//         onEnquire={openEnquiryModal}
//       />

//       <EnquiryModal
//         open={enquiryOpen}
//         onClose={closeEnquiryModal}
//       />
//     </div>
//   );
// }



import { useState, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import MobileBottomBar from '../components/MobileBottomBar';
import EnquiryModal from '../components/EnquiryModal';

import { useReveal } from '../hooks/useReveal';
import { useCountdown } from '../hooks/useCountdown';
import { useLucideIcons } from '../hooks/useLucideIcons';

emailjs.init('5nlF7sfx0GCXUMqiq');

export default function AppLayout() {

  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // OPEN MODAL
  const openEnquiryModal = useCallback(() => {
    setEnquiryOpen(true);
  }, []);

  // CLOSE MODAL
  const closeEnquiryModal = useCallback(() => {
    setEnquiryOpen(false);

    // reopen after 1 min
    setTimeout(() => {
      setEnquiryOpen(true);
    }, 60000);

  }, []);

  // AUTO OPEN AFTER 30 SEC
  useEffect(() => {

    const timer = setTimeout(() => {
      setEnquiryOpen(true);
    }, 30000);

    return () => clearTimeout(timer);

  }, []);

  // PACKAGE CLICK EVENT
  useEffect(() => {

    const handleOpenModal = () => {
      setEnquiryOpen(true);
    };

    window.addEventListener(
      'open-enquiry-modal',
      handleOpenModal
    );

    return () => {
      window.removeEventListener(
        'open-enquiry-modal',
        handleOpenModal
      );
    };

  }, []);

  useReveal();
  useCountdown();
  useLucideIcons();

  return (
    <div className="bg-softwhite font-sans text-slate-800 antialiased pb-16 lg:pb-0">

      <Outlet
        context={{
          openEnquiryModal,
          closeEnquiryModal,
        }}
      />

      <Footer />

      <WhatsAppWidget />

      <MobileBottomBar
        onEnquire={openEnquiryModal}
      />

      <EnquiryModal
        open={enquiryOpen}
        onClose={closeEnquiryModal}
      />

    </div>
  );
}