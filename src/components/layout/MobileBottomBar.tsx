import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  FileText, 
  Megaphone, 
  Sparkles, 
  Film, 
  Camera,
  ArrowUp
} from 'lucide-react';
import type { ZoneType } from '../../types/resource';

interface MobileBottomBarProps {
  activeZone: ZoneType | 'all';
  onSelectZone: (zone: ZoneType | 'all') => void;
}

const DOCK_ITEMS: { id: ZoneType | 'all'; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'all', label: '全部', icon: Layers },
  { id: 'courseware', label: '课件', icon: FileText },
  { id: 'marketing', label: '海报', icon: Megaphone },
  { id: 'assets', label: '素材', icon: Sparkles },
  { id: 'videos', label: '视频', icon: Film },
  { id: 'events', label: '照片', icon: Camera },
];

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activeZone,
  onSelectZone,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleZoneClick = (zoneId: ZoneType | 'all') => {
    onSelectZone(zoneId);
    if (zoneId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(`zone-${zoneId}`);
      if (el) {
        // Offset for top-14 (56px) + ZoneNavBar (~50px)
        const yOffset = -110;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-none flex items-center justify-between gap-2">
      {/* Main Glassmorphic Dock */}
      <nav className="pointer-events-auto flex-1 py-1.5 px-2 rounded-2xl bg-[#0c081d]/90 backdrop-blur-2xl border border-purple-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(124,58,237,0.25)] flex items-center justify-around">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeZone === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleZoneClick(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-white font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${
                isActive 
                  ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.7)] scale-110' 
                  : 'bg-transparent text-slate-400'
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? 'text-purple-300' : 'text-slate-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white border border-purple-400/50 shadow-[0_8px_25px_rgba(124,58,237,0.5)] active:scale-90 transition-all duration-200 flex items-center justify-center animate-in fade-in zoom-in-75"
          aria-label="回到顶部"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
