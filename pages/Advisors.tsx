
import React from 'react';
import { MOCK_ADVISORS } from '../constants';
import { Shield, Star, Award, MapPin, Briefcase } from 'lucide-react';
import { Language, translations } from '../translations';

interface AdvisorsProps {
  lang: Language;
}

const Advisors: React.FC<AdvisorsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="space-y-16 pb-20 font-['Hind_Siliguri']">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 bg-stone-900 text-white px-6 py-2.5 rounded-full shadow-lg">
          <Shield size={18} className="text-emerald-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">{lang === 'bn' ? 'সম্মানিত উপদেষ্টা মণ্ডলী' : 'Honorable Advisors'}</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter leading-tight">
          {t.advisorTitle}
        </h2>
        <p className="text-stone-500 font-medium text-lg leading-relaxed">
          {t.advisorSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {MOCK_ADVISORS.map((advisor, index) => (
          <div 
            key={advisor.id} 
            className="group bg-white p-10 rounded-[4rem] border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full p-1 border-2 border-stone-100 overflow-hidden relative z-10">
                  <img src={advisor.image} className="w-full h-full object-cover rounded-full transition-transform duration-700" alt={advisor.name} />
                </div>
                <div className="absolute -top-2 -right-2 bg-stone-900 text-white p-2 rounded-xl">
                  <Star size={14} />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-stone-900 group-hover:text-emerald-800">{advisor.name}</h3>
                  <div className="inline-block mt-2 px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black rounded-full uppercase tracking-widest border border-emerald-100">
                    {lang === 'bn' ? advisor.role : 'Advisor'}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-center sm:justify-start space-x-3 text-stone-500">
                    <Briefcase size={16} className="text-stone-400" />
                    <span className="text-sm font-bold">{advisor.profession}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-3 text-stone-500">
                    <MapPin size={16} className="text-stone-400" />
                    <span className="text-sm font-bold">{advisor.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advisors;
