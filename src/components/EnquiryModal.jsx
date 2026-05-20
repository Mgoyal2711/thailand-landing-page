// import { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';

// const DURATIONS = [
//   '3N-4D',
//   '4N-5D',
//   '5N-6D',
//   '6N-7D',
//   '7N-8D',
//   '8N-9D',
//   '9N-10D',
//   '10N-11D',
// ];

// const TOUR_TYPES = [
//   'Family',
//   'Couple',
//   'Honeymoon',
//   'Friends',
// ];

// export default function EnquiryModal({ open, onClose }) {
//   if (!open) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_uxwdrrf', 'template_rvx3a2p', e.target)
//       .then(() => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Success 🎉',
//           text: 'Enquiry Sent Successfully',
//           confirmButtonColor: '#063a7b',
//         });

//         e.target.reset();
//         onClose();
//       })
//       .catch(() => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops!',
//           text: 'Something went wrong',
//         });
//       });
//   };

//   return (
//     <div
//       id="enquiryModal"
//       className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-4"
//       role="dialog"
//       aria-modal="true"
//     >
//       <div className="flex min-h-screen items-center justify-center p-4">
//         <div className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-[30px] bg-white p-6 shadow-2xl">

//           {/* HEADER */}
//           <div className="mb-8 pr-10">
//             <h3 className="text-2xl font-bold text-navy">
//               GET FREE QUOTES FOR THAILAND
//             </h3>

//             {/* <p className="text-sm italic text-gray-500">
//               Take Expert Opinion on Thailand tourism, itineraries,
//               and a perfect Thailand Holiday Plan
//             </p> */}

//             <button
//               type="button"
//               onClick={onClose}
//               className="absolute top-4 right-4 z-[999] flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-gray-200"
//               aria-label="Close"
//             >
//               ✕
//             </button>
//           </div>

//           {/* FORM */}
//           <form
//             id="enquiryForm"
//             className="space-y-4"
//             onSubmit={handleSubmit}
//           >

//             {/* NAME + PHONE */}
//             <div className="grid gap-3 sm:grid-cols-2">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 required
//                 className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-400"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Mobile Number"
//                 required
//                 className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             {/* DEPARTURE CITY */}
//             <input
//               type="text"
//               name="departure_city"
//               placeholder="Departure City"
//               required
//               className="w-full rounded-xl border p-3 outline-none"
//             />

//             {/* DATE */}
//             <input
//               type="date"
//               name="travel_date"
//               required
//               className="w-full rounded-xl border border-slate-300 px-4 py-3"
//             />

//             {/* NO. OF PERSON */}
//             <select
//               name="persons"
//               required
//               className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
//             >
//               <option value="">No. Of Person</option>
//               <option value="1">1 Person</option>
//               <option value="2">2 Persons</option>
//               <option value="3">3 Persons</option>
//               <option value="4">4 Persons</option>
//               <option value="5">5 Persons</option>
//               <option value="6">6 Persons</option>
//               <option value="7">7 Persons</option>
//               <option value="8">8 Persons</option>
//               <option value="9">9 Persons</option>
//               <option value="10">10+ Persons</option>
//             </select>

//             {/* DURATION DROPDOWN */}
//             <select
//               name="duration"
//               required
//               className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
//             >
//               <option value="">Select Duration</option>

//               {DURATIONS.map((d) => (
//                 <option key={d} value={d}>
//                   {d}
//                 </option>
//               ))}
//             </select>

//             {/* TOUR TYPE DROPDOWN */}
//             <select
//               name="tour_type"
//               required
//               className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
//             >
//               <option value="">Select Tour Type</option>

//               {TOUR_TYPES.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>

//             {/* SUBMIT BUTTON */}
//             <button
//               type="submit"
//               className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#022b57] to-[#004a8f] py-3 font-bold text-white transition hover:scale-[1.02]"
//             >
//               Get My Quote 🚀 | Get 20% Off Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const DURATIONS = [
  '3N-4D',
  '4N-5D',
  '5N-6D',
  '6N-7D',
  '7N-8D',
  '8N-9D',
  '9N-10D',
  '10N-11D',
];

const TOUR_TYPES = [
  'Family',
  'Couple',
  'Honeymoon',
  'Friends',
];

export default function EnquiryModal({ open, onClose }) {

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uxwdrrf',
        'template_rvx3a2p',
        e.target
      )
      .then(() => {

        Swal.fire({
          icon: 'success',
          title: 'Success 🎉',
          text: 'Enquiry Sent Successfully',
          confirmButtonColor: '#063a7b',
        });

        e.target.reset();
        onClose();

      })
      .catch(() => {

        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong',
        });

      });
  };

  return (
    <div
      id="enquiryModal"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
    >

      <div className="flex min-h-screen items-center justify-center p-4">

        <div className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-[30px] bg-white p-6 shadow-2xl">

          {/* HEADER */}
          <div className="mb-8 pr-10">

            <h3 className="text-2xl font-bold text-navy">
              GET FREE QUOTES FOR THAILAND
            </h3>

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-[999] flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-gray-200"
              aria-label="Close"
            >
              ✕
            </button>

          </div>

          {/* FORM */}
          <form
            id="enquiryForm"
            className="space-y-4"
            onSubmit={handleSubmit}
          >

            {/* NAME + PHONE */}
            <div className="grid gap-3 sm:grid-cols-2">

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="tel"
                name="whatsapp"
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-400"
              />

            </div>

            {/* DEPARTURE CITY */}
            <input
              type="text"
              name="departure_city"
              placeholder="Departure City"
              required
              className="w-full rounded-xl border p-3 outline-none"
            />

            {/* TRAVEL DATE */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Travel Date
              </label>

              <input
                type="date"
                name="travel_date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
              />

            </div>
            {/* NO. OF PERSON */}
            <select
              name="adults"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
            >

              <option value="">
                No. Of Person
              </option>

              <option value="1">
                1 Person
              </option>

              <option value="2">
                2 Persons
              </option>

              <option value="3">
                3 Persons
              </option>

              <option value="4">
                4 Persons
              </option>

              <option value="5">
                5 Persons
              </option>

              <option value="6">
                6 Persons
              </option>

              <option value="7">
                7 Persons
              </option>

              <option value="8">
                8 Persons
              </option>

              <option value="9">
                9 Persons
              </option>

              <option value="10+">
                10+ Persons
              </option>

            </select>

            {/* DURATION */}
            <select
              name="duration"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
            >

              <option value="">
                Select Duration
              </option>

              {DURATIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}

            </select>

            {/* TOUR TYPE */}
            <select
              name="tour_type"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
            >

              <option value="">
                Select Tour Type
              </option>

              {TOUR_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}

            </select>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#022b57] to-[#004a8f] py-3 font-bold text-white transition hover:scale-[1.02]"
            >
              Get My Quote 🚀 | Get 20% Off Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}