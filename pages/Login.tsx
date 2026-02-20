
import React, { useState, useEffect } from 'react';
import { Lock, Smartphone, Mail, Eye, EyeOff, ArrowRight, ShieldCheck, UserPlus, ShieldAlert } from 'lucide-react';
import { MOCK_AUTH_USERS, ORG_NAME, ORG_SLOGAN } from '../constants';

interface LoginProps {
  onLogin: (userId: string, profile: any) => void;
  onRegisterClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegisterClick }) => {
  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      // 1. Check in Mock Users
      let foundUser = MOCK_AUTH_USERS.find(u => 
        (u.phone === identifier || u.email === identifier) && u.password === password
      );

      // 2. Check in Local Storage (Registered Users)
      if (!foundUser) {
        const storedUsers = JSON.parse(localStorage.getItem('rck_registered_users') || '[]');
        foundUser = storedUsers.find((u: any) => 
          (u.phone === identifier || u.email === identifier) && u.password === password
        );
      }

      if (foundUser) {
        onLogin(foundUser.userId, foundUser.profile);
      } else {
        setError('আপনার মোবাইল নম্বর/ইমেইল বা পাসওয়ার্ডটি সঠিক নয়।');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-6 relative overflow-hidden font-['Hind_Siliguri']">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-200 via-emerald-900 to-stone-200"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-stone-100 rounded-full blur-[120px] opacity-40"></div>
      
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden relative z-10 border border-stone-50">
        
        <div className="md:w-5/12 bg-stone-900 p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
             <div className="w-16 h-16 bg-white/5 backdrop-blur-lg rounded-2xl p-2 mb-10 border border-white/10 flex items-center justify-center">
                <ShieldCheck size={32} className="text-emerald-500" />
             </div>
             <h1 className="text-4xl font-black leading-tight mb-6 tracking-tighter">
                ডিজিটাল <br/><span className="text-emerald-500">মেম্বারশিপ</span> পোর্টাল।
             </h1>
             <p className="text-stone-400 text-sm italic leading-relaxed font-medium border-l-2 border-emerald-800 pl-4">
                "{ORG_SLOGAN}"
             </p>
          </div>

          <div className="relative z-10 mt-12 bg-white/5 p-6 rounded-3xl border border-white/5">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 mb-2">Notice</p>
            <p className="text-xs text-stone-300 leading-relaxed">নিবন্ধনকৃত মোবাইল নম্বর বা ইমেইল ব্যবহার করে লগইন করুন।</p>
          </div>
        </div>

        <div className="md:w-7/12 p-12 md:p-20 bg-white flex flex-col justify-center">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-stone-900 tracking-tighter mb-2">লগইন করুন</h2>
            <div className="w-12 h-1 bg-emerald-800 rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="bg-red-50 text-red-600 px-6 py-5 rounded-2xl text-sm font-bold flex items-center space-x-3 border border-red-100 animate-fadeInUp">
                <ShieldAlert size={20} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-3">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] ml-1">মোবাইল বা ইমেইল</label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-stone-900 transition-all">
                  {identifier.includes('@') ? <Mail size={20} /> : <Smartphone size={20} />}
                </div>
                <input
                  required
                  type="text"
                  placeholder="১৫****** বা example@mail.com"
                  className="w-full pl-16 pr-6 py-5 bg-[#FDFDFD] border border-stone-100 rounded-2xl focus:bg-white focus:border-stone-900 text-base font-bold text-gray-900 transition-all outline-none"
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    if(error) setError('');
                  }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] ml-1">গোপন পাসওয়ার্ড</label>
              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-stone-900 transition-all" size={20} />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-16 pr-16 py-5 bg-[#FDFDFD] border border-stone-100 rounded-2xl focus:bg-white focus:border-stone-900 text-base font-bold text-gray-900 transition-all outline-none tracking-widest"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if(error) setError('');
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-900 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-stone-200 text-emerald-800 focus:ring-emerald-800" />
                <span className="text-xs font-bold text-stone-500 group-hover:text-stone-900 transition-colors">মনে রাখুন</span>
              </label>
              <button type="button" className="text-xs font-black text-emerald-800 hover:text-emerald-900 transition-all uppercase tracking-widest">ভুলে গেছেন?</button>
            </div>

            <div className="space-y-4 pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-6 bg-stone-900 text-white rounded-2xl font-black text-xs shadow-2xl shadow-stone-900/10 hover:bg-black hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center space-x-3 disabled:opacity-70 tracking-[0.2em] uppercase"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>পোর্টাল এ প্রবেশ করুন</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onRegisterClick}
                className="w-full py-6 bg-white text-stone-900 border border-stone-100 rounded-2xl font-black text-xs hover:bg-stone-50 transition-all flex items-center justify-center space-x-3 tracking-[0.2em] uppercase"
              >
                <UserPlus size={18} />
                <span>নতুন সদস্য নিবন্ধন</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
