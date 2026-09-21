import React from 'react';
import { 
  Globe, 
  Search
} from 'lucide-react';
import type { SupportedLanguage } from '../../types/resource';

interface NavbarProps {
  selectedLanguage: SupportedLanguage | 'All';
  onSelectLanguage: (lang: SupportedLanguage | 'All') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
}

const LANGUAGES: { id: SupportedLanguage | 'All'; label: string; flag: string }[] = [
  { id: 'All', label: '全语言物料', flag: '🌐' },
  { id: '中文', label: '中文 (ZH)', flag: '🇨🇳' },
  { id: '英语', label: 'English (EN)', flag: '🇺🇸' },
  { id: '越南语', label: 'Tiếng Việt (VN)', flag: '🇻🇳' },
  { id: '印尼语', label: 'Bahasa Indonesia (ID)', flag: '🇮🇩' },
  { id: '韩语', label: '한국어 (KO)', flag: '🇰🇷' },
  { id: '日语', label: '日本語 (JA)', flag: '🇯🇵' },
  { id: '泰语', label: 'ภาษาไทย (TH)', flag: '🇹🇭' },
];

export const Navbar: React.FC<NavbarProps> = ({
  selectedLanguage,
  onSelectLanguage,
  searchQuery,
  onSearchChange,
  totalCount,
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#07050d]/85 border-b border-purple-500/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-11 h-11 rounded-xl overflow-hidden p-[1px] bg-gradient-to-br from-white/30 via-purple-500/40 to-black/80 shadow-[0_0_20px_rgba(124,58,237,0.35)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all">
            <img 
              src="/brand/Spark_PurpleBlack_Metal.png" 
              alt="Spark 3D Logo" 
              className="w-full h-full object-cover rounded-xl bg-black/60 transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-wider chrome-text font-['Space_Grotesk']">
                SPARK
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Resource Hub
              </span>
            </div>
            <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
              Union Capital Inc. • 全球物料数据库
            </span>
          </div>
        </div>

        {/* Search Bar in Header */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="快速搜索物料、3D Logo、合规执照、公益现场图包..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right Actions: Live Sync Status & Language Switcher */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          
          {/* Live Sync Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>实时同步已就绪</span>
          </div>

          {/* Language Selector */}
          <div className="relative group">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-all cursor-pointer">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">
                {LANGUAGES.find(l => l.id === selectedLanguage)?.label || '全语言物料'}
              </span>
              <span className="sm:hidden">
                {LANGUAGES.find(l => l.id === selectedLanguage)?.flag || '🌐'}
              </span>
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-48 py-2 rounded-xl bg-[#0f0a1d]/95 backdrop-blur-2xl border border-purple-500/25 shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all transform origin-top-right z-50">
              <div className="px-3 py-1.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider border-b border-purple-500/10">
                选择语言市场
              </div>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => onSelectLanguage(lang.id)}
                  className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-purple-600/20 transition-colors ${
                    selectedLanguage === lang.id ? 'text-purple-300 font-bold bg-purple-600/15' : 'text-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </span>
                  {selectedLanguage === lang.id && <span className="text-purple-400 text-xs">✓</span>}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
