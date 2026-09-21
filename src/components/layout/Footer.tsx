import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-purple-500/20 bg-[#06040a] relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/brand/Spark_PurpleBlack_Metal.png" 
                alt="Spark Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-black chrome-text font-['Space_Grotesk']">
                SPARK UNION CAPITAL INC.
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              GLOBAL VISION • INTELLIGENT FINANCE • A BETTER TOMORROW
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              SPARK UNION CAPITAL 官方设计资产与全球宣发物料数据库
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
              title="返回顶部"
            >
              <span>返回顶部</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            © 2026 SPARK UNION CAPITAL INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>MSB 官方合规认证编号备案</span>
            <span>•</span>
            <span className="text-emerald-400/90 font-mono">SUPABASE REALTIME CONNECTED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
