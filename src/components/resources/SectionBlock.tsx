import React from 'react';
import { FolderArchive, ArrowRight } from 'lucide-react';

interface SectionBlockProps {
  id: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  subtitle: string;
  count: number;
  onBatchDownload: () => void;
  children: React.ReactNode;
}

export const SectionBlock: React.FC<SectionBlockProps> = ({
  id,
  icon: Icon,
  title,
  subtitle,
  count,
  onBatchDownload,
  children,
}) => {
  if (count === 0) return null;

  return (
    <section id={id} className="pt-4 pb-8 sm:pt-8 sm:pb-12 border-b border-purple-500/15 last:border-b-0 scroll-mt-20 sm:scroll-mt-28">
      
      {/* Section Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        
        {/* Title & Icon */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-600/30 to-indigo-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(124,58,237,0.25)] shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <h2 className="text-base sm:text-2xl font-black text-white tracking-wide">
                {title}
              </h2>
              <span className="px-2 py-0.2 sm:px-2.5 sm:py-0.5 rounded-full bg-purple-600/20 text-purple-300 text-[10px] sm:text-xs font-mono border border-purple-500/30">
                {count} 份物料
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Batch Download button for this Zone */}
        <button
          onClick={onBatchDownload}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#140e29] hover:bg-[#1f1540] border border-purple-500/30 text-[11px] sm:text-xs font-semibold text-purple-300 hover:text-white transition-all shadow-sm cursor-pointer self-start sm:self-auto active:scale-95"
        >
          <FolderArchive className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
          <span>打包本区 ({count} 个源文件)</span>
        </button>

      </div>

      {/* Grid Container */}
      <div>
        {children}
      </div>

    </section>
  );
};
