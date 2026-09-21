import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Search,
  ChevronDown
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
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus input when mobile search opens
  useEffect(() => {
    if (isMobileSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isMobileSearchOpen]);

  // Click outside to close dropdown on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#07050d]/90 border-b border-purple-500/15 transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo & Name */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer shrink-0" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl overflow-hidden p-[1px] bg-gradient-to-br from-white/30 via-purple-500/40 to-black/80 shadow-[0_0_15px_rgba(124,58,237,0.35)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all">
              <img 
                src="/brand/Spark_PurpleBlack_Metal.png" 
                alt="Spark 3D Logo" 
                className="w-full h-full object-cover rounded-lg sm:rounded-xl bg-black/60 transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-lg sm:rounded-xl ring-1 ring-inset ring-white/20 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-2xl font-black tracking-wider chrome-text font-['Space_Grotesk']">
                  SPARK
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-1.5 sm:px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Resource Hub
                </span>
              </div>
              <span className="hidden sm:block text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                Union Capital Inc. • 全球物料数据库
              </span>
            </div>
          </div>

          {/* Desktop Search Bar in Header */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/70" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="快速搜索课件、海报、3D Logo、视频、相册..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Actions: Search Toggle (mobile), Live Sync (desktop) & Language Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Mobile Search Toggle Button */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className={`md:hidden p-2 rounded-xl border transition-all active:scale-95 ${
                isMobileSearchOpen || searchQuery
                  ? 'bg-purple-600/30 text-purple-300 border-purple-400/50'
                  : 'bg-white/5 text-slate-300 border-white/10'
              }`}
              aria-label="搜索物料"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Desktop Live Sync Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>实时同步已就绪</span>
            </div>

            {/* Language Selector Trigger */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-medium transition-all cursor-pointer border active:scale-95 ${
                  isLangMenuOpen
                    ? 'bg-purple-600/30 text-white border-purple-400/60 shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs">
                  {LANGUAGES.find(l => l.id === selectedLanguage)?.flag}{' '}
                  <span className="hidden sm:inline">
                    {LANGUAGES.find(l => l.id === selectedLanguage)?.label || '全语言物料'}
                  </span>
                </span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180 text-purple-300' : ''}`} />
              </button>

              {/* Desktop Dropdown Menu */}
              {isLangMenuOpen && (
                <div className="hidden sm:block absolute right-0 top-full mt-2 w-52 py-2 rounded-2xl bg-[#0e091c] backdrop-blur-2xl border border-purple-500/35 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(124,58,237,0.25)] z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3.5 py-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider border-b border-purple-500/15 flex items-center justify-between">
                    <span>选择语言市场</span>
                    <span className="text-[10px] text-purple-400 font-mono">8 个选项</span>
                  </div>
                  
                  <div className="p-1 space-y-0.5 max-h-72 overflow-y-auto">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => {
                          onSelectLanguage(lang.id);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2.5 rounded-xl text-left text-xs flex items-center justify-between transition-all cursor-pointer ${
                          selectedLanguage === lang.id 
                            ? 'text-white font-bold bg-purple-600/30 border border-purple-400/40 shadow-sm' 
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-sm">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                        {selectedLanguage === lang.id && (
                          <span className="text-purple-400 text-xs font-bold">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Mobile Expandable Search Bar Drawer */}
        {isMobileSearchOpen && (
          <div className="md:hidden px-3 pb-3 pt-1 border-t border-purple-500/15 bg-[#0a0716] animate-in slide-in-from-top-2 duration-200">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="搜索课件、海报、Logo、视频..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 p-1"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Native Bottom Sheet for Language Picker */}
      {isLangMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsLangMenuOpen(false)} 
          />
          <div className="relative z-10 w-full bg-[#100b24] border-t border-purple-500/35 rounded-t-3xl p-5 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-250">
            
            {/* iOS style drag handle */}
            <div className="w-12 h-1.5 rounded-full bg-slate-600 mx-auto mb-4" />
            
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-purple-500/15">
              <span className="text-sm font-bold text-white">选择物料语言市场</span>
              <button 
                onClick={() => setIsLangMenuOpen(false)}
                className="text-xs text-purple-400 font-semibold px-2 py-1"
              >
                完成
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1 max-h-[55vh] overflow-y-auto pt-1">
              {LANGUAGES.map((lang) => {
                const isSelected = selectedLanguage === lang.id;
                return (
                  <button
                    key={lang.id}
                    onClick={() => {
                      onSelectLanguage(lang.id);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full min-h-[46px] px-4 rounded-xl flex items-center justify-between transition-all active:scale-[0.98] ${
                      isSelected
                        ? 'bg-purple-600/30 text-white font-bold border border-purple-400/50 shadow-sm'
                        : 'text-slate-300 active:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-3 text-sm">
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    {isSelected && (
                      <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
