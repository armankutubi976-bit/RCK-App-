
import React, { useState } from 'react';
import { MOCK_GALLERY } from '../constants';
// Fix: Added Image as ImageIcon to the imports from lucide-react to resolve "Cannot find name 'ImageIcon'" error
import { Search, Filter, Maximize2, X, Calendar, MapPin, Tag, Image as ImageIcon } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('সব');
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  const categories = ['সব', ...Array.from(new Set(MOCK_GALLERY.map(item => item.category)))];

  const filteredPhotos = selectedCategory === 'সব' 
    ? MOCK_GALLERY 
    : MOCK_GALLERY.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-12 pb-20 font-['Hind_Siliguri']">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
            <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">স্মৃতি অ্যালবাম</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter">আমাদের <span className="text-emerald-800">গ্যালারী</span></h2>
          <p className="text-stone-500 font-medium max-w-lg leading-relaxed">আর. সি. কে. স্টুডেন্টস' এসোসিয়েশনের বিভিন্ন ইভেন্ট ও কার্যক্রমের খণ্ডচিত্রসমূহ একনজরে দেখুন।</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-xs font-black transition-all active:scale-95 border ${
                selectedCategory === cat 
                  ? 'bg-stone-900 text-white border-stone-900 shadow-xl' 
                  : 'bg-white text-stone-500 border-stone-100 hover:border-stone-300'
              } uppercase tracking-widest`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map((photo) => (
          <div 
            key={photo.id} 
            className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Maximize2 size={24} />
                </div>
              </div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                  {photo.category}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-lg font-black text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">{photo.title}</h3>
              <div className="flex items-center space-x-4 text-stone-400">
                <div className="flex items-center space-x-1.5">
                  <Calendar size={14} />
                  <span className="text-[11px] font-bold">{photo.date}</span>
                </div>
                <div className="w-1 h-1 bg-stone-200 rounded-full"></div>
                <div className="flex items-center space-x-1.5">
                  <MapPin size={14} />
                  <span className="text-[11px] font-bold">কুতুবদিয়া</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-fadeIn">
          <div className="absolute inset-0 bg-stone-950/95 backdrop-blur-xl" onClick={() => setSelectedPhoto(null)}></div>
          
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-10 right-10 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
          >
            <X size={28} />
          </button>

          <div className="relative max-w-6xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-scaleUp">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-8/12 bg-black">
                <img 
                  src={selectedPhoto.url} 
                  className="w-full h-auto lg:h-[80vh] object-contain" 
                  alt={selectedPhoto.title} 
                />
              </div>
              <div className="lg:w-4/12 p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <span className="px-4 py-2 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full uppercase tracking-widest border border-emerald-100">
                      {selectedPhoto.category}
                    </span>
                    <span className="text-[10px] font-black text-stone-300 uppercase tracking-widest">{selectedPhoto.date}</span>
                  </div>
                  <h3 className="text-3xl font-black text-stone-900 mb-6 leading-tight">{selectedPhoto.title}</h3>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-stone-400">
                        <Tag size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">ট্যাগস</p>
                        <p className="text-sm font-bold text-stone-700">স্মৃতি, ইভেন্ট, কায়্যারবিল</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-stone-500 leading-relaxed font-medium">এই ছবিটি আমাদের সংগঠনের একটি বিশেষ মুহূর্তের সাক্ষী। আমরা প্রতিটি স্মৃতি সযত্নে ধারণ করে রাখি যা আমাদের অগ্রযাত্রার অনুপ্রেরণা যোগায়।</p>
                </div>

                <div className="pt-10 border-t border-stone-50 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-white">
                      <ImageIcon size={18} />
                    </div>
                    <span className="text-xs font-black text-stone-900 uppercase tracking-widest">RCK Media Hub</span>
                  </div>
                  <button className="text-[10px] font-black text-emerald-700 uppercase tracking-widest hover:underline decoration-2 underline-offset-4">ডাউনলোড করুন</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleUp {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;
