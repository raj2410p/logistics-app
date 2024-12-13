import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <>
      <Disclosure as="nav" className="bg-gradient-to-r from-sky-300 to-teal-300 border-b-2 border-black sticky top-0">
        <div className="mx-auto max-w-7xl px-3 md:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Toggle Button */}
            <button
              onClick={toggleSidebar}
              className="p-2 mr-2 bg-slate-300 rounded-md hover:bg-slate-700 hover:text-slate-950"
            >
              <FontAwesomeIcon icon={faBars} className='p-1' />
            </button>
            {/* Logo */}
              <div className="flex flex-1 justify-center items-center sm:justify-start">
                <img
                  alt="Your Company"
                  src="./src/assets/favicon.png"
                  className="h-8 w-auto"
                />
                <div className='item-center font-bold font-serif'>SWIFTLY</div>
              </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-400 p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3 ">
                <div>
                  <MenuButton className="relative p-2 flex rounded-full bg-slate-300 outline-gray-700 text-sm focus:outline-none focus:ring-4 focus:ring-dark focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />

                    <FontAwesomeIcon icon={faUser} size='xl' />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
};


export default Navbar;