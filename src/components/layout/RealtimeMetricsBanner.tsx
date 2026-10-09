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

interface LiveEvent {
  id: string;
  flag: string;
  location: string;
  action: '下载' | '查验' | '调阅';
  material: string;
  timeAgo: string;
}

const LIVE_EVENTS: LiveEvent[] = [
  { id: 'ev-1', flag: '🇨🇳', location: '中国 • 上海', action: '下载', material: '《SPARK ONE 项目介绍标准讲课课件 v2.3》', timeAgo: '刚刚 12 秒前' },
  { id: 'ev-2', flag: '🇰🇷', location: '韩国 • 首尔', action: '调阅', material: '《会员晋升与全球奖金激励计划 (韩文版)》', timeAgo: '26 秒前' },
  { id: 'ev-3', flag: '🇺🇸', location: '美国 • 加州', action: '查验', material: '《美国 FinCEN MSB 金融入驻合规牌照》', timeAgo: '45 秒前' },
  { id: 'ev-4', flag: '🇻🇳', location: '越南 • 河内', action: '下载', material: '《多语言线下易拉宝展架 80x200cm (越南文)》', timeAgo: '1 分钟前' },
  { id: 'ev-5', flag: '🇭🇰', location: '中国 • 香港', action: '调阅', material: '《全球数字财富深度解析白皮书 (中文繁体)》', timeAgo: '1 分钟前' },
  { id: 'ev-6', flag: '🇯🇵', location: '日本 • 东京', action: '下载', material: '《SPARK 3D立体金属徽标 4K UHD原图》', timeAgo: '2 分钟前' },
  { id: 'ev-7', flag: '🇹🇭', location: '泰国 • 曼谷', action: '查验', material: '《SPARK 全球官方品牌形象大片 (1080P Cinema)》', timeAgo: '3 分钟前' },
  { id: 'ev-8', flag: '🇮🇩', location: '印尼 • 雅加达', action: '调阅', material: '《SPARK 各国现场公益纪实相册合集》', timeAgo: '3 分钟前' },
  { id: 'ev-9', flag: '🇸🇬', location: '新加坡', action: '下载', material: '《SPARK UNION CAPITAL 美国政府公司注册执照》', timeAgo: '4 分钟前' },
];

export const RealtimeMetricsBanner: React.FC = () => {
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
              <span className="text-white font-['Space_Grotesk']">SPARK ECOSYSTEM</span>
              <span className="text-purple-400 font-mono text-[10px] hidden sm:inline">• 全网实时大盘数据</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-400">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>延时 16ms</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-purple-300">全球 28 国节点同步中</span>
          </div>
        </div>

        {/* 5 Core Metrics Grid (Horizontal Swipe on Mobile, 5 Columns on Desktop) */}
        <div className="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-1 px-1 sm:mx-0 sm:px-0">
          
          {/* 1. AI 量化策略胜率 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">AI量化24H胜率</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-emerald-400 flex items-baseline gap-1">
              <span>{liveWinRate}%</span>
              <span className="text-[10px] font-mono text-emerald-500/90 font-semibold">+0.18%</span>
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5 truncate">无损对冲策略执行</div>
          </div>

          {/* 2. 全球活跃节点 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">全球活跃节点</span>
              <Globe2 className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-white">
              1,280+
            </div>
            <div className="text-[9px] text-purple-300 mt-0.5 truncate">覆盖 28+ 国家与地区</div>
          </div>

          {/* 3. 资产管理规模 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">全球配置管理规模</span>
              <Zap className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-amber-300">
              $148.6M+
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5 truncate">多重签名冷热隔离</div>
          </div>

          {/* 4. 安全无事故运行 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">安全运行天数</span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-cyan-300">
              1,428 天
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5 truncate">100% 官方合约稳定</div>
          </div>

          {/* 5. 24H 物料极速下发量 */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] text-slate-400">24H 物料下发总量</span>
              <DownloadCloud className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-white">
              42,910 次
            </div>
            <div className="text-[9px] text-indigo-300 mt-0.5 truncate">全网吞吐 1.84 TB</div>
          </div>

        </div>

        {/* Bottom Activity Ticker: Live Material Access Stream */}
        <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-purple-500/15 flex items-center justify-between gap-2">
          
          {/* Left Live Badge */}
          <div className="flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-md bg-purple-600/30 border border-purple-400/40 text-[10px] font-mono text-purple-200">
            <Radio className="w-3 h-3 text-purple-300 animate-pulse" />
            <span className="font-bold">实时调取</span>
          </div>

          {/* Scrolling / Rotating Event Text */}
          <div className="flex-1 overflow-hidden">
            <div className={`transition-opacity duration-300 text-[11px] sm:text-xs text-slate-200 flex items-center gap-2 truncate ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}>
              <span className="text-sm shrink-0">{activeEvent.flag}</span>
              <span className="font-semibold text-purple-300 shrink-0">{activeEvent.location}</span>
              <span className="text-slate-400 shrink-0">刚刚{activeEvent.action}了</span>
              <span className="text-white font-medium truncate">{activeEvent.material}</span>
              <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-auto hidden sm:inline">
                {activeEvent.timeAgo}
              </span>
            </div>
          </div>

          {/* Right Action Hint */}
          <div className="shrink-0 text-[10px] font-mono text-slate-400 hidden md:flex items-center gap-0.5 hover:text-purple-300 transition-colors cursor-pointer">
            <span>实时广播</span>
            <ChevronRight className="w-3 h-3" />
          </div>

        </div>

      </div>

    </section>
  );
};
