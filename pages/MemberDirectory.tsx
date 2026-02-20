
import React, { useState } from 'react';
import { Search, Filter, Phone, Mail, Droplets, MapPin, Briefcase } from 'lucide-react';
import { MOCK_MEMBERS } from '../constants';
import { Language, translations } from '../translations';

interface MemberDirectoryProps {
  lang: Language;
}

const MemberDirectory: React.FC<MemberDirectoryProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const t = translations[lang];

  const filteredMembers = MOCK_MEMBERS.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10 animate-fadeInUp">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-6 rounded-[2.5rem] border border-stone-100 shadow-sm">
        <div>
          <h2 className="text-3xl font-black text-stone-900 tracking-tight">{t.members}</h2>
          <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-1">
            {lang === 'bn' ? 'কমিটির সকল সদস্যদের তালিকা ও তথ্যাদি' : 'List and information of all committee members'}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="w-full sm:w-auto px-6 py-4 bg-white border border-stone-100 rounded-2xl hover:bg-stone-50 text-stone-600 transition-all flex items-center justify-center space-x-2 font-bold text-sm">
            <Filter size={18} />
            <span>{t.filter}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredMembers.map((member, index) => (
          <div 
            key={member.id} 
            className="smooth-card bg-white rounded-[3rem] overflow-hidden border border-stone-100 shadow-sm flex flex-col group animate-fadeInUp"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="h-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 relative overflow-hidden">
               <div className="absolute top-6 right-8">
                 <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md shadow-sm border border-emerald-100/50 rounded-full text-[10px] font-black text-emerald-800 uppercase tracking-widest">
                  {member.role}
                 </div>
               </div>
            </div>

            <div className="px-10 pb-10 relative flex-1">
              <div className="absolute -top-14 left-10">
                <div className="w-28 h-28 rounded-[2rem] border-[6px] border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500 bg-white">
                  <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
                </div>
              </div>

              <div className="mt-20 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-stone-900 group-hover:text-emerald-800 transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2 text-stone-400">
                    <MapPin size={14} className="flex-shrink-0" />
                    <p className="text-xs font-bold truncate">{member.institution}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-red-50 rounded-xl border border-red-100">
                    <Droplets size={14} className="text-red-500" />
                    <span className="text-[10px] font-black text-red-600 uppercase">{member.bloodGroup}</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-xl border border-blue-100">
                    <Briefcase size={14} className="text-blue-500" />
                    <span className="text-[10px] font-black text-blue-600 uppercase">{t.active}</span>
                  </div>
                </div>

                <div className="pt-6 grid grid-cols-2 gap-4 border-t border-stone-50">
                  <a href={`tel:${member.phone}`} className="flex items-center justify-center space-x-2 bg-emerald-950 text-white py-4 rounded-2xl hover:bg-black transition-all font-black text-xs uppercase tracking-widest shadow-lg active:scale-95">
                    <Phone size={14} />
                    <span>{t.call}</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center justify-center space-x-2 bg-stone-50 text-stone-600 py-4 rounded-2xl hover:bg-stone-100 transition-all font-black text-xs uppercase tracking-widest border border-stone-100 active:scale-95">
                    <Mail size={14} />
                    <span>{t.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberDirectory;
