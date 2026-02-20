
import React, { useState, useRef } from 'react';
import { User, BookOpen, Phone, Mail, Droplets, Camera, Save, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfileEditProps {
  user: UserProfile;
  onUpdate: (updatedUser: UserProfile) => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({ ...user });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API delay
    setTimeout(() => {
      onUpdate(formData);
      setIsSaving(false);
      setShowSuccess(true);
      
      // Update local storage if it's a registered user
      const storedUsers = JSON.parse(localStorage.getItem('rck_registered_users') || '[]');
      const updatedUsers = storedUsers.map((u: any) => 
        u.userId === formData.userId ? { ...u, profile: formData } : u
      );
      localStorage.setItem('rck_registered_users', JSON.stringify(updatedUsers));

      setTimeout(() => setShowSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-fadeInUp font-['Hind_Siliguri']">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-stone-900 tracking-tighter">প্রোফাইল <span className="text-emerald-800">আপডেট</span></h2>
          <p className="text-stone-500 font-medium">আপনার ব্যক্তিগত তথ্যাদি এখান থেকে পরিবর্তন করতে পারবেন।</p>
        </div>
        {showSuccess && (
          <div className="flex items-center space-x-3 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-2xl border border-emerald-100 animate-bounce">
            <CheckCircle2 size={20} />
            <span className="font-bold text-sm">সফলভাবে সেভ হয়েছে!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Profile Image Section */}
        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-stone-100 flex flex-col items-center">
          <div className="relative group">
            <div className="w-40 h-40 rounded-[2.5rem] border-4 border-stone-50 shadow-xl overflow-hidden bg-stone-100">
              <img src={formData.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Profile" />
            </div>
            <button 
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-800 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-emerald-900 hover:scale-110 transition-all border-4 border-white"
            >
              <Camera size={20} />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>
          <p className="mt-6 text-[10px] text-stone-400 font-black uppercase tracking-[0.2em]">প্রোফাইল ছবি পরিবর্তন করুন</p>
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-stone-100">
          <h3 className="text-xl font-bold text-stone-900 mb-8 flex items-center space-x-3">
            <User size={20} className="text-emerald-600" />
            <span>ব্যক্তিগত তথ্যাদি</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">পূর্ণ নাম</label>
              <div className="relative">
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl text-base font-bold text-stone-900 focus:bg-white focus:border-emerald-800 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">সংগঠনের পদবি (অপরিবর্তনযোগ্য)</label>
              <div className="relative">
                <ShieldCheck size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-600" />
                <input 
                  readOnly type="text" value={formData.role}
                  className="w-full pl-14 pr-6 py-4 bg-stone-100 border border-stone-100 rounded-2xl text-base font-bold text-stone-500 cursor-not-allowed outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">শিক্ষা প্রতিষ্ঠান</label>
              <div className="relative">
                <BookOpen size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" />
                <input 
                  type="text" name="institution" value={formData.institution} onChange={handleChange}
                  className="w-full pl-14 pr-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl text-base font-bold text-stone-900 focus:bg-white focus:border-emerald-800 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">রক্তের গ্রুপ</label>
              <div className="relative">
                <Droplets size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-red-500" />
                <select 
                  name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}
                  className="w-full pl-14 pr-12 py-4 bg-stone-50 border border-stone-100 rounded-2xl text-base font-bold text-stone-900 focus:bg-white focus:border-emerald-800 transition-all outline-none appearance-none"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-stone-100">
          <h3 className="text-xl font-bold text-stone-900 mb-8 flex items-center space-x-3">
            <Phone size={20} className="text-emerald-600" />
            <span>যোগাযোগের তথ্য</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">মোবাইল নম্বর</label>
              <div className="relative">
                <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" />
                <input 
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full pl-14 pr-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl text-base font-bold text-stone-900 focus:bg-white focus:border-emerald-800 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">ইমেইল এড্রেস</label>
              <div className="relative">
                <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" />
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full pl-14 pr-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl text-base font-bold text-stone-900 focus:bg-white focus:border-emerald-800 transition-all outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
          <button 
            type="submit"
            disabled={isSaving}
            className="w-full md:w-auto px-12 py-6 bg-stone-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-black hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center space-x-3 disabled:opacity-70"
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <Save size={18} />
                <span>পরিবর্তন সংরক্ষণ করুন</span>
              </>
            )}
          </button>
        </div>
      </form>

      <style>{`
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23D1D5DB'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.5rem center;
          background-size: 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default ProfileEdit;
