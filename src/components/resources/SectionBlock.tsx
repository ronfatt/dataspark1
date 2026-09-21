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
    <section id={id} className="pt-8 pb-12 border-b border-purple-500/15 last:border-b-0 scroll-mt-28">
      
      {/* Section Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        
        {/* Title & Icon */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-600/30 to-indigo-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(124,58,237,0.25)]">
            <Icon className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                {title}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-600/20 text-purple-300 text-xs font-mono border border-purple-500/30">
                {count} 份物料
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Batch Download button for this Zone */}
        <button
          onClick={onBatchDownload}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#140e29] hover:bg-[#1f1540] border border-purple-500/30 text-xs font-semibold text-purple-300 hover:text-white transition-all shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <FolderArchive className="w-4 h-4 text-purple-400" />
          <span>打包下载本区 ({count} 个源文件)</span>
        </button>

      </div>

      {/* Grid Container */}
      <div>
        {children}
      </div>

    </section>
  );
};
