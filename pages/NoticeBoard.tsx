
import React from 'react';
import { Megaphone, Pin, Clock, ChevronRight, FileText } from 'lucide-react';
import { Language, translations } from '../translations';

interface NoticeBoardProps {
  lang: Language;
}

const NoticeBoard: React.FC<NoticeBoardProps> = ({ lang }) => {
  const t = translations[lang];

  const notices = [
    { id: 1, title: lang === 'bn' ? 'বার্ষিক সাধারণ সভা ২০২৫-এর তারিখ নির্ধারণ' : 'Annual General Meeting 2025 Date Set', date: lang === 'bn' ? '১০ ফেব্রুয়ারি ২০২৫' : 'Feb 10, 2025', category: t.announcement, isNew: true },
    { id: 2, title: lang === 'bn' ? 'এসএসসি পরীক্ষার ফলাফল সংবর্ধনা অনুষ্ঠান' : 'SSC Result Celebration Ceremony', date: lang === 'bn' ? '৫ ফেব্রুয়ারি ২০২৫' : 'Feb 05, 2025', category: t.cultural, isNew: false },
    { id: 3, title: lang === 'bn' ? 'নতুন সদস্য ফি সংক্রান্ত বিজ্ঞপ্তি' : 'New Member Fee Notification', date: lang === 'bn' ? '১ ফেব্রুয়ারি ২০২৫' : 'Feb 01, 2025', category: t.finance, isNew: false },
    { id: 4, title: lang === 'bn' ? 'শিক্ষা সফর ২০২৫-এর স্থান নির্বাচন ও বাজেট' : 'Study Tour 2025 Venue & Budget', date: lang === 'bn' ? '২৫ জানুয়ারি ২০২৫' : 'Jan 25, 2025', category: t.academic, isNew: false },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeInUp">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-5 bg-red-50 text-red-600 rounded-[2rem] border border-red-100 mb-2">
          <Megaphone size={40} />
        </div>
        <h2 className="text-4xl font-black text-stone-900 tracking-tighter">{t.noticeBoard}</h2>
        <p className="text-stone-500 font-medium">সংগঠনের সকল গুরুত্বপূর্ণ অফিসিয়াল ঘোষণা এখানে পাওয়া যাবে</p>
      </div>

      <div className="bg-white rounded-[3.5rem] shadow-sm border border-stone-100 overflow-hidden">
        <div className="bg-stone-50 px-10 py-5 flex items-center space-x-3 border-b border-stone-100">
          <Pin size={18} className="text-emerald-600" />
          <span className="text-[10px] font-black text-stone-500 uppercase tracking-[0.2em]">{t.pinNotice}</span>
        </div>
        
        <div className="p-10">
          <div className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-emerald-800 border border-emerald-100">
               <FileText size={40} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-black text-emerald-900 mb-3">{lang === 'bn' ? '২০২৫ সালের জন্য কার্যকরী কমিটি পুনর্গঠন' : 'Committee Reformation for 2025'}</h3>
              <p className="text-emerald-800/70 text-sm font-medium leading-relaxed mb-6">আগামী ১৫ই ফেব্রুয়ারি ২০২৫ তারিখের মধ্যে সকল বর্তমান সদস্যবৃন্দকে তাদের হালনাগাদ তথ্য জমা দেওয়ার জন্য অনুরোধ করা যাচ্ছে।</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button className="text-[10px] bg-emerald-800 text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest shadow-lg hover:bg-emerald-900 transition-all">
                  {t.downloadPdf}
                </button>
                <span className="text-[10px] text-emerald-600/60 font-black uppercase tracking-widest flex items-center space-x-1.5">
                  <Clock size={12} />
                  <span>{t.publishDate}: {lang === 'bn' ? '৩০ জানুয়ারি ২০২৫' : 'Jan 30, 2025'}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-stone-50">
          {notices.map((notice) => (
            <div key={notice.id} className="px-10 py-8 hover:bg-stone-50 transition-all cursor-pointer group flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-[9px] font-black px-3 py-1 bg-stone-100 text-stone-500 rounded-full uppercase tracking-widest border border-stone-200">
                    {notice.category}
                  </span>
                  {notice.isNew && (
                    <span className="text-[9px] bg-red-500 text-white px-3 py-1 rounded-full font-black uppercase tracking-widest animate-pulse">
                      {t.new}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-black text-stone-800 group-hover:text-emerald-800 transition-colors tracking-tight">{notice.title}</h4>
                <div className="flex items-center text-[10px] text-stone-400 font-bold space-x-2">
                  <Clock size={14} />
                  <span>{notice.date}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white border border-stone-100 rounded-2xl flex items-center justify-center text-stone-300 group-hover:text-emerald-800 group-hover:border-emerald-100 transition-all shadow-sm">
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
