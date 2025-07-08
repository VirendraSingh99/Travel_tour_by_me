import React, { useState, useRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { useNavigate, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const navigation = [
  { name: 'Home', href: '/', current: true },
  {
    name: 'Pages',
    subMenu: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Team', href: '/team' },
      { name: 'Our Services', href: '/OurServices' },
    ],
  },
  {
    name: 'Tour List',
    subMenu: [
      { name: 'Tour Grid', href: '/TourGrid' },
      { name: 'Tour Classic', href: '/Tour' },
      { name: 'Tour Side Thumbnail', href: '/Toursidethumbnail' },
      { name: 'Tour Thumbnail Style', href: '/TourThumbnailStyle' },
    ],
  },
  {
    name: 'Room List',
    subMenu: [
      { name: 'Room Grid', href: '/RoomGrid' },
      { name: 'Tour Classic', href: '/Tour' },
      { name: 'Tour Side Thumbnail', href: '/Toursidethumbnail' },
      { name: 'Tour Thumbnail Style', href: '/TourThumbnailStyle' },
      { name: 'Roomlist', href: '/Roomlist' },
    ],
  },
  {
    name: 'TourSearch',
    subMenu: [
      { name: 'New Tour Search', href: '/NewTourSearch' },
      { name: 'Room Search', href: '/RoomSearch' },
    ],
  },
  {
    name: 'Blog',
    subMenu: [
      { name: 'Blog Full', href: '/BlogFull' },
      { name: 'BlogGrid', href: '/BlogGrid' },
      { name: 'BlogColumn', href: '/BlogColumn' },
      { name: 'Blog', href: '/Blog' },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  return (
    <Disclosure as="nav" className="bg-gray-100 shadow-md py-4 z-50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logox1.png" alt="Logo" className="h-6 sm:h-8" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {navigation.map((item) =>
              item.subMenu ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="text-gray-600 hover:text-black text-lg font-medium px-3 py-2"
                  >
                    {item.name}
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md w-48 z-50">
                      {item.subMenu.map((subItem, index) => (
                        <NavLink
                          key={index}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'text-gray-700' : 'text-gray-600 hover:text-black',
                    'text-lg font-medium px-3 py-2'
                  )}
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>

          {/* Login + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="hidden sm:block bg-blue-500 text-white px-4 py-1 rounded-2xl hover:bg-blue-600 transition"
            >
              Login
            </button>

            {/* Mobile menu icon */}
            <button
              className="sm:hidden text-3xl text-gray-800"
              onClick={() => setSidebarOpen(true)}
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-600 text-black z-[9999] transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b bg-green">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl text-black">
            <HiX />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[calc(100%-64px)] px-6 py-4 space-y-4 custom-scrollbar">
          {navigation.map((item) =>
            item.subMenu ? (
              <div key={item.name}>
                <p className="font-semibold text-black mb-1">{item.name}</p>
                <div className="pl-3 space-y-1">
                  {item.subMenu.map((sub, idx) => (
                    <NavLink
                      key={idx}
                      to={sub.href}
                      className="block text-sm text-black hover:text-black"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-white hover:text-black font-medium"
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
      </div>
    </Disclosure>
  );
}
