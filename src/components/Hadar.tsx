import { useState } from 'react';

export default function Navbar({ cartLength  }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <div className="flex place-items-start">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen fixed top-0 left-0" style={{ zIndex: 3 }}>
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                Aflozz
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><a className="hover:text-gray-200" href="/">Home</a></li>
                <li><a className="hover:text-gray-200" href="/search">Search</a></li>
                <li><a className="hover:text-gray-200" href="/chat">community</a></li>
                <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
              </ul>
              <div className="hidden xl:flex space-x-5 items-center">
                <a className="hover:text-gray-200" href="#">
                  {/* Icon */}
                </a>
                <a className="flex items-center hover:text-gray-200" href="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cartLength ?
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                      <span id="cartN-1" className="relative inline-flex rounded-full h-5 w-5 bg-pink-500" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      >
                        {cartLength}
                      </span>
                    </span>
                    :
                    <span className="flex hidden absolute -mt-5 ml-4" id="cartCount">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                      <span id="cartN-1" className="relative inline-flex rounded-full h-5 w-5 bg-pink-500" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>

                      </span>
                    </span>

                  }
                </a>
                <div className="relative inline-block text-left">
                  <button onClick={() => setIsOpen(!isOpen)} type="button" className="flex items-center hover:text-gray-200" id="menu-button" aria-expanded={isOpen} aria-haspopup="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute right-0 z-50r mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                      <div className="py-1" role="none">
                        <a href="/account" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">Account settings</a>
                        <a href="/account/orders" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">Orders</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">License</a>
                        <form method="POST" action="/logout" id="logout" role="none">
                          <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1">Sign out</button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <a className="xl:hidden flex mr-6 items-center" href="#">
                {/* Icon */}
              </a>
              <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                {/* Icon */}
              </a>
            </div>
          </nav>
          <script src='https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js'></script>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.all.min.js"></script>
        </section>
      </div >
    </>
  );
}
