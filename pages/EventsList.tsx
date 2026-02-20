
import React from 'react';
import { Calendar, MapPin, Users, Share2, Plus } from 'lucide-react';
import { MOCK_EVENTS } from '../constants';
import { Language, translations } from '../translations';

interface EventsListProps {
  lang: Language;
}

const EventsList: React.FC<EventsListProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="space-y-10 animate-fadeInUp">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-4xl font-black text-stone-900 tracking-tighter">{t.eventTitle}</h2>
          <p className="text-stone-500 font-medium mt-1">{t.eventSubtitle}</p>
        </div>
        <button className="flex items-center space-x-3 bg-emerald-800 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-900 transition-all hover:-translate-y-1 active:scale-95">
          <Plus size={18} />
          <span>{t.newEvent}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {MOCK_EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-stone-100 hover:shadow-2xl transition-all group">
            <div className="h-72 relative overflow-hidden">
              <img src={event.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={event.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white pr-8">
                <div className="flex items-center space-x-2 text-emerald-400 font-black text-[10px] mb-3 uppercase tracking-[0.2em]">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl font-black leading-tight">{event.title}</h3>
              </div>
            </div>
            <div className="p-10">
              <div className="flex items-center text-stone-400 text-xs mb-8 space-x-6">
                <div className="flex items-center space-x-2 font-bold">
                  <MapPin size={18} className="text-emerald-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 font-bold">
                  <Users size={18} className="text-blue-500" />
                  <span>{lang === 'bn' ? '১৫০+ অংশগ্রহণকারী' : '150+ Participants'}</span>
                </div>
              </div>
              <p className="text-stone-500 leading-relaxed text-sm font-medium line-clamp-3 mb-10">
                {event.description}
              </p>
              <div className="pt-8 border-t border-stone-50 flex items-center justify-between">
                <button className="text-emerald-800 font-black text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                  {t.viewDetails}
                </button>
                <button className="p-3 rounded-full bg-stone-50 hover:bg-emerald-50 text-stone-400 hover:text-emerald-600 transition-all border border-stone-100">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
