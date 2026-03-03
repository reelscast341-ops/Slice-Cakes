import React from 'react';
import { AGENCIES } from '../constants';

export const AgenciesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100" id="agencies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">Partnerships</span>
          <h3 className="text-3xl font-serif font-bold text-primary mt-2">Trusted by Top Agencies & Brands</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {AGENCIES.map((agency) => (
            <div 
              key={agency.name} 
              className="group relative flex items-center justify-center w-full h-24 p-4 transition-all duration-300"
            >
               {/* Hover Background Glow */}
               <div className="absolute inset-0 bg-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100"></div>
               
               {/* Logo */}
               <img 
                 src={agency.logo} 
                 alt={`${agency.name} Logo`} 
                 className="relative z-10 max-h-8 md:max-h-12 w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:-translate-y-1 group-hover:scale-110"
                 loading="lazy"
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};