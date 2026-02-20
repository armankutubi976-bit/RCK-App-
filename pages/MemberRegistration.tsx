
import React, { useState, useEffect, useRef } from 'react';
import { User, BookOpen, MapPin, Phone, Mail, Camera, CheckCircle2, AlertCircle, ArrowLeft, Sparkles, Lock, Eye, EyeOff, ShieldCheck, Smartphone, RefreshCw, MessageSquare, X, Info, FileText, Calendar, Droplets, Upload, Image as ImageIcon } from 'lucide-react';

interface RegistrationProps {
  onBackToLogin: () => void;
}

type Step = 'form' | 'review' | 'otp' | 'success';

const MemberRegistration: React.FC<RegistrationProps> = ({ onBackToLogin }) => {
  const [step, setStep] = useState<Step>('form');
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);
  const [notification, setNotification] = useState<{ show: boolean, code: string, target: string } | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    dob: '',
    bloodGroup: '',
    gender: '',
    position: 'কার্যকরী সদস্য', 
    institution: '',
    department: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  // Timer logic for Resend OTP
  useEffect(() => {
    let interval: any;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  // Notification auto-hide logic
  useEffect(() => {
    if (notification?.show) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAndSendOtp = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setTimer(60);
    setOtp(['', '', '', '', '', '']);
    
    // Virtual Multi-channel delivery simulation
    setNotification({ 
      show: true, 
      code: code, 
      target: formData.email ? "মোবাইল ও ইমেইল" : "মোবাইল নম্বর" 
    });
    setStep('otp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("পাসওয়ার্ড দুটি মিলছে না!");
      return;
    }
    if (!profileImage) {
      alert("অনুগ্রহ করে একটি প্রোফাইল ছবি আপলোড করুন।");
      return;
    }
    setStep('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOtpChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = () => {
    const enteredCode = otp.join('');
    setIsVerifying(true);

    setTimeout(() => {
      if (enteredCode === generatedOtp) {
        // Save user to database (localStorage)
        const newUser = {
          userId: `RCK-REG-${Date.now()}`,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
          profile: {
            id: Date.now().toString(),
            userId: `RCK-REG-${Date.now()}`,
            name: formData.fullName,
            role: formData.position,
            institution: formData.institution,
            phone: formData.phone,
            email: formData.email,
            bloodGroup: formData.bloodGroup,
            image: profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.fullName)}&background=random`,
            joinDate: new Date().toLocaleDateString('bn-BD', { month: 'long', year: 'numeric' })
          }
        };

        const existingUsers = JSON.parse(localStorage.getItem('rck_registered_users') || '[]');
        existingUsers.push(newUser);
        localStorage.setItem('rck_registered_users', JSON.stringify(existingUsers));
        
        setStep('success');
      } else {
        alert("ভুল ওটিপি কোড! অনুগ্রহ করে সঠিক কোডটি দিন।");
      }
      setIsVerifying(false);
    }, 1500);
  };

  // Success Step Component
  if (step === 'success') {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-6 font-['Hind_Siliguri']">
        <div className="max-w-xl w-full bg-white p-16 rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-stone-100 text-center animate-fadeInUp">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
            <CheckCircle2 size={48} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-bold text-stone-900 mb-6 tracking-tight">নিবন্ধন সম্পন্ন হয়েছে</h2>
          <p className="text-stone-500 mb-12 leading-relaxed font-medium">
            অভিনন্দন! আপনার তথ্যসমূহ সফলভাবে যাচাই করা হয়েছে এবং আপনার একাউন্টটি তৈরি হয়েছে। এখন আপনি ড্যাশবোর্ডে লগইন করতে পারবেন।
          </p>
          <button 
            onClick={onBackToLogin}
            className="w-full bg-stone-900 text-white py-6 rounded-[2rem] font-bold text-sm hover:bg-black transition-all active:scale-[0.98] tracking-widest uppercase"
          >
            লগইন পেজে ফিরুন
          </button>
        </div>
      </div>
    );
  }

  // Review Information Step Component
  if (step === 'review') {
    const infoItems = [
      { icon: <User size={18} className="text-emerald-600" />, label: 'পূর্ণ নাম', value: formData.fullName },
      { icon: <ShieldCheck size={18} className="text-blue-600" />, label: 'পদবি', value: formData.position },
      { icon: <Phone size={18} className="text-indigo-600" />, label: 'মোবাইল নম্বর', value: `+৮৮০ ${formData.phone}` },
      { icon: <Mail size={18} className="text-purple-600" />, label: 'ইমেইল এড্রেস', value: formData.email || 'দেওয়া হয়নি' },
      { icon: <Droplets size={18} className="text-red-600" />, label: 'রক্তের গ্রুপ', value: formData.bloodGroup },
      { icon: <BookOpen size={18} className="text-emerald-600" />, label: 'শিক্ষা প্রতিষ্ঠান', value: formData.institution },
      { icon: <MapPin size={18} className="text-stone-600" />, label: 'ঠিকানা', value: formData.address },
    ];

    return (
      <div className="min-h-screen bg-[#F9F9F7] py-20 px-6 font-['Hind_Siliguri'] flex flex-col items-center">
        <div className="max-w-2xl w-full">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-stone-900 mb-4 tracking-tighter">তথ্য যাচাই করুন</h2>
            <p className="text-stone-500 font-medium">নিচে আপনার দেওয়া তথ্যগুলো মিলিয়ে দেখুন। সব ঠিক থাকলে ভেরিফাই বাটনে ক্লিক করুন।</p>
          </div>

          <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-stone-100 animate-fadeInUp">
            {/* Profile Preview in Review */}
            <div className="flex flex-col items-center mb-12">
              <div className="w-32 h-32 rounded-[2.5rem] border-4 border-emerald-50 shadow-xl overflow-hidden mb-4">
                <img src={profileImage || ''} className="w-full h-full object-cover" alt="Preview" />
              </div>
              <p className="text-xs font-black text-emerald-800 uppercase tracking-widest">প্রোফাইল ছবি</p>
            </div>

            <div className="space-y-6">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-6 p-5 rounded-3xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100">
                  <div className="w-12 h-12 bg-white shadow-sm border border-stone-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-stone-800 leading-tight truncate">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              <button
                onClick={generateAndSendOtp}
                className="w-full py-7 bg-emerald-800 text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-emerald-900 transition-all active:scale-95 flex items-center justify-center space-x-3"
              >
                <span>সব ঠিক আছে, ওটিপি পাঠান</span>
                <CheckCircle2 size={20} />
              </button>
              <button
                onClick={() => setStep('form')}
                className="w-full py-7 bg-stone-50 text-stone-600 border border-stone-100 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-stone-100 transition-all active:scale-95 flex items-center justify-center space-x-3"
              >
                <ArrowLeft size={18} />
                <span>তথ্যাদি সংশোধন করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // OTP Verification Step Component
  if (step === 'otp') {
    return (
      <div className="min-h-screen bg-[#F9F9F7] py-20 px-6 font-['Hind_Siliguri'] flex flex-col items-center justify-center relative">
        {/* Virtual SMS & Email Notification Toast */}
        {notification?.show && (
          <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-[100] animate-fadeInUp">
            <div className="bg-stone-900 text-white p-5 rounded-3xl shadow-2xl flex items-start space-x-4 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="bg-emerald-500/20 p-3 rounded-2xl text-emerald-400">
                <MessageSquare size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">নিরাপত্তা কোড</p>
                  <button onClick={() => setNotification(null)} className="text-stone-500 hover:text-white transition-colors">
                    <X size={14} />
                  </button>
                </div>
                <p className="text-xs font-bold leading-relaxed mb-2">RCK Students' Association: আপনার ওটিপি কোড হলো <span className="text-emerald-400 text-sm font-black underline decoration-2 underline-offset-4">{notification.code}</span>। কোডটি আপনার {notification.target}-এ পাঠানো হয়েছে।</p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-[3.5rem] p-12 shadow-2xl border border-stone-100 animate-fadeInUp">
          <div className="w-20 h-20 bg-emerald-900 text-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-lg rotate-3">
            <Smartphone size={36} />
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-stone-900 mb-4 tracking-tight">ভেরিফিকেশন</h2>
            <p className="text-sm text-stone-500 font-medium leading-relaxed">
              আপনার {notification?.target} চেক করুন। ৬-সংখ্যার যাচাইকরণ কোডটি নিচে দিন।
            </p>
          </div>

          <div className="flex justify-between gap-3 mb-12">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (otpInputs.current[idx] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-full h-16 bg-stone-50 border-2 border-stone-100 rounded-2xl text-center text-2xl font-black text-stone-900 focus:border-emerald-800 focus:bg-white outline-none transition-all shadow-inner"
              />
            ))}
          </div>

          <button
            onClick={verifyOtp}
            disabled={otp.some(d => !d) || isVerifying}
            className="w-full py-6 bg-emerald-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-emerald-950 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-3 mb-8"
          >
            {isVerifying ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <span>ভেরিফাই করুন</span>
                <ShieldCheck size={18} />
              </>
            )}
          </button>

          <div className="text-center">
            {timer > 0 ? (
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                পুনরায় পাঠান ({Math.floor(timer / 60)}:{ (timer % 60).toString().padStart(2, '0') })
              </p>
            ) : (
              <button
                onClick={generateAndSendOtp}
                className="text-xs font-black text-emerald-800 uppercase tracking-widest flex items-center justify-center mx-auto space-x-2 hover:text-emerald-900 transition-colors"
              >
                <RefreshCw size={14} />
                <span>কোড পুনরায় পাঠান</span>
              </button>
            )}
          </div>
        </div>
        
        <button 
          onClick={() => {
            setNotification(null);
            setStep('review');
          }}
          className="mt-10 flex items-center space-x-3 text-stone-400 font-bold hover:text-stone-800 transition-all text-xs uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={16} />
          <span>তথ্যাদি পরিবর্তন করুন</span>
        </button>
      </div>
    );
  }

  // Registration Form Step Component
  return (
    <div className="min-h-screen bg-[#F9F9F7] py-20 px-6 font-['Hind_Siliguri'] relative selection:bg-emerald-100 selection:text-emerald-900">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-stone-200 via-emerald-800 to-stone-200"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
             <button 
               onClick={onBackToLogin}
               className="group flex items-center space-x-3 text-stone-400 font-bold hover:text-stone-800 transition-all text-xs uppercase tracking-[0.2em]"
             >
               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
               <span>ফিরে যান</span>
             </button>
             <h2 className="text-5xl md:text-6xl font-black text-stone-900 tracking-tighter leading-none">সদস্য আবেদন <br/><span className="text-emerald-800">নিবন্ধন</span></h2>
             <div className="w-20 h-1 bg-stone-900 rounded-full"></div>
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-16 animate-fadeInUp">
          
          {/* Photo Upload Section */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col items-center">
             <h3 className="text-2xl font-bold text-stone-900 tracking-tight mb-8 self-start">প্রোফাইল ছবি আপলোড</h3>
             <div 
               onClick={() => fileInputRef.current?.click()}
               className="group relative w-48 h-48 bg-stone-50 rounded-[3rem] border-4 border-dashed border-stone-200 flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-all overflow-hidden"
             >
               {profileImage ? (
                 <>
                   <img src={profileImage} className="w-full h-full object-cover" alt="Profile" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Camera size={32} />
                   </div>
                 </>
               ) : (
                 <>
                   <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-stone-300 group-hover:text-emerald-500 group-hover:scale-110 transition-all mb-4">
                      <Upload size={28} />
                   </div>
                   <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest text-center group-hover:text-emerald-700">ছবি সিলেক্ট করুন</p>
                 </>
               )}
             </div>
             <input 
               type="file" 
               ref={fileInputRef} 
               onChange={handleImageUpload} 
               accept="image/*" 
               className="hidden" 
             />
             <p className="mt-6 text-[10px] text-stone-400 font-bold uppercase tracking-widest text-center">জেপিজি বা পিএনজি ফাইল (সর্বোচ্চ ২ এমবি)</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.03)] border border-stone-100">
            <h3 className="text-2xl font-bold text-stone-900 tracking-tight mb-8">সিকিউরিটি ও ব্যক্তিগত তথ্য</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">লগইন পাসওয়ার্ড *</label>
                <div className="relative">
                  <input 
                    required name="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" 
                    className="w-full px-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl focus:border-stone-900 text-lg font-bold outline-none text-stone-900 transition-all"
                    value={formData.password} onChange={handleChange}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-900 transition-colors">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">নিশ্চিত পাসওয়ার্ড *</label>
                <input 
                  required name="confirmPassword" type={showPassword ? 'text' : 'password'} placeholder="••••••••" 
                  className="w-full px-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl focus:border-stone-900 text-lg font-bold outline-none text-stone-900 transition-all"
                  value={formData.confirmPassword} onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">পূর্ণ নাম *</label>
                <input required name="fullName" type="text" placeholder="যেমন: খোরশেদ আলম আতিক" className="w-full px-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl outline-none text-lg font-bold text-stone-900 focus:border-stone-900 transition-all" value={formData.fullName} onChange={handleChange} />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">পিতার নাম *</label>
                <input required name="fatherName" type="text" placeholder="বাবার নাম লিখুন" className="w-full px-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl outline-none text-lg font-bold text-stone-900 focus:border-stone-900 transition-all" value={formData.fatherName} onChange={handleChange} />
              </div>
              
              <div className="space-y-3 md:col-span-2">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">সংগঠনের পদবি *</label>
                <select 
                  required name="position"
                  className="w-full px-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl focus:border-stone-900 text-lg font-bold outline-none appearance-none cursor-pointer text-stone-900 transition-all"
                  value={formData.position} onChange={handleChange}
                >
                  <option value="সভাপতি">সভাপতি</option>
                  <option value="সহ সভাপতি">সহ সভাপতি</option>
                  <option value="সাধারণ সম্পাদক">সাধারণ সম্পাদক</option>
                  <option value="যুগ্ম সাধারণ সম্পাদক">যুগ্ম সাধারণ সম্পাদক</option>
                  <option value="সহ যুগ্ম সাধারণ সম্পাদক">সহ যুগ্ম সাধারণ সম্পাদক</option>
                  <option value="সাংগঠনিক সম্পাদক">সাংগঠনিক সম্পাদক</option>
                  <option value="সহ সাংগঠনিক সম্পাদক">সহ সাংগঠনিক সম্পাদক</option>
                  <option value="অর্থ সম্পাদক">অর্থ সম্পাদক</option>
                  <option value="সহ অর্থ সম্পাদক">সহ অর্থ সম্পাদক</option>
                  <option value="অনুষ্ঠান বিষয়ক সম্পাদক">অনুষ্ঠান বিষয়ক সম্পাদক</option>
                  <option value="সহ অনুষ্ঠান বিষয়ক সম্পাদক">সহ অনুষ্ঠান বিষয়ক সম্পাদক</option>
                  <option value="আপ্যায়ন বিষয়ক সম্পাদক">আপ্যায়ন বিষয়ক সম্পাদক</option>
                  <option value="সহ আপ্যায়ন বিষয়ক সম্পাদক">সহ আপ্যায়ন বিষয়ক সম্পাদক</option>
                  <option value="ক্রীড়া বিষয়ক সম্পাদক">ক্রীড়া বিষয়ক সম্পাদক</option>
                  <option value="সহ ক্রীড়া বিষয়ক সম্পাদক">সহ ক্রীড়া বিষয়ক সম্পাদক</option>
                  <option value="কর্ম সংস্থান বিষয়ক সম্পাদক">কর্ম সংস্থান বিষয়ক সম্পাদক</option>
                  <option value="সহ কর্ম সংস্থান বিষয়ক সম্পাদক">সহ কর্ম সংস্থান বিষয়ক সম্পাদক</option>
                  <option value="প্রচার ও প্রকাশনা বিষয়ক সম্পাদক">প্রচার ও প্রকাশনা বিষয়ক সম্পাদক</option>
                  <option value="সহ প্রচার ও প্রকাশনা বিষয়ক সম্পাদক">সহ প্রচার ও প্রকাশনা বিষয়ক সম্পাদক</option>
                  <option value="গ্রন্থ ও প্রকাশনা বিষয়ক সম্পাদক">গ্রন্থ ও প্রকাশনা বিষয়ক সম্পাদক</option>
                  <option value="সহ গ্রন্থ ও প্রকাশনা বিষয়ক সম্পাদক">সহ গ্রন্থ ও প্রকাশনা বিষয়ক সম্পাদক</option>
                  <option value="দপ্তর সম্পাদক">দপ্তর সম্পাদক</option>
                  <option value="সহ দপ্তর সম্পাদক">সহ দপ্তর সম্পাদক</option>
                  <option value="শিক্ষা ও গবেষণা বিষয়ক সম্পাদক">শিক্ষা ও গবেষণা বিষয়ক সম্পাদক</option>
                  <option value="সহ শিক্ষা ও গবেষণা বিষয়ক সম্পাদক">সহ শিক্ষা ও গবেষণা বিষয়ক সম্পাদক</option>
                  <option value="ধর্ম ও গবেষণা বিষয়ক সম্পাদক">ধর্ম ও গবেষণা বিষয়ক সম্পাদক</option>
                  <option value="সহ ধর্ম ও গবেষণা বিষয়ক সম্পাদক">সহ ধর্ম ও গবেষণা বিষয়ক সম্পাদক</option>
                  <option value="তথ্য ও প্রযুক্তি বিষয়ক সম্পাদক">তথ্য ও প্রযুক্তি বিষয়ক সম্পাদক</option>
                  <option value="সহ তথ্য ও প্রযুক্তি বিষয়ক সম্পাদক">সহ তথ্য ও প্রযুক্তি বিষয়ক সম্পাদক</option>
                  <option value="উপদেষ্টা">উপদেষ্টা</option>
                  <option value="কার্যকরী সদস্য">কার্যকরী সদস্য</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">মোবাইল নম্বর (ওটিপি পাঠানো হবে) *</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-stone-100 border-2 border-stone-200 px-6 py-5 rounded-2xl text-lg font-black text-stone-600">+৮৮০</div>
                  <input required name="phone" type="tel" maxLength={10} placeholder="১৫******" className="flex-1 px-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl focus:border-stone-900 text-lg font-bold outline-none tracking-widest text-stone-900 transition-all" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">ইমেইল এড্রেস (ওটিপি পাঠানো হবে) *</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300" size={20} />
                  <input required name="email" type="email" placeholder="example@mail.com" className="w-full pl-16 pr-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl outline-none text-lg font-bold text-stone-900 focus:border-stone-900 transition-all" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-3 md:col-span-2">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">রক্তের গ্রুপ *</label>
                <select required name="bloodGroup" className="w-full px-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl outline-none appearance-none text-lg font-bold text-stone-900 focus:border-stone-900 transition-all" value={formData.bloodGroup} onChange={handleChange}>
                  <option value="">নির্বাচন করুন</option>
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

          <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.03)] border border-stone-100">
            <h3 className="text-2xl font-bold text-stone-900 mb-8 tracking-tight">শিক্ষা ও ঠিকানা</h3>
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">শিক্ষা প্রতিষ্ঠানের নাম *</label>
                <input required name="institution" type="text" placeholder="যেমন: কুতুবদিয়া সরকারি কলেজ" className="w-full px-8 py-5 bg-[#FDFDFD] border-2 border-stone-100 rounded-2xl outline-none text-lg font-bold text-stone-900 focus:border-stone-900 transition-all" value={formData.institution} onChange={handleChange} />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">স্থায়ী ঠিকানা *</label>
                <textarea required name="address" rows={3} placeholder="গ্রাম, ইউনিয়ন, উপজেলা উল্লেখ করুন" className="w-full px-8 py-6 bg-[#FDFDFD] border-2 border-stone-100 rounded-[2rem] outline-none resize-none leading-relaxed text-lg font-bold text-stone-900 focus:border-stone-900 transition-all" value={formData.address} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col items-center">
            <button type="submit" className="w-full py-8 bg-emerald-800 text-white rounded-[2.5rem] font-black text-xl shadow-xl hover:bg-emerald-900 hover:-translate-y-2 transition-all flex items-center justify-center space-x-4">
              <span>তথ্যাদি রিভিউ করুন</span>
              <FileText size={24} />
            </button>
            <p className="mt-8 text-[11px] text-stone-400 font-bold uppercase tracking-[0.3em]">© RCK Students' Association</p>
          </div>
        </form>
      </div>
      
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

export default MemberRegistration;
