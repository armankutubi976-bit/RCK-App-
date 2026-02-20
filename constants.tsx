
import React from 'react';
import { LayoutDashboard, Users, Calendar, Megaphone, Info, MessageSquare, Image as ImageIcon, ShieldCheck } from 'lucide-react';

export const ORG_NAME = "আর. সি. কে. স্টুডেন্টস' এসোসিয়েশন";
export const ORG_LOCATION = "কায়্যারবিল, কুতুবদিয়া, কক্সবাজার";
export const ORG_ESTD = "২০২০";
export const ORG_SLOGAN = "শিক্ষায় ও সচেতনতায় সমাজের পরিবর্তন";

export const LOGO_URL = "https://i.ibb.co/Lhb8Zrt/rck-logo.png"; 

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: <LayoutDashboard size={20} /> },
  { id: 'members', label: 'সদস্যবৃন্দ', icon: <Users size={20} /> },
  { id: 'advisors', label: 'উপদেষ্টা মণ্ডলী', icon: <ShieldCheck size={20} /> },
  { id: 'gallery', label: 'গ্যালারী', icon: <ImageIcon size={20} /> },
  { id: 'events', label: 'ইভেন্টসমূহ', icon: <Calendar size={20} /> },
  { id: 'notices', label: 'নোটিশ বোর্ড', icon: <Megaphone size={20} /> },
  { id: 'ai-chat', label: 'এআই এসিস্ট্যান্ট', icon: <MessageSquare size={20} /> },
  { id: 'about', label: 'আমাদের সম্পর্কে', icon: <Info size={20} /> },
];

export const MOCK_AUTH_USERS = [
  { 
    userId: 'RCK-USER-001', 
    phone: '01800000000',
    email: 'armankutubi974@gmail.com',
    password: 'Arman276265',
    profile: {
      id: '1',
      userId: 'RCK-USER-001',
      name: 'আরমান কুতুবী',
      role: 'সভাপতি',
      institution: 'কুতুবদিয়া সরকারি কলেজ',
      phone: '০১৮********',
      email: 'armankutubi974@gmail.com',
      bloodGroup: 'B+',
      image: 'https://picsum.photos/seed/arman/200',
      joinDate: 'জানুয়ারি ২০২৪'
    }
  }
];

export const MOCK_MEMBERS = [
  // কার্যকরী কমিটি (Executive Committee)
  { id: '1', name: 'খোরশেদ আলম আতিক', role: 'সভাপতি', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'atik@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Khurshed+Alam&background=059669&color=fff' },
  { id: '2', name: 'মোঃ জাকারিয়া', role: 'সহ সভাপতি (১)', institution: 'চবি', phone: '০১৭********', email: 'zakaria@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Md+Zakaria&background=0284c7&color=fff' },
  { id: '3', name: 'রবিউল হোছাইন রাজু', role: 'সহ সভাপতি (২)', institution: 'ঢাকা কলেজ', phone: '০১৮********', email: 'raju@example.com', bloodGroup: 'O+', image: 'https://ui-avatars.com/api/?name=Rabiul+Hossain&background=7c3aed&color=fff' },
  { id: '4', name: 'রহিম উল্লাহ', role: 'সাধারণ সম্পাদক', institution: 'চবি', phone: '০১৫********', email: 'rahim@example.com', bloodGroup: 'AB+', image: 'https://ui-avatars.com/api/?name=Rahim+Ullah&background=ea580c&color=fff' },
  { id: '5', name: 'রবিউল হোছাইন রবি', role: 'যুগ্ম সাধারণ সম্পাদক', institution: 'এমইএস কলেজ', phone: '০১৬********', email: 'robi@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Robiul+Hossain+Robi&background=2563eb&color=fff' },
  { id: '6', name: 'ওসমান গণি', role: 'সহ যুগ্ম সাধারণ সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৭********', email: 'osman@example.com', bloodGroup: 'A-', image: 'https://ui-avatars.com/api/?name=Osman+Goni&background=db2777&color=fff' },
  { id: '7', name: 'আজম ইকবাল শাকিল', role: 'সাংগঠনিক সম্পাদক', institution: 'দয়াগঞ্জ কলেজ', phone: '০১৯********', email: 'shakil@example.com', bloodGroup: 'O-', image: 'https://ui-avatars.com/api/?name=Azam+Iqbal&background=0891b2&color=fff' },
  { id: '8', name: 'জহর আলী', role: 'সহ সাংগঠনিক সম্পাদক (১)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'jahar@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Jahar+Ali&background=4f46e5&color=fff' },
  { id: '9', name: 'খাইরুল বশর', role: 'সহ সাংগঠনিক সম্পাদক (২)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৭********', email: 'bashar@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Khairul+Bashar&background=16a34a&color=fff' },
  { id: '10', name: 'ফোরকান আলী', role: 'অর্থ সম্পাদক', institution: 'উম্মুল কুরা বিশ্ববিদ্যালয়', phone: '০১৮********', email: 'forkan@example.com', bloodGroup: 'B-', image: 'https://ui-avatars.com/api/?name=Forkan+Ali&background=d97706&color=fff' },
  { id: '11', name: 'আবু হানিফ', role: 'সহ অর্থ সম্পাদক (১)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'hanif@example.com', bloodGroup: 'O+', image: 'https://ui-avatars.com/api/?name=Abu+Hanif&background=d97706&color=fff' },
  { id: '12', name: 'শহিদুল ইসলাম', role: 'সহ অর্থ সম্পাদক (২)', institution: 'কুতুবদিয়া কলেজ', phone: '০১৭********', email: 'shahidul@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Shahidul+Islam&background=be123c&color=fff' },
  { id: '13', name: 'তাহিকুল ইসলাম', role: 'অনুষ্ঠান বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৬********', email: 'tahikul@example.com', bloodGroup: 'O+', image: 'https://ui-avatars.com/api/?name=Tahikul+Islam&background=9333ea&color=fff' },
  { id: '14', name: 'মোহাম্মদ সাকিব', role: 'সহ অনুষ্ঠান বিষয়ক সম্পাদক (১)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'sakib@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Mohammad+Sakib&background=9333ea&color=fff' },
  { id: '15', name: 'ইমন উদ্দিন সেকান', role: 'সহ অনুষ্ঠান বিষয়ক সম্পাদক (২)', institution: 'কুতুবদিয়া কলেজ', phone: '০১৭********', email: 'emon@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Emon+Uddin&background=be123c&color=fff' },
  { id: '16', name: 'মফিজ আলম', role: 'আপ্যায়ন বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া কলেজ', phone: '০১৭********', email: 'mofiz@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Mofiz+Alam&background=be123c&color=fff' },
  { id: '17', name: 'মোঃ টিপু সুলতান', role: 'সহ আপ্যায়ন বিষয়ক সম্পাদক (১)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'tipu@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Tipu+Sultan&background=be123c&color=fff' },
  { id: '18', name: 'সাকিবুল ইসলাম', role: 'সহ আপ্যায়ন বিষয়ক সম্পাদক (২)', institution: 'কুতুবদিয়া কলেজ', phone: '০১৭********', email: 'sakibul@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Sakibul+Islam&background=be123c&color=fff' },
  { id: '19', name: 'দিদারুল ইসলাম (১)', role: 'ক্রীড়া বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'didar@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Didarul+Islam&background=0369a1&color=fff' },
  { id: '20', name: 'রাকিবুল ইসলাম অন্তু', role: 'সহ ক্রীড়া বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'antu@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Rakibul+Antu&background=0369a1&color=fff' },
  { id: '21', name: 'ইলিয়াস কুতুবী', role: 'কর্ম সংস্থান বিষয়ক সম্পাদক', institution: 'এমইএস কলেজ', phone: '০১৯********', email: 'iliyar@example.com', bloodGroup: 'O+', image: 'https://ui-avatars.com/api/?name=Iliyar+Kutubi&background=15803d&color=fff' },
  { id: '22', name: 'হাদেমুল ইসলাম', role: 'সহ কর্ম সংস্থান বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'hademul@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Hademul+Islam&background=15803d&color=fff' },
  { id: '23', name: 'আরমান কুতুবী (১)', role: 'প্রচার ও প্রকাশনা বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'arman1@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Arman+Kutubi&background=c026d3&color=fff' },
  { id: '24', name: 'আরমান কুতুবী (২)', role: 'সহ প্রচার ও প্রকাশনা বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'arman2@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Arman+Kutubi+2&background=c026d3&color=fff' },
  { id: '25', name: 'আব্দুল মান্নান', role: 'গ্রন্থ ও প্রকাশনা বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া কলেজ', phone: '০১৭********', email: 'mannan@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Abdul+Mannan&background=4d7c0f&color=fff' },
  { id: '26', name: 'রিদুয়ানুল হক', role: 'সহ গ্রন্থ ও প্রকাশনা বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'riduan@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Riduanul+Hoq&background=4d7c0f&color=fff' },
  { id: '27', name: 'মোহাম্মদ আজিজ', role: 'দপ্তর সম্পাদক', institution: 'কুতুবদিয়া কলেজ', phone: '০১৬********', email: 'aziz@example.com', bloodGroup: 'O+', image: 'https://ui-avatars.com/api/?name=Mohammad+Aziz&background=4338ca&color=fff' },
  { id: '28', name: 'আরমান কুতুবী (১)', role: 'সহ দপ্তর সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'arman1@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Arman+Kutubi&background=4338ca&color=fff' },
  { id: '29', name: 'সাঈদ মোহাম্মদ মিজানুর রহমান', role: 'শিক্ষা ও গবেষণা বিষয়ক সম্পাদক', institution: 'চবি', phone: '০১৮********', email: 'mizan@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Mizanur+Rahman&background=a21caf&color=fff' },
  { id: '30', name: 'গিয়াস উদ্দিন', role: 'সহ শিক্ষা ও গবেষণা বিষয়ক সম্পাদক (১)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'gias@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Gias+Uddin&background=a21caf&color=fff' },
  { id: '31', name: 'আয়াত হোসেন', role: 'সহ শিক্ষা ও গবেষণা বিষয়ক সম্পাদক (২)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'ayat@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Ayat+Hossain&background=a21caf&color=fff' },
  { id: '32', name: 'দিদারুল ইসলাম (২)', role: 'তথ্য ও প্রযুক্তি বিষয়ক সম্পাদক', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৭********', email: 'didar2@example.com', bloodGroup: 'A-', image: 'https://ui-avatars.com/api/?name=Didarul+Islam+2&background=0f766e&color=fff' },
  { id: '33', name: 'রাকিব হোসেন মান্নান', role: 'সহ তথ্য ও প্রযুক্তি বিষয়ক সম্পাদক (১)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'rakib@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Rakib+Mannan&background=0f766e&color=fff' },
  { id: '34', name: 'মুহাম্মদ আরমান (৩)', role: 'সহ তথ্য ও প্রযুক্তি বিষয়ক সম্পাদক (২)', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'arman3@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Md+Arman&background=0f766e&color=fff' },

  // কার্যকরী সদস্যবৃন্দ (Executive Members)
  { id: 'm1', name: 'রাকিব হোসেন মান্নান', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm1@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Rakib+Mannan&background=64748b&color=fff' },
  { id: 'm2', name: 'মুহাম্মদ রিদুয়ান', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm2@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Md+Riduan&background=64748b&color=fff' },
  { id: 'm3', name: 'রাকিবুল ইসলাম', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm3@example.com', bloodGroup: 'O+', image: 'https://ui-avatars.com/api/?name=Rakibul+Islam&background=64748b&color=fff' },
  { id: 'm4', name: 'আদনান ওয়াহিদ সিফাত', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm4@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Adnan+Sifat&background=64748b&color=fff' },
  { id: 'm5', name: 'মুজাহিদুল ইসলাম', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm5@example.com', bloodGroup: 'AB+', image: 'https://ui-avatars.com/api/?name=Mujahidul+Islam&background=64748b&color=fff' },
  { id: 'm6', name: 'সাইফুল ইসলাম', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm6@example.com', bloodGroup: 'A-', image: 'https://ui-avatars.com/api/?name=Saiful+Islam&background=64748b&color=fff' },
  { id: 'm7', name: 'নিয়াজ মুহাম্মদ নওশাদ', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm7@example.com', bloodGroup: 'O-', image: 'https://ui-avatars.com/api/?name=Niaz+Nawshad&background=64748b&color=fff' },
  { id: 'm8', name: 'আব্দুল মান্নান', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm8@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Abdul+Mannan&background=64748b&color=fff' },
  { id: 'm9', name: 'মুহাম্মদ আরমান', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm9@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Md+Arman&background=64748b&color=fff' },
  { id: 'm10', name: 'ইসমাইল হোসেন বাপ্পি', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm10@example.com', bloodGroup: 'O+', image: 'https://ui-avatars.com/api/?name=Ismail+Bappi&background=64748b&color=fff' },
  { id: 'm11', name: 'মোহাম্মদ ইমানুল হক', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm11@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Imanul+Hoq&background=64748b&color=fff' },
  { id: 'm12', name: 'মুহাম্মদ ফয়সাল', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm12@example.com', bloodGroup: 'AB-', image: 'https://ui-avatars.com/api/?name=Md+Faisal&background=64748b&color=fff' },
  { id: 'm13', name: 'ফরহাদুল ইসলাম', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm13@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Forhadul+Islam&background=64748b&color=fff' },
  { id: 'm14', name: 'জিল্লুর রহমান', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm14@example.com', bloodGroup: 'O-', image: 'https://ui-avatars.com/api/?name=Zillur+Rahman&background=64748b&color=fff' },
  { id: 'm15', name: 'মুহাম্মদ হান্নান', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm15@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Md+Hannan&background=64748b&color=fff' },
  { id: 'm16', name: 'মুহাম্মদ সাঈদ', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm16@example.com', bloodGroup: 'A+', image: 'https://ui-avatars.com/api/?name=Md+Sayed&background=64748b&color=fff' },
  { id: 'm17', name: 'খোরশেদ আলম', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm17@example.com', bloodGroup: 'O+', image: 'https://ui-avatars.com/api/?name=Khorshed+Alam&background=64748b&color=fff' },
  { id: 'm18', name: 'মুহাম্মদ হৃদয়', role: 'কার্যকরী সদস্য', institution: 'কুতুবদিয়া সরকারি কলেজ', phone: '০১৮********', email: 'm18@example.com', bloodGroup: 'B+', image: 'https://ui-avatars.com/api/?name=Md+Hridoy&background=64748b&color=fff' },
];

export const MOCK_ADVISORS = [
  { id: 'adv1', name: 'দিল মোহাম্মদ কুতুবী', role: 'উপদেষ্টা', profession: 'সহকারী শিক্ষক, বারবাকিয়া সরকারি প্রাথমিক বিদ্যালয়', location: 'পেকুয়া, কক্সবাজার', image: 'https://ui-avatars.com/api/?name=Dil+Mohammad&background=0f172a&color=fff' },
  { id: 'adv2', name: 'নুরুল বশর', role: 'উপদেষ্টা', profession: 'র‍্যাঙ্ক লিডার, ফায়ার সার্ভিস ও সিভিল ডিফেন্স', location: 'বাংলাদেশ', image: 'https://ui-avatars.com/api/?name=Nurul+Bashar&background=1e293b&color=fff' },
  { id: 'adv3', name: 'মো: গফুর বাদশা', role: 'উপদেষ্টা', profession: 'বাংলাদেশ পুলিশ, আগ্রাবাদ উপ-পুলিশ কমিশনার কার্যালয়', location: 'চট্টগ্রাম', image: 'https://ui-avatars.com/api/?name=Gafur+Badsah&background=0f172a&color=fff' },
  { id: 'adv4', name: 'মোহাম্মদ জয়নাল আবেদীন', role: 'উপদেষ্টা', profession: 'কুমিল্লা বিশ্ববিদ্যালয়', location: 'কুমিল্লা', image: 'https://ui-avatars.com/api/?name=Joynal+Abedin&background=1e293b&color=fff' },
  { id: 'adv5', name: 'মো: আব্দুর রহমান পারভেজ', role: 'উপদেষ্টা', profession: 'প্রবাস (সংযুক্ত আরব আমিরাত)', location: 'সংযুক্ত আরব আমিরাত', image: 'https://ui-avatars.com/api/?name=Abdur+Rahman&background=0f172a&color=fff' },
  { id: 'adv6', name: 'আতাউর রহমান ফয়সাল', role: 'উপদেষ্টা', profession: 'ইসলামী ব্যাংক বাংলাদেশ পিএলসি', location: 'বাংলাদেশ', image: 'https://ui-avatars.com/api/?name=Ataur+Rahman&background=1e293b&color=fff' },
  { id: 'adv7', name: 'রকিবুল ইসলাম জিকো', role: 'উপদেষ্টা', profession: 'ইসলামী ব্যাংক বাংলাদেশ পিএলসি', location: 'বাংলাদেশ', image: 'https://ui-avatars.com/api/?name=Rakibul+Islam&background=0f172a&color=fff' },
  { id: 'adv8', name: 'মো: ইসমাইল', role: 'উপদেষ্টা', profession: 'বাংলাদেশ সেনাবাহিনী', location: 'বাংলাদেশ', image: 'https://ui-avatars.com/api/?name=Md+Ismail&background=1e293b&color=fff' },
];

export const MOCK_GALLERY = [
  { id: '1', title: 'ইফতার মাহফিল ২০২৪', category: 'অনুষ্ঠান', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', date: '১২ এপ্রিল ২০২৪' },
  { id: '2', title: 'ত্রাণ বিতরণ কার্যক্রম', category: 'সামাজিক', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', date: '০৫ মে ২০২৪' },
  { id: '3', title: 'বৃত্তি প্রদান অনুষ্ঠান', category: 'শিক্ষা', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', date: '১০ জুন ২০২৪' },
  { id: '4', title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা', category: 'খেলাধুলা', url: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=800&q=80', date: '১৫ জুলাই ২০২৪' },
  { id: '5', title: 'কমিটির সাধারণ সভা', category: 'মিটিং', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', date: '২০ আগস্ট ২০২৪' },
  { id: '6', title: 'চারা রোপণ উৎসব', category: 'সামাজিক', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&w=800&q=80', date: '২৫ আগস্ট ২০২৪' },
];

export const MOCK_EVENTS = [
  { id: '1', title: 'বার্ষিক মেধা বৃত্তি পরীক্ষা ২০২৫', date: '২০ মার্চ ২০২৫', location: 'কায়্যারবিল হাই স্কুল', description: 'কুতুবদিয়ার সকল শিক্ষার্থীদের অংশগ্রহণে বার্ষিক মেধা বৃত্তি পরীক্ষা।', image: 'https://picsum.photos/seed/e1/800/400' },
  { id: '2', title: 'বৃক্ষরোপণ কর্মসূচি', date: '১০ জুন ২০২৫', location: 'কুতুবদিয়া কোস্টাল এরিয়া', description: 'পরিবেশ রক্ষায় কুতুবদিয়া উপকূলে চারা রোপণ কার্যক্রম।', image: 'https://picsum.photos/seed/e2/800/400' },
];
