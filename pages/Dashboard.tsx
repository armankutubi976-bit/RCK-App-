
import React from 'react';
import { Users, Calendar, Award, GraduationCap, TrendingUp, ArrowRight, Bell, Sparkles } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ORG_SLOGAN, ORG_NAME, LOGO_URL } from '../constants';
import { translations, Language } from '../translations';

const statsDataBN = [
  { name: '২০১৮', members: 45, color: '#10B981' },
  { name: '২০১৯', members: 62, color: '#10B981' },
  { name: '২০২০', members: 120, color: '#10B981' },
  { name: '২০২১', members: 155, color: '#10B981' },
  { name: '২০২২', members: 190, color: '#10B981' },
  { name: '২০২৩', members: 230, color: '#10B981' },
  { name: '২০২৪', members: 285, color: '#10B981' },
];

const statsDataEN = [
  { name: '2018', members: 45, color: '#10B981' },
  { name: '2019', members: 62, color: '#10B981' },
  { name: '2020', members: 120, color: '#10B981' },
  { name: '2021', members: 155, color: '#10B981' },
  { name: '2022', members: 190, color: '#10B981' },
  { name: '2023', members: 230, color: '#10B981' },
  { name: '2024', members: 285, color: '#10B981' },
];

const StatCard = ({ icon: Icon, label, value, color, delay }: any) => (
  <div className={`bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100 flex items-center space-x-6 hover:shadow-xl hover:shadow-emerald-900/5 transition-all group animate-fadeInUp relative overflow-hidden`} style={{ animationDelay: delay }}>
    <div className={`p-5 rounded-2xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600 group-hover:scale-110 transition-transform relative z-10`}>
      <Icon size={28} />
    </div>
    <div className="relative z-10">
      <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className="text-3xl font-black text-stone-900 tracking-tight">{value}</p>
    </div>
    <div className={`absolute -right-4 -bottom-4 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity ${color}`}></div>
  </div>
);

interface DashboardProps {
  lang: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ lang }) => {
  const t = translations[lang];
  const stats = lang === 'bn' ? statsDataBN : statsDataEN;

  return (
    <div className="space-y-12">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-stone-900 rounded-[3.5rem] p-12 md:p-20 text-white shadow-2xl shadow-stone-950/40">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="space-y-8 flex-1">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10">
               <Sparkles size={16} className="text-emerald-400" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-100">{t.officialPortal}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              {t.welcome} <br/><span className="text-emerald-500">{t.digitalHub}</span>
            </h1>
            <p className="text-stone-400 max-w-xl text-xl font-medium leading-relaxed border-l-4 border-emerald-800 pl-6 py-2 italic">
              "{lang === 'bn' ? ORG_SLOGAN : 'Change the society with Education and Awareness'}"
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <button className="bg-white text-stone-950 px-10 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-emerald-500 hover:text-white hover:-translate-y-1 transition-all active:scale-95 flex items-center space-x-3">
                <span>{t.memberList}</span>
                <ArrowRight size={18} />
              </button>
              <button className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:-translate-y-1 transition-all active:scale-95">
                {t.noticeBoard}
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center w-96 h-96 relative">
             <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse"></div>
             <div className="w-80 h-80 bg-white rounded-full p-6 shadow-[0_0_100px_rgba(16,185,129,0.2)] border-8 border-stone-800 relative z-10 animate-fadeIn transition-transform hover:scale-105 duration-700">
                <img src={LOGO_URL} className="w-full h-full object-contain" alt="Official Logo" />
             </div>
             <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/20 animate-spin-slow"></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard icon={Users} label={t.totalMembers} value={lang === 'bn' ? "৪৫০+" : "450+"} color="bg-blue-500" delay="0.1s" />
        <StatCard icon={GraduationCap} label={t.successGraduates} value={lang === 'bn' ? "১২০" : "120"} color="bg-emerald-500" delay="0.2s" />
        <StatCard icon={Award} label={t.scholarshipHolders} value={lang === 'bn' ? "৮৫" : "85"} color="bg-amber-500" delay="0.3s" />
        <StatCard icon={Calendar} label={t.upcomingEvents} value={lang === 'bn' ? "৩" : "3"} color="bg-purple-500" delay="0.4s" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-16">
        <div className="lg:col-span-2 bg-white p-12 rounded-[3.5rem] shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="font-black text-2xl text-stone-900 tracking-tighter flex items-center space-x-4">
                <TrendingUp size={28} className="text-emerald-700" />
                <span>{t.growthStats}</span>
              </h3>
              <p className="text-[10px] text-stone-400 mt-2 font-black uppercase tracking-[0.2em]">Annual Growth Data (2018-2024)</p>
            </div>
            <div className="bg-stone-50 px-4 py-2 rounded-xl text-[10px] font-black text-stone-500 uppercase tracking-widest border border-stone-100">
              Live Updates
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5F5F4" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#A8A29E', fontSize: 11, fontWeight: 900}} dy={15} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#A8A29E', fontSize: 11, fontWeight: 900}} />
                <Tooltip cursor={{fill: '#F5F5F4', radius: 15}} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 40px 80px -15px rgba(0,0,0,0.1)', padding: '16px 20px' }} />
                <Bar dataKey="members" radius={[12, 12, 12, 12]} barSize={50}>
                  {stats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-stone-100 flex flex-col">
          <h3 className="font-black text-2xl text-stone-900 mb-10 flex items-center space-x-4">
            <Bell size={28} className="text-red-500" />
            <span>{t.recentUpdates}</span>
          </h3>
          <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {(lang === 'bn' ? [
              { title: '২০২৫ মেধা বৃত্তির ফরম বিতরণ শুরু', time: '২ ঘণ্টা আগে', type: 'urgent' },
              { title: 'সদস্য তালিকা হালনাগাদ চলছে', time: '১ দিন আগে', type: 'general' },
              { title: 'আগামী মাসের ফুটবল টুর্নামেন্ট', time: '৩ দিন আগে', type: 'general' },
            ] : [
              { title: '2025 Scholarship form distribution starts', time: '2 hours ago', type: 'urgent' },
              { title: 'Member list update in progress', time: '1 day ago', type: 'general' },
              { title: 'Football tournament next month', time: '3 days ago', type: 'general' },
            ]).map((notice, i) => (
              <div key={i} className="flex items-start space-x-5 p-5 rounded-3xl hover:bg-stone-50 transition-all cursor-pointer group border border-transparent hover:border-stone-100">
                <div className={`w-3.5 h-3.5 mt-1.5 rounded-full flex-shrink-0 ${notice.type === 'urgent' ? 'bg-red-500 animate-pulse' : 'bg-emerald-400'}`}></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-black text-stone-800 group-hover:text-emerald-800 transition-colors leading-tight mb-2">{notice.title}</h4>
                  <p className="text-[9px] text-stone-400 font-black tracking-[0.2em] uppercase">{notice.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-6 text-xs font-black text-emerald-900 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-all active:scale-95 uppercase tracking-[0.2em]">
            {t.allNotices}
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
