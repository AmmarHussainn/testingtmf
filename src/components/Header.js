'use client';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const products = [
  { name: 'Image to Video', href: '/producttwo' },
  { name: 'Text to Video', href: '/productthree' },
  { name: 'Video Menu Generation', href: '/productfive' },
  { name: 'Food Export Assistant', href: '/productsix' },
];
const products1 = [
  {name : 'AI Services', href:'/services'},
  { name: 'Animated Video', href: '/productone' },
  { name: 'Conventional Video ', href: '/productfour' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className='bg-white'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-9xl items-center justify-between p-4 lg:px-8 md:w-[90%]'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            {/* <span className="sr-only">Your Company</span> */}
            <img
              alt=''
              src={process.env.PUBLIC_URL + '/images/mainlogo.png'}
              className=' w-[79px]'
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <PopoverGroup className='hidden lg:flex lg:gap-x-10'>
          <NavLink
            to='/'
            className='font-poppins text-[14px] font-medium leading-6 text-gray-900 flex items-center'
          >
            Home
          </NavLink>
          {/* <a
            href='/'
            className='font-poppins text-[14px] font-medium leading-6 text-gray-900 flex items-center'
          >
            Home
          </a> */}
          {/* <a
            href='/Services'
            className='font-poppins text-[14px] font-medium leading-6 text-gray-900 flex items-center'
          >
            Services
          </a> */}

          <Popover className='relative flex items-center'>
            <PopoverButton className='flex items-center gap-x-1 font-poppins text-[14px] font-medium leading-6 text-gray-900'>
              Services
              <ChevronDownIcon
                aria-hidden='true'
                className='h-5 w-5 flex-none text-gray-400'
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className='absolute -left-8 top-full z-10 mt-3 w-[300px] max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
            >
              <div className='p-2'>
                {products1.map((item) => {
                  console.log(item); // Log the item to check its structure
                  return (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex-auto'>
                        <NavLink
                          to={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </NavLink>
                      </div>
                    </div>
                  );
                })}
              </div>
            </PopoverPanel>
          </Popover>
          <NavLink
            to='/About'
            className='font-poppins text-[14px] font-medium leading-6 text-gray-900 flex items-center'
          >
            About
          </NavLink>
          <NavLink
            to='/allblogs'
            className='font-poppins text-[14px] font-medium leading-6 text-gray-900 flex items-center'
          >
            Blogs
          </NavLink>

          {/* <a
            href='/About'
            className='font-poppins text-[14px] font-medium leading-6 text-gray-900 flex items-center'
          >
            About
          </a> */}
          <Popover className='relative flex items-center'>
            <PopoverButton className='flex items-center gap-x-1 font-poppins text-[14px] font-medium leading-6 text-gray-900'>
              Our Products
              <ChevronDownIcon
                aria-hidden='true'
                className='h-5 w-5 flex-none text-gray-400'
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className='absolute -left-8 top-full z-10 mt-3 w-[300px] max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
            >
              <div className='p-2'>
                {/* {products.map((item) => (
                  
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                     
                    </div>
                  </div>
                ))} */}

                {products.map((item) => {
                  console.log(item); // Log the item to check its structure
                  return (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex-auto'>
                        <NavLink
                          to={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </NavLink>
                      </div>
                    </div>
                  );
                })}
              </div>
            </PopoverPanel>
          </Popover>
          <div className=' flex items-center bg-[#5C57C3] p-3 px-5 rounded-md'>
            <a
              href='#'
              className='text-sm font-semibold  leading-6 text-white '
            >
              Get Started
            </a>
          </div>
          <div className='flex items-center border-[2px] border-[#5C57C3] py-3 px-5 rounded hover:bg-[#5C57C3] text-gray-900 hover:text-white'>
            <a
              onClick={handleLoginClick}
              className='text-sm font-semibold leading-6  cursor-pointer'
            >
              Login
            </a>
          </div>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                alt=''
                src={process.env.PUBLIC_URL + '/images/mainlogo.png'}
                className=' w-[50px]'
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <NavLink
                  to='/'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Home
                </NavLink>
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a> */}
                {/* <a
                  href="/About"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a> */}
                <NavLink
                  to='/About'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  About Us
                </NavLink>

                {/* <a
                  href="/Services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a> */}

                <Disclosure as='div' className='-mx-3'>
                  <DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    Services
                    <ChevronDownIcon
                      aria-hidden='true'
                      className='h-5 w-5 flex-none group-data-[open]:rotate-180'
                    />
                  </DisclosureButton>
                  <DisclosurePanel className='mt-2 space-y-2'>
                    {[...products1].map((item) => (
                      // <DisclosureButton
                      //   key={item.name}
                      //   as='a'
                      //   href={item.href}
                      //   className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      // >
                      //   {item.name}
                      // </DisclosureButton>

                      <NavLink
                        to={item.href}
                        className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <NavLink
                  to='/allblogs'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Blogs
                </NavLink>
                <Disclosure as='div' className='-mx-3'>
                  <DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    Our Products
                    <ChevronDownIcon
                      aria-hidden='true'
                      className='h-5 w-5 flex-none group-data-[open]:rotate-180'
                    />
                  </DisclosureButton>
                  <DisclosurePanel className='mt-2 space-y-2'>
                    {[...products].map((item) => (
                      // <DisclosureButton
                      //   key={item.name}
                      //   as='a'
                      //   href={item.href}
                      //   className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      // >
                      //   {item.name}
                      // </DisclosureButton>

                      <NavLink
                        to={item.href}
                        className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block mb-2 text-base font-semibold leading-7 text-gray-900  items-center bg-[#5C57C3] p-3 px-5 rounded-md'
                >
                  Get Started
                </a>
                <button
                  onClick={handleLoginClick}
                  className='-mx-3 block  text-base font-semibold leading-7items-center border-[2px] cursor-pointer border-[#5C57C3] py-3 px-5 rounded hover:bg-[#5C57C3] text-gray-900 hover:text-white'
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
