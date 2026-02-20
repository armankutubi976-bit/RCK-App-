
import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, LogOut, Settings, ChevronRight, Languages } from 'lucide-react';
import { ORG_NAME, NAV_ITEMS, LOGO_URL } from './constants';
import Dashboard from './pages/Dashboard';
import MemberDirectory from './pages/MemberDirectory';
import EventsList from './pages/EventsList';
import NoticeBoard from './pages/NoticeBoard';
import AIChat from './pages/AIChat';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import MemberRegistration from './pages/MemberRegistration';
import PhotoGallery from './pages/PhotoGallery';
import Advisors from './pages/Advisors';
import ProfileEdit from './pages/ProfileEdit';
import { UserProfile } from './types';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('rck_lang') as Language) || 'bn';
  });

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('rck_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleLogin = (userId: string, profile: UserProfile) => {
    setUser(profile);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setAuthMode('login');
    setActiveTab('dashboard');
  };

  const handleUpdateProfile = (updatedProfile: UserProfile) => {
    setUser(updatedProfile);
    setActiveTab('dashboard');
  };

  if (!user) {
    return authMode === 'login' 
      ? <Login onLogin={handleLogin} onRegisterClick={() => setAuthMode('register')} />
      : <MemberRegistration onBackToLogin={() => setAuthMode('login')} />;
  }

  const renderContent = () => {
    const props = { lang };
    switch (activeTab) {
      case 'dashboard': return <Dashboard {...props} />;
      case 'members': return <MemberDirectory {...props} />;
      case 'advisors': return <Advisors {...props} />;
      case 'gallery': return <PhotoGallery {...props} />;
      case 'events': return <EventsList {...props} />;
      case 'notices': return <NoticeBoard {...props} />;
      case 'ai-chat': return <AIChat {...props} />;
      case 'about': return <AboutUs {...props} />;
      case 'profile-edit': return <ProfileEdit user={user} onUpdate={handleUpdateProfile} />;
      default: return <Dashboard {...props} />;
    }
  };

  const localizedNavItems = NAV_ITEMS.map(item => ({
    ...item,
    label: (t as any)[item.id] || item.label
  }));

  return (
    <div className={`min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row font-['Hind_Siliguri'] ${lang === 'en' ? 'font-sans' : ''}`}>
      {/* Mobile Header */}
      <div className="md:hidden glass-effect border-b border-stone-100 p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-950 rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
             <img src={LOGO_URL} className="w-full h-full object-contain" alt="Logo" />
          </div>
          <h1 className="text-sm font-black text-stone-900">{lang === 'bn' ? ORG_NAME : 'RCK Association'}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={toggleLanguage} className="p-2 bg-stone-100 rounded-lg text-stone-600 text-[10px] font-black uppercase">
            {lang === 'bn' ? 'EN' : 'BN'}
          </button>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-10 h-10 flex items-center justify-center bg-stone-900 text-white rounded-xl">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-emerald-950 text-white transform transition-all duration-500 md:relative md:translate-x-0 border-r border-white/5 h-full ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex flex-col h-full relative overflow-hidden">
          <div className="p-8 flex flex-col items-center text-center flex-shrink-0 relative z-10">
            <div className="w-24 h-24 bg-white rounded-[2rem] p-1.5 shadow-2xl mb-5 border-4 border-white/10 overflow-hidden">
                <img src={LOGO_URL} className="w-full h-full object-contain" alt="Logo" />
            </div>
            <div>
              <h2 className="font-black text-lg leading-tight text-white">{lang === 'bn' ? ORG_NAME : "RCK Students' Association"}</h2>
              <span className="text-[9px] bg-white/10 px-4 py-1 rounded-full font-black uppercase tracking-[0.2em]">{t.established}</span>
            </div>
          </div>

          <nav className="flex-1 space-y-1.5 px-5 overflow-y-auto relative z-10 py-4 custom-scrollbar">
            {localizedNavItems.map((item) => (
              <button key={item.id} onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }} className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl sidebar-item-transition ${activeTab === item.id ? 'bg-white text-emerald-950 shadow-xl font-black' : 'text-emerald-100/60 hover:bg-white/5'}`}>
                <div className="flex items-center space-x-4">
                  <span>{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
                {activeTab === item.id && <ChevronRight size={14} />}
              </button>
            ))}
          </nav>

          <div className="p-6 mt-auto border-t border-white/5 bg-emerald-950/80 backdrop-blur-md">
            <div className="bg-white/5 p-4 rounded-[1.5rem] border border-white/5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg">
                  <img src={user.image} className="w-full h-full object-cover" alt={user.name} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-black text-white truncate">{user.name}</p>
                  <p className="text-[9px] text-emerald-400 font-bold tracking-widest uppercase">{user.role}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button onClick={toggleLanguage} className="flex items-center justify-center py-2.5 rounded-xl transition-all bg-emerald-800/30 text-emerald-200 border border-emerald-500/20" title="Switch Language">
                  <Languages size={14} />
                </button>
                <button onClick={() => setActiveTab('profile-edit')} className="flex items-center justify-center py-2.5 rounded-xl bg-white/5 text-white/60 border border-white/5 hover:bg-white/10" title="Settings">
                  <Settings size={14} />
                </button>
                <button onClick={handleLogout} className="flex items-center justify-center py-2.5 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500/20 border border-red-500/10" title="Logout">
                  <LogOut size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FDFCFB]">
        <header className="hidden md:flex h-24 bg-white/60 backdrop-blur-2xl border-b border-stone-100 items-center justify-between px-14 z-40">
          <div className="flex items-center space-x-5">
             <div className="w-2 h-10 bg-emerald-800 rounded-full shadow-lg"></div>
             <h2 className="text-3xl font-black text-stone-900 tracking-tighter">
                {localizedNavItems.find(i => i.id === activeTab)?.label || t.profileEdit}
             </h2>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={toggleLanguage} className="flex items-center space-x-2 px-4 py-2 bg-stone-50 border border-stone-100 rounded-xl hover:bg-stone-100 text-xs font-black text-stone-600 uppercase tracking-widest">
              <Languages size={14} className="text-emerald-700" />
              <span>{t.languageName}</span>
            </button>
            <div onClick={() => setActiveTab('profile-edit')} className="flex items-center space-x-4 p-2 pl-5 pr-2 border border-stone-100 bg-white rounded-[1.5rem] shadow-sm cursor-pointer hover:shadow-md transition-all">
              <div className="text-right">
                <p className="text-xs font-black text-stone-900">{user.name}</p>
                <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest opacity-60">My Profile</p>
              </div>
              <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-stone-50">
                <img src={user.image} className="w-full h-full object-cover" alt="Profile" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-14 scroll-smooth">
          <div className="max-w-[1400px] mx-auto animate-fadeInUp">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
