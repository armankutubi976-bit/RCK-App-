
import React from 'react';
import { Target, History, Heart, CheckCircle2, Users, MapPin, GraduationCap, Info } from 'lucide-react';
import { ORG_NAME, ORG_LOCATION, ORG_SLOGAN } from '../constants';
import { Language, translations } from '../translations';

interface AboutUsProps {
  lang: Language;
}

const AboutUs: React.FC<AboutUsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="max-w-5xl mx-auto space-y-20 pb-20 animate-fadeInUp">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="inline-flex items-center space-x-3 bg-emerald-50 text-emerald-800 px-6 py-2.5 rounded-full border border-emerald-100 shadow-sm">
           <Info size={16} />
           <span className="text-[10px] font-black uppercase tracking-[0.3em]">{lang === 'bn' ? 'আমাদের পরিচয়' : 'WHO WE ARE'}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-stone-900 leading-[0.9] tracking-tighter">
          {t.aboutTitle}
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-medium">
          {t.aboutSubtitle}
        </p>
      </div>

      {/* Mission/History Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-stone-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 space-y-8">
            <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-800 shadow-inner">
              <Target size={40} />
            </div>
            <h3 className="text-3xl font-black text-stone-900 tracking-tight">{t.mission}</h3>
            <p className="text-stone-500 text-lg leading-relaxed font-medium italic">
              {lang === 'bn' ? '"গ্রামের দরিদ্র ও মেধাবী শিক্ষার্থীদের উচ্চশিক্ষার পথ সুগম করা এবং কুতুবদিয়ার প্রতিটি ঘরে শিক্ষার আলো পৌঁছে দেওয়া।"' : '"To facilitate higher education for poor and talented students and to reach every house of Kutubdia with the light of education."'}
            </p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-stone-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 space-y-8">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-800 shadow-inner">
              <History size={40} />
            </div>
            <h3 className="text-3xl font-black text-stone-900 tracking-tight">{t.history}</h3>
            <p className="text-stone-500 text-lg leading-relaxed font-medium">
              {lang === 'bn' ? '২০২০ সালে কায়্যারবিলের একঝাঁক উদ্যমী তরুণের হাত ধরে এই সংগঠনের যাত্রা শুরু। আজ তা কুতুবদিয়ার একটি অন্যতম শক্তিশালী ছাত্র প্ল্যাটফর্ম।' : 'Started in 2020 by a group of energetic youth of Kaiyarbil. Today it is one of the strongest student platforms in Kutubdia.'}
            </p>
          </div>
        </div>
      </div>

      {/* Characteristics */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-black text-stone-900 tracking-tight">{lang === 'bn' ? 'আমাদের মূল বৈশিষ্ট্যসমূহ' : 'Our Core Features'}</h2>
          <div className="w-16 h-1.5 bg-emerald-800 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: CheckCircle2, title: lang === 'bn' ? 'স্বচ্ছতা' : 'Transparency', desc: lang === 'bn' ? 'সকল সিদ্ধান্তে স্বচ্ছতা ও জবাবদিহিতা।' : 'Transparency and accountability in all decisions.' },
            { icon: Heart, title: lang === 'bn' ? 'সেবা' : 'Service', desc: lang === 'bn' ? 'মানবতার তরে সর্বদা নিয়োজিত থাকা।' : 'Always engaged for the sake of humanity.' },
            { icon: Users, title: lang === 'bn' ? 'ঐক্য' : 'Unity', desc: lang === 'bn' ? 'শিক্ষার্থীদের এক সুতোয় বাঁধা।' : 'Binding students in a single thread.' },
            { icon: GraduationCap, title: lang === 'bn' ? 'শিক্ষা' : 'Education', desc: lang === 'bn' ? 'সুশিক্ষিত সমাজ গঠনে নিরলস কাজ।' : 'Working tirelessly to build an educated society.' },
          ].map((val, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] text-center space-y-5 shadow-sm border border-stone-50 hover:border-emerald-100 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl mx-auto flex items-center justify-center text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-all">
                <val.icon size={32} />
              </div>
              <h4 className="text-xl font-black text-stone-900">{val.title}</h4>
              <p className="text-sm text-stone-400 font-bold leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Contact Banner */}
      <div className="bg-stone-950 rounded-[4rem] p-16 md:p-24 text-white text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 space-y-12">
          <h2 className="text-4xl font-black tracking-tight">{t.contactTitle}</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 text-stone-400 font-bold">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-white">
                <MapPin size={24} className="text-emerald-500" />
                <span className="text-xl font-black uppercase tracking-widest">{t.headOffice}</span>
              </div>
              <p className="text-lg">{lang === 'bn' ? ORG_LOCATION : 'Kaiyarbil, Kutubdia, Cox\'s Bazar'}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Info size={24} className="text-emerald-500" />
                <span className="text-xl font-black uppercase tracking-widest">{t.email}</span>
              </div>
              <p className="text-lg">rck.students.association@gmail.com</p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-[0.5em] text-emerald-500 font-black">{lang === 'bn' ? ORG_SLOGAN : 'CHANGE THE SOCIETY WITH EDUCATION'}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default AboutUs;
