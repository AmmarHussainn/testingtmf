// 'use client'

// import { useState } from 'react';
// import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// export default function FormPopup({ setFpopup }) {
//   const [open, setOpen] = useState(true);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [service, setService] = useState('Animated Video'); // default option
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSendEmail = async () => {
//     if (!email || !name || !phone) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('https://tmf-backend.onrender.com/waitlist/email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, phone, service, message }),
//       });

//       if (response.ok) {
//         setOpen(false);
//       } else {
//         setError("Failed to send email. Please try again.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={setOpen} className="relative z-10">
//       <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

//       <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//           <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//             <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//               <div className="sm:flex sm:items-start">
//                 <div className="mt-3 text-center w-full sm:mt-0 sm:text-left">
//                   <div className="mt-2 w-full">
//                     <p>Enter your Name</p>
//                     <input
//                       type='text'
//                       className='w-full border my-2 p-2 border-black'
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />

//                     <p>Enter your Email</p>
//                     <input
//                       type='email'
//                       className='w-full border my-2 p-2 border-black'
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />

//                     <p>Enter your Phone Number with country code</p>
//                     <PhoneInput
//                       country={'us'}
//                       value={phone}
//                       onChange={setPhone}
//                       inputClass="!w-[100%] !border-none  my-2 p-2 "
//                       className="w-[100%]  border border-black"
//                     />

//                     <p>Inquiry about service</p>
//                     <select
//                       className='w-full border my-2 p-2 border-black'
//                       value={service}
//                       onChange={(e) => setService(e.target.value)}
//                     >
//                       <option value="Animated Video">Animated Video</option>
//                       <option value="Conventional Video">Conventional Video</option>
//                     </select>

//                     <p>Message</p>
//                     <textarea
//                       className='w-full border my-2 p-2 border-black'
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                     />

//                     {error && <p className="text-red-500 text-sm">{error}</p>}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//               <button
//                 type="button"
//                 onClick={handleSendEmail}
//                 disabled={loading}
//                 className="inline-flex w-full justify-center rounded-md bg-[#5c57c3] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:[#5c57c3] sm:ml-3 sm:w-auto"
//               >
//                 {loading ? "Sending..." : "Submit"}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setFpopup(false)}
//                 className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//               >
//                 Cancel
//               </button>
//             </div>
//           </DialogPanel>
//         </div>
//       </div>
//     </Dialog>
//   );
// }



'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function FormPopup({ setFpopup , ...props }) {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState(props?.userCredentials?.name ||'');
  const [email, setEmail] = useState(props?.userCredentials?.email ||'');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Animated'); // default option
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFormSubmit = async () => {
    if (!email || !name || !phone) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(' https://tmf-backend.onrender.com/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          service,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess('Order created successfully!');
        console.log('Response:', result);
        setTimeout(() => {
          setFpopup(false); 
        }, 1500);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to create order. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog  open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div  className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center w-full sm:mt-0 sm:text-left">
                  <div className="mt-2 w-full">
                    <p>Enter your Name</p>
                    <input
                      type="text"
                      className="w-full border my-2 p-2 border-black"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <p>Enter your Email</p>
                    <input
                      type="email"
                      className="w-full border my-2 p-2 border-black"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <p>Enter your Phone Number with country code</p>
                    <PhoneInput
                      country={'us'}
                      value={phone}
                      onChange={setPhone}
                      inputClass="!w-[100%] !border-none my-2 p-2"
                      className="w-[100%] border border-black"
                    />

                    <p>Inquiry about service</p>
                    <select
                      className="w-full border my-2 p-2 border-black"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="Animated">Animated Video</option>
                      <option value="Conventional">Conventional Video</option>
                    </select>

                    <p>Message</p>
                    <textarea
                      className="w-full border my-2 p-2 border-black"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleFormSubmit}
                disabled={loading}
                className="inline-flex w-full justify-center rounded-md bg-[#5c57c3] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5c57c3] sm:ml-3 sm:w-auto"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={() => setFpopup(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

