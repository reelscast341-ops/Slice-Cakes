import React, { useState } from 'react';
import { MapPin, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Creator } from '../types';

interface TalentCardProps {
  creator: Creator;
}

export const TalentCard: React.FC<TalentCardProps> = ({ creator }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use gallery if available, otherwise fallback to single image
  const images = creator.gallery && creator.gallery.length > 0 ? creator.gallery : [creator.imageUrl];
  const hasMultipleImages = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={images[currentImageIndex]}
          alt={`${creator.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {/* Carousel Controls */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 cursor-pointer border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 cursor-pointer border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${
                    idx === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Floating Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          {creator.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-sm text-primary">
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 text-white z-10 pointer-events-none">
           <div className="flex items-center gap-1.5 mb-1">
             <h3 className="text-lg font-bold font-serif leading-none">{creator.name}</h3>
             {creator.verified && <CheckCircle size={14} className="text-blue-400 fill-blue-400/20" />}
           </div>
           <p className="text-xs font-medium opacity-90 uppercase tracking-widest">{creator.role}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center text-gray-500 text-xs">
            <MapPin size={12} className="mr-1" />
            {creator.location}
          </div>
          <span className="text-xs font-semibold text-primary">{creator.rate}</span>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {creator.bio}
        </p>

        {/* Hidden for future development
        <button className="mt-4 w-full py-2 border border-gray-200 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-lg">
          View Portfolio
        </button>
        */}
      </div>
    </div>
  );
};