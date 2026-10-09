import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Globe2, 
  ShieldCheck, 
  Zap, 
  Activity, 
  DownloadCloud,
  ChevronRight,
  Radio
} from 'lucide-react';
import { useI18n } from '../../i18n/I18nContext';
import { RealtimeMarketTicker } from './RealtimeMarketTicker';

interface LiveEventRaw {
  id: string;
  flag: string;
  location: string;
  type: 'download' | 'view' | 'verify';
  material: string;
  timeAgo: string;
}

const LIVE_EVENTS: LiveEventRaw[] = [
  { id: 'ev-1', flag: '🇨🇳', location: 'Shanghai, CN', type: 'download', material: 'SPARK ONE Standard Presentation Deck v2.3', timeAgo: '12s ago' },
  { id: 'ev-2', flag: '🇰🇷', location: 'Seoul, KR', type: 'view', material: 'Member Promotion & Global Incentive Plan (KO)', timeAgo: '26s ago' },
  { id: 'ev-3', flag: '🇺🇸', location: 'California, US', type: 'verify', material: 'US FinCEN MSB Financial Regulatory License', timeAgo: '45s ago' },
  { id: 'ev-4', flag: '🇻🇳', location: 'Hanoi, VN', type: 'download', material: 'Multilingual Roll-up Banner 80x200cm (VN)', timeAgo: '1m ago' },
  { id: 'ev-5', flag: '🇭🇰', location: 'Hong Kong, HK', type: 'view', material: 'Global Digital Wealth Whitepaper (TC)', timeAgo: '1m ago' },
  { id: 'ev-6', flag: '🇯🇵', location: 'Tokyo, JP', type: 'download', material: 'SPARK 3D Metallic Emblem 4K UHD Original', timeAgo: '2m ago' },
  { id: 'ev-7', flag: '🇹🇭', location: 'Bangkok, TH', type: 'verify', material: 'SPARK Global Official Brand Video (1080P Cinema)', timeAgo: '3m ago' },
  { id: 'ev-8', flag: '🇮🇩', location: 'Jakarta, ID', type: 'view', material: 'SPARK Global Charity Field Documentary Album', timeAgo: '3m ago' },
  { id: 'ev-9', flag: '🇸🇬', location: 'Singapore, SG', type: 'download', material: 'SPARK UNION CAPITAL US Inc. Certificate', timeAgo: '4m ago' },
];

export const RealtimeMetricsBanner: React.FC = () => {
  const { t } = useI18n();
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [liveWinRate, setLiveWinRate] = useState(98.42);

  // Rotate live activity events
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentEventIndex((prev) => (prev + 1) % LIVE_EVENTS.length);
        setIsFading(false);
      }, 300);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  // Subtle real-time fluctuation for quant win rate
  useEffect(() => {
    const rateTimer = setInterval(() => {
      const delta = (Math.random() * 0.04 - 0.02);
      setLiveWinRate(prev => +(Math.max(98.20, Math.min(98.65, prev + delta))).toFixed(2));
    }, 6000);

    return () => clearInterval(rateTimer);
  }, []);

  const activeEvent = LIVE_EVENTS[currentEventIndex];

  const getActionText = (type: 'download' | 'view' | 'verify') => {
    if (type === 'download') return t.metrics.justDownloaded;
    if (type === 'view') return t.metrics.justViewed;
    return t.metrics.justVerified;
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 mb-4 sm:mb-6 w-full">
      
      {/* Container Card */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#0c081c]/90 border border-purple-500/25 backdrop-blur-xl p-3 sm:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(124,58,237,0.15)] overflow-hidden">
        
        {/* Top Header Strip: Status badge + Live indicators */}
        <div className="flex items-center justify-between gap-2 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3.5 border-b border-purple-500/15">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500"></span>
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase">
              <span className="text-white font-['Space_Grotesk']">{t.metrics.title}</span>
              <span className="text-purple-400 font-mono text-[10px] hidden sm:inline">• {t.metrics.subtitle}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-400">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>{t.metrics.latency}</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-purple-300">{t.metrics.nodeSync}</span>
          </div>
        </div>

        {/* 5 Core Metrics Grid (Horizontal Swipe on Mobile, 5 Columns on Desktop) */}
        <div className="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-1 px-1 sm:mx-0 sm:px-0">
          
          {/* 1. AI 量化策略胜率 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">{t.metrics.winRateTitle}</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-emerald-400 flex items-baseline gap-1">
              <span>{liveWinRate}%</span>
              <span className="text-[10px] font-mono text-emerald-500/90 font-semibold">+0.18%</span>
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5 truncate">{t.metrics.winRateDesc}</div>
          </div>

          {/* 2. 全球活跃节点 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">{t.metrics.nodesTitle}</span>
              <Globe2 className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-white">
              1,280+
            </div>
            <div className="text-[9px] text-purple-300 mt-0.5 truncate">{t.metrics.nodesDesc}</div>
          </div>

          {/* 3. 资产管理规模 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">{t.metrics.aumTitle}</span>
              <Zap className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-amber-300">
              $148.6M+
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5 truncate">{t.metrics.aumDesc}</div>
          </div>

          {/* 4. 安全无事故运行 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">{t.metrics.uptimeTitle}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-cyan-300">
              1,428
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5 truncate">{t.metrics.uptimeDesc}</div>
          </div>

          {/* 5. 24H 物料极速下发量 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">{t.metrics.downloadsTitle}</span>
              <DownloadCloud className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-white">
              42,910
            </div>
            <div className="text-[9px] text-indigo-300 mt-0.5 truncate">{t.metrics.downloadsDesc}</div>
          </div>

        </div>

        {/* Bottom Activity Ticker: Live Material Access Stream */}
        <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-purple-500/15 flex items-center justify-between gap-2">
          
          {/* Left Live Badge */}
          <div className="flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-md bg-purple-600/30 border border-purple-400/40 text-[10px] font-mono text-purple-200">
            <Radio className="w-3 h-3 text-purple-300 animate-pulse" />
            <span className="font-bold">{t.metrics.livePull}</span>
          </div>

          {/* Scrolling / Rotating Event Text */}
          <div className="flex-1 overflow-hidden">
            <div className={`transition-opacity duration-300 text-[11px] sm:text-xs text-slate-200 flex items-center gap-2 truncate ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}>
              <span className="text-sm shrink-0">{activeEvent.flag}</span>
              <span className="font-semibold text-purple-300 shrink-0">{activeEvent.location}</span>
              <span className="text-slate-400 shrink-0">{getActionText(activeEvent.type)}</span>
              <span className="text-white font-medium truncate">{activeEvent.material}</span>
              <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-auto hidden sm:inline">
                {activeEvent.timeAgo}
              </span>
            </div>
          </div>

          {/* Right Action Hint */}
          <div className="shrink-0 text-[10px] font-mono text-slate-400 hidden md:flex items-center gap-0.5 hover:text-purple-300 transition-colors cursor-pointer">
            <span>{t.metrics.liveBroadcast}</span>
            <ChevronRight className="w-3 h-3" />
          </div>

        </div>

        {/* Global Multi-Asset Realtime Trading Data (Crypto, Gold, US Stocks, Tokens) */}
        <RealtimeMarketTicker />

      </div>

    </section>
  );
};

