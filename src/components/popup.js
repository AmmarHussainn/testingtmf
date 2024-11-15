'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


export default function Popup({setPopup}) {
  const [open, setOpen] = useState(true)
  const [email, setEmail] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
 
  const handleSendEmail = async () => {
    if (!email) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://tmf-backend.onrender.com/waitlist/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
       
        setOpen(false); 
      } else {
        setError("Failed to send email. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                </div> */}
                <div className="mt-3 text-center  w-full sm:mt-0 sm:text-left">
                  {/* <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Deactivate account
                  </DialogTitle> */}
                  <div className="mt-2 w-full">
                    <p className=" ">
                     Enter your Email to get early access to the features.
                    </p>
                    
                    {/* <input type='email' className='w-full border my-2 p-2 border-black'/> */}
                    <input
                      type='email'
                      className='w-full border my-2 p-2 border-black'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                  </div>
                </div>
              </div>
            </div>

            
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
                type="button"
                onClick={handleSendEmail}
                disabled={loading} 
                className="inline-flex w-full justify-center rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
              >
                {loading ? "Sending..." : "Add"}
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setPopup(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
