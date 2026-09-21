import React from 'react';
import { 
  Sparkles, 
  Search, 
  FileText, 
  Megaphone, 
  Film, 
  Camera, 
  Layers
} from 'lucide-react';

interface HeroBannerProps {
  totalAssets: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onQuickJump: (zoneId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  totalAssets,
  searchQuery,
  onSearchChange,
  onQuickJump,
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 sm:pt-10 sm:pb-14 border-b border-purple-500/15">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[400px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Hero Card with 3D Chrome Aesthetics */}
        <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 overflow-hidden metal-card">
          
          {/* Subtle Cyber Grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left w-full">
              
              {/* Slogan Pill */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400 animate-pulse" />
                <span>Global Vision • Intelligent Finance</span>
              </div>

              {/* Title with Chrome Gradient */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-2 sm:mb-4">
                <span className="chrome-text block">SPARK 官方物料数据库</span>
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl block mt-1">
                  全套设计资产 • 模块化分区归档
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-4 sm:mb-6 hidden sm:block">
                面向全球用户、代理商与合作伙伴的官方物料中心。汇集标准课件、海报长图、3D徽标与易拉宝、官方宣发视频及全球公益纪实相册。
                <strong className="text-purple-300 font-semibold block mt-1">
                  ⚡️ 全站物料免登录即开即下，支持多语言版本一键切换与批量打包。
                </strong>
              </p>

              {/* Mobile Concise Description */}
              <p className="text-slate-300 text-xs leading-relaxed mb-3 sm:hidden">
                官方物料数据库，课件、海报、3D标、宣发片及相册免登录即开即下。
              </p>

              {/* Quick Jump Chips (Scrollable on mobile) */}
              <div className="flex items-center justify-start lg:justify-start gap-1.5 sm:gap-2 mb-4 sm:mb-6 overflow-x-auto no-scrollbar py-1 -mx-2 px-2 sm:mx-0 sm:px-0">
                <span className="text-[11px] sm:text-xs text-slate-400 shrink-0 mr-0.5">直达:</span>
                <button
                  onClick={() => onQuickJump('courseware')}
                  className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-xs text-purple-300 hover:text-white transition-all flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-purple-400" />
                  <span>课件区</span>
                </button>
                <button
                  onClick={() => onQuickJump('marketing')}
                  className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-xs text-purple-300 hover:text-white transition-all flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer"
                >
                  <Megaphone className="w-3 h-3 text-purple-400" />
                  <span>市场宣传</span>
                </button>
                <button
                  onClick={() => onQuickJump('assets')}
                  className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-xs text-purple-300 hover:text-white transition-all flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span>素材专区</span>
                </button>
                <button
                  onClick={() => onQuickJump('videos')}
                  className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-xs text-purple-300 hover:text-white transition-all flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer"
                >
                  <Film className="w-3 h-3 text-purple-400" />
                  <span>视频专区</span>
                </button>
                <button
                  onClick={() => onQuickJump('events')}
                  className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-xs text-purple-300 hover:text-white transition-all flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer"
                >
                  <Camera className="w-3 h-3 text-purple-400" />
                  <span>活动照片区</span>
                </button>
              </div>

              {/* Stat Counters (Compact on mobile) */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-xl">
                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-white">
                    {totalAssets}+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">收录物料</div>
                </div>

                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-purple-300">
                    5 大专区
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">精准归档</div>
                </div>

                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-emerald-400">
                    多语言
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">单卡即切</div>
                </div>

                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <div className="text-base sm:text-xl font-black font-['Space_Grotesk'] text-amber-300">
                    免登录
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">极速下载</div>
                </div>
              </div>

            </div>

            {/* Right Hero Showcase: 3D Chrome Logo Display (Desktop and Large Tablet Only) */}
            <div className="hidden lg:flex w-auto flex-col items-center justify-center shrink-0">
              <div className="relative group p-1.5 rounded-3xl bg-gradient-to-b from-white/30 via-purple-500/30 to-purple-900/50 shadow-[0_0_50px_rgba(124,58,237,0.35)] hover:shadow-[0_0_70px_rgba(168,85,247,0.55)] transition-all duration-500">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[22px] overflow-hidden bg-black flex items-center justify-center p-3">
                  <img 
                    src="/brand/spark_3d_metal_logo.jpg" 
                    alt="Spark 3D Chrome Emblem"
                    className="w-full h-full object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                      <span className="text-xs font-semibold text-white tracking-wide">3D 金属立体标</span>
                    </div>
                    <span className="text-[10px] text-purple-300 font-mono">4096px UHD</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
