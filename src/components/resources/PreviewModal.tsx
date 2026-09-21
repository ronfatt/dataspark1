import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Share2, 
  Check, 
  ExternalLink, 
  FileText, 
  Film, 
  Sparkles, 
  ShieldAlert, 
  HardDrive, 
  Clock, 
  Layers,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import type { ResourceItem } from '../../types/resource';

interface PreviewModalProps {
  item: ResourceItem | null;
  onClose: () => void;
  onDownload: (item: ResourceItem) => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  item,
  onClose,
  onDownload,
}) => {
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!item) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + item.downloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#0c0919] border border-purple-500/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.3)] flex flex-col lg:flex-row">
        
        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-slate-300 hover:text-white border border-white/20 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Media Preview Stage */}
        <div className="flex-1 bg-black/70 flex flex-col items-center justify-center p-4 sm:p-8 relative min-h-[300px] lg:min-h-[500px] overflow-hidden border-b lg:border-b-0 lg:border-r border-purple-500/20">
          
          {/* Zoom controls for image */}
          {item.fileType === 'image' && (
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1 p-1 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
              <button 
                onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.2))}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-300"
                title="缩小"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono px-1.5 text-slate-300">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button 
                onClick={() => setZoomLevel(prev => Math.min(2.5, prev + 0.2))}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-300"
                title="放大"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setZoomLevel(1)}
                className="text-[10px] px-2 py-1 hover:bg-white/10 rounded-lg text-purple-300 font-medium"
              >
                重置
              </button>
            </div>
          )}

          {/* Actual Media */}
          {item.fileType === 'image' ? (
            <div className="w-full h-full flex items-center justify-center overflow-auto p-2">
              <img
                src={item.previewUrl}
                alt={item.title}
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-200"
              />
            </div>
          ) : item.fileType === 'video' ? (
            <div className="w-full flex flex-col items-center justify-center">
              <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden bg-black border border-purple-500/30 shadow-2xl">
                <img 
                  src={item.previewUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600/90 border border-purple-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.8)] mb-3">
                    <Film className="w-8 h-8 ml-0.5" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <span className="text-xs text-purple-300">支持 1080P/4K 高清原画播放与下载</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-8 max-w-md">
              <div className="w-20 h-20 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] mb-4">
                <FileText className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-slate-400 mb-4">{item.description}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-purple-300">
                <span>格式：{item.fileFormatName}</span>
                <span>•</span>
                <span>大小：{item.fileSize}</span>
              </div>
            </div>
          )}

          {/* Delivery Source Tag if automatic */}
          {item.isNewDelivery && (
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>设计交付中心自动结项同步 • 编号 {item.deliveryProjectId}</span>
            </div>
          )}

        </div>

        {/* Right Side: Details & Action Sidebar */}
        <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#0f0a1d]">
          
          <div className="space-y-6">
            
            {/* Category & Status */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-purple-600/25 border border-purple-400/40 text-purple-300 text-xs font-semibold">
                {item.subCategory}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {item.downloadsCount} 次下载查验
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h2 className="text-xl font-bold text-white mb-2 leading-snug">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-black/40 border border-purple-500/15 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px]">文件格式</span>
                <span className="text-white font-semibold">{item.fileFormatName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">文件体积</span>
                <span className="text-white font-semibold">{item.fileSize}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">更新日期</span>
                <span className="text-white font-semibold">{item.updatedAt}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">适用市场</span>
                <span className="text-purple-300 font-semibold">{item.languages.join(', ')}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Usage Notice */}
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-400 leading-relaxed">
                官方物料使用规范：仅限 Spark 授权合伙人、渠道及活动团队正规宣传使用，严禁篡改主视觉或遮挡 Logo。
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-6 mt-6 border-t border-purple-500/15 space-y-2.5">
            <button
              onClick={() => onDownload(item)}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>立即下载完整源文件 ({item.fileSize})</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">直链已复制到剪贴板</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-purple-400" />
                  <span>复制物料分享直链</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
