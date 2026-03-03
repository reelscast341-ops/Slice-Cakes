import React, { useState } from 'react';
import { Menu, X, Camera, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Talent', href: '#talent' },
    { label: 'Castings', href: '#talent' },
    { label: 'Agencies', href: '#agencies' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-lg">
              <Camera size={20} strokeWidth={2.5} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">ModelsCasting</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            
            {/* Contact Dropdown Button (Replaces Post a Job) */}
            <div className="relative group">
              <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Contact <ChevronDown size={16} />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full pt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden ring-1 ring-black ring-opacity-5">
                    {/* Phone */}
                    <div className="px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-4 transition-colors group/item cursor-default">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                            <Phone size={18} />
                        </div>
                        <div>
                           <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Call Us</p>
                           <p className="text-sm font-bold text-gray-900">8527950342</p>
                        </div>
                    </div>
                    
                    {/* Email */}
                    <a href="mailto:divyanshonomy@gmail.com" className="px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-4 transition-colors group/item">
                        <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                            <Mail size={18} />
                        </div>
                        <div className="overflow-hidden">
                           <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                           <p className="text-sm font-bold text-gray-900 truncate">divyanshonomy@gmail.com</p>
                        </div>
                    </a>

                    {/* Location */}
                    <a href="#map-location" className="px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-4 transition-colors group/item">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                             <MapPin size={18} />
                        </div>
                        <div>
                           <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Visit Us</p>
                           <p className="text-sm font-bold text-gray-900">View Location</p>
                        </div>
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-4 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-xl border border-transparent hover:border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="mt-8 pt-8 border-t border-gray-100">
               <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Info</p>
               
               <div className="space-y-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <Phone size={16} />
                    </div>
                    <span className="font-medium">8527950342</span>
                  </div>
                  
                  <a href="mailto:divyanshonomy@gmail.com" className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <Mail size={16} />
                    </div>
                    <span className="font-medium">divyanshonomy@gmail.com</span>
                  </a>
                  
                  <a href="#map-location" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <MapPin size={16} />
                    </div>
                    <span className="font-medium">View Location</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};