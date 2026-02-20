
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles, AlertCircle } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Language, translations } from '../translations';

interface AIChatProps {
  lang: Language;
}

const AIChat: React.FC<AIChatProps> = ({ lang }) => {
  const t = translations[lang];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial greeting based on language
    setMessages([
      { 
        role: 'model', 
        text: lang === 'bn' 
          ? 'আসসালামু আলাইকুম! আমি আর. সি. কে. স্টুডেন্টস এসোসিয়েশনের এআই এসিস্ট্যান্ট। আপনাকে কীভাবে সাহায্য করতে পারি?' 
          : 'Assalamu Alaikum! I am the AI Assistant of RCK Students\' Association. How can I help you today?' 
      }
    ]);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const aiResponse = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-14rem)] flex flex-col bg-white rounded-[3rem] shadow-2xl border border-stone-100 overflow-hidden animate-fadeInUp">
      {/* Header */}
      <div className="p-8 border-b border-stone-100 bg-emerald-950 text-white flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur shadow-inner border border-white/10">
            <Sparkles className="text-emerald-400" size={28} />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight">{t.aiHelperTitle}</h2>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
              <span className="text-[10px] font-black text-emerald-200 uppercase tracking-widest">{t.online}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-stone-50/30 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}>
            <div className={`flex items-start max-w-[85%] space-x-4 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
                msg.role === 'user' ? 'bg-stone-900 text-white' : 'bg-white text-emerald-800 border border-emerald-100'
              }`}>
                {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div className={`p-6 rounded-[2rem] text-sm font-medium leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-stone-900 text-white shadow-xl rounded-tr-none' 
                  : 'bg-white text-stone-800 shadow-sm border border-emerald-50 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="flex items-start max-w-[80%] space-x-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                <Bot size={18} />
              </div>
              <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-emerald-50 flex items-center space-x-2 rounded-tl-none">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Disclaimer */}
      <div className="px-8 py-3 bg-stone-900 text-stone-400 flex items-center justify-center space-x-3 border-t border-white/5">
        <AlertCircle size={14} className="text-emerald-500" />
        <p className="text-[10px] font-black uppercase tracking-widest">{t.aiDisclaimer}</p>
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-8 bg-white border-t border-stone-50">
        <div className="relative group">
          <input
            type="text"
            className="w-full px-8 py-5 bg-stone-50 border-2 border-transparent rounded-[1.8rem] text-sm font-bold focus:bg-white focus:border-stone-900 pr-24 transition-all outline-none text-stone-900"
            placeholder={t.askAiPlaceholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-stone-900 text-white p-4 rounded-2xl disabled:opacity-50 hover:bg-black transition-all shadow-xl active:scale-95"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChat;
