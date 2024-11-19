import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropDown({ onMenuItemClick, onButtonClick }) {
  return (
    // <Menu as="div" className="relative inline-block text-left">
    //   <div>
    //     <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#5C57C3] p-3 px-5 font-poppins text-[12px] text-white  ">
    //       Order a Service
    //       <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
    //     </MenuButton>
    //   </div>

    //   <MenuItems
    //     transition
    //     className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    //   >
    //     <div className="py-1">
    //       <MenuItem>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    //         >
    //          Conventional Video Production
    //         </a>
    //       </MenuItem>
    //       <MenuItem>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    //         >
    //          Video Animation
    //         </a>
    //       </MenuItem>
    //       {/* <MenuItem>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    //         >
    //           License
    //         </a>
    //       </MenuItem>
    //       <form action="#" method="POST">
    //         <MenuItem>
    //           <button
    //             type="submit"
    //             className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    //           >
    //             Sign out
    //           </button>
    //         </MenuItem>
    //       </form> */}
    //     </div>
    //   </MenuItems>
    // </Menu>

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#5C57C3] p-3 px-5 font-poppins text-[12px] text-white"
          onClick={onButtonClick} // Handle button click
        >
          Order a Service
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
      >
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                }`}
                onClick={() => onMenuItemClick('Conventional Video Production')} // Handle menu item click
              >
                Conventional Video Production
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                }`}
                onClick={() => onMenuItemClick('Video Animation')} // Handle menu item click
              >
                Video Animation
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
