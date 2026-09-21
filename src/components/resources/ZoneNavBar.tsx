import React from 'react';
import { 
  FileText, 
  Megaphone, 
  Sparkles, 
  Film, 
  Camera, 
  Filter,
  Layers,
  ArrowDown
} from 'lucide-react';
import type { ZoneType, FileFormat } from '../../types/resource';

interface ZoneNavBarProps {
  activeZone: ZoneType | 'all';
  onSelectZone: (zone: ZoneType | 'all') => void;
  zoneCounts: Record<string, number>;
  selectedFormat: FileFormat | 'All';
  onSelectFormat: (format: FileFormat | 'All') => void;
}

export const ZONES = [
  { id: 'all' as const, label: '全部专区', icon: Layers, desc: '全景总览' },
  { id: 'courseware' as const, label: '课件区', icon: FileText, desc: '项目介绍 • 金融简介' },
  { id: 'marketing' as const, label: '市场宣传', icon: Megaphone, desc: '各种海报 • 权益长图' },
  { id: 'assets' as const, label: '素材专区', icon: Sparkles, desc: '3D Logo • 易拉宝' },
  { id: 'videos' as const, label: '视频专区', icon: Film, desc: '宣传片 • 动效 • 公益片' },
  { id: 'events' as const, label: '活动照片区', icon: Camera, desc: '西非 • 越南 • 泰国 • 大马' },
];

export const ZoneNavBar: React.FC<ZoneNavBarProps> = ({
  activeZone,
  onSelectZone,
  zoneCounts,
  selectedFormat,
  onSelectFormat,
}) => {
  const scrollToZone = (zoneId: ZoneType | 'all') => {
    onSelectZone(zoneId);
    if (zoneId === 'all') {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else {
      const el = document.getElementById(`zone-${zoneId}`);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="sticky top-20 z-30 bg-[#07050d]/90 backdrop-blur-xl border-b border-purple-500/20 py-3 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Zone Navigation Tabs */}
        <div className="flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {ZONES.map((zone) => {
              const Icon = zone.icon;
              const isActive = activeZone === zone.id;
              const count = zone.id === 'all' 
                ? Object.values(zoneCounts).reduce((a, b) => a + b, 0)
                : zoneCounts[zone.id] || 0;

              return (
                <button
                  key={zone.id}
                  onClick={() => scrollToZone(zone.id)}
                  className={`flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-[0_0_20px_rgba(124,58,237,0.5)] scale-[1.02]'
                      : 'bg-[#120d24]/90 hover:bg-[#1b1338] text-slate-300 hover:text-white border-purple-500/15 hover:border-purple-400/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                  <div className="text-left flex items-center gap-1.5">
                    <span>{zone.label}</span>
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive ? 'bg-black/40 text-purple-200' : 'bg-white/10 text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Format Filter Pill on Right */}
          <div className="hidden md:flex items-center gap-1 shrink-0">
            <span className="text-[11px] text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-purple-400" />
              <span>格式:</span>
            </span>
            {(['All', 'pdf', 'image', 'video', 'archive'] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => onSelectFormat(fmt)}
                className={`px-2 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                  selectedFormat === fmt
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-400/50'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                {fmt === 'All' ? '全部' : fmt.toUpperCase()}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
