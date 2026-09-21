import React, { useState } from 'react';
import { 
  Download, 
  Eye, 
  Sparkles, 
  FileText, 
  Film, 
  Image as ImageIcon, 
  Archive,
  Clock,
  HardDrive,
  Camera,
  Play
} from 'lucide-react';
import type { ResourceItem } from '../../types/resource';

interface ZoneItemCardProps {
  item: ResourceItem;
  onPreview: (item: ResourceItem) => void;
  onDownload: (item: ResourceItem) => void;
}

export const ZoneItemCard: React.FC<ZoneItemCardProps> = ({
  item,
  onPreview,
  onDownload,
}) => {
  const [selectedEditionIndex, setSelectedEditionIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const hasEditions = Array.isArray(item.editions) && item.editions.length > 0;
  const currentEdition = hasEditions ? item.editions![selectedEditionIndex] : null;

  const activePreviewUrl = currentEdition ? currentEdition.previewUrl : item.previewUrl;
  const activeDownloadUrl = currentEdition ? currentEdition.downloadUrl : item.downloadUrl;
  const activeFileSize = currentEdition ? currentEdition.fileSize : item.fileSize;
  const activeFormatName = (currentEdition && currentEdition.fileFormatName) ? currentEdition.fileFormatName : item.fileFormatName;

  // Determine aspect ratio class based on zone
  const getAspectRatioClass = () => {
    switch (item.zone) {
      case 'marketing':
        return 'aspect-[3/4]';
      case 'videos':
        return 'aspect-video';
      case 'courseware':
        return 'aspect-[16/10]';
      case 'events':
        return 'aspect-[4/3]';
      case 'assets':
      default:
        return 'aspect-[4/3]';
    }
  };

  const getFormatIcon = () => {
    switch (item.fileType) {
      case 'video':
        return <Film className="w-3.5 h-3.5 text-amber-400" />;
      case 'pdf':
        return <FileText className="w-3.5 h-3.5 text-rose-400" />;
      case 'archive':
        return <Archive className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <ImageIcon className="w-3.5 h-3.5 text-purple-400" />;
    }
  };

  const handleDownloadClick = () => {
    const itemToDownload: ResourceItem = {
      ...item,
      downloadUrl: activeDownloadUrl,
      previewUrl: activePreviewUrl,
      fileSize: activeFileSize,
      fileFormatName: activeFormatName,
      title: currentEdition ? `${item.title} (${currentEdition.label}版)` : item.title,
    };
    onDownload(itemToDownload);
  };

  const handlePreviewClick = () => {
    const itemToPreview: ResourceItem = {
      ...item,
      downloadUrl: activeDownloadUrl,
      previewUrl: activePreviewUrl,
      fileSize: activeFileSize,
      fileFormatName: activeFormatName,
    };
    onPreview(itemToPreview);
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden metal-card flex flex-col justify-between transition-all duration-300">
      
      {/* Top Media Thumbnail Area */}
      <div>
        <div 
          className={`relative w-full ${getAspectRatioClass()} bg-black/60 overflow-hidden cursor-pointer`}
          onClick={handlePreviewClick}
        >
          {/* Loading Skeleton Shimmer */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 via-[#1b1338] to-purple-950/30 animate-pulse flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-purple-500/30 border-t-purple-400 rounded-full animate-spin" />
            </div>
          )}

          {/* Real Thumbnail Image */}
          <img 
            src={activePreviewUrl} 
            alt={item.title}
            className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ease-out ${
              imageLoaded ? 'opacity-90 group-hover:opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090614] via-transparent to-black/50 pointer-events-none" />

          {/* Video Play Button Overlay if Video */}
          {item.zone === 'videos' && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center border border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.7)] group-hover:scale-115 transition-transform duration-300">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>
            </div>
          )}

          {/* Hover Quick Preview Button */}
          <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-black/80 border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
              <Eye className="w-3.5 h-3.5 text-purple-400" />
              <span>全屏查验</span>
            </span>
          </div>

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
            
            {/* SubCategory Tag */}
            <div className="flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-purple-500/30 text-purple-300 text-[11px] font-semibold">
                {item.subCategory}
              </span>
            </div>

            {/* Format or Photo Count Pill */}
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-slate-200 text-[11px] font-mono">
              {item.photoCount ? (
                <>
                  <Camera className="w-3 h-3 text-emerald-400" />
                  <span>{item.photoCount} 张原图</span>
                </>
              ) : (
                <>
                  {getFormatIcon()}
                  <span>{activeFormatName}</span>
                </>
              )}
            </div>

          </div>

          {/* Bottom Indicators: Duration or Dimensions */}
          {(item.duration || item.dimensions) && (
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/85 text-[10px] text-slate-300 font-mono z-10 border border-white/10">
              {item.duration || item.dimensions}
            </div>
          )}
        </div>

        {/* Content Info */}
        <div className="p-3 sm:p-5">
          
          {/* Multi-language Edition Small Buttons (同一档案多语言切换) */}
          {hasEditions && item.editions!.length > 1 ? (
            <div className="flex items-center gap-1.5 mb-2 sm:mb-2.5 flex-wrap">
              <span className="text-[10px] text-slate-400 mr-0.5 font-medium">版本:</span>
              {item.editions!.map((ed, idx) => {
                const isSelected = idx === selectedEditionIndex;
                return (
                  <button
                    key={ed.language}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEditionIndex(idx);
                    }}
                    className={`min-h-[30px] px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 ${
                      isSelected
                        ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(124,58,237,0.7)] border border-purple-300/80 scale-[1.03]'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-purple-400/40'
                    }`}
                  >
                    <span>{ed.flag}</span>
                    <span>{ed.label}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Single language display if no editions */
            <div className="flex items-center gap-1 mb-1.5 sm:mb-2 flex-wrap">
              {item.languages.map((lang, idx) => (
                <span 
                  key={idx}
                  className="px-1.5 sm:px-2 py-0.2 rounded bg-purple-950/70 border border-purple-500/20 text-[9px] sm:text-[10px] text-purple-300 font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 
            className="text-xs sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-1 sm:mb-1.5 cursor-pointer leading-snug"
            onClick={handlePreviewClick}
            title={item.title}
          >
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2 leading-relaxed mb-2 sm:mb-3">
            {item.description}
          </p>

          {/* Specs: Size & Date */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pt-1.5 sm:pt-2 border-t border-purple-500/10 font-mono">
            <div className="flex items-center gap-1 truncate mr-1">
              <HardDrive className="w-3 h-3 text-purple-400/80 shrink-0" />
              <span className="truncate">{activeFileSize}</span>
              {currentEdition && (
                <span className="text-purple-300 text-[9px] sm:text-[10px] shrink-0">
                  ({currentEdition.label})
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>{item.updatedAt}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="p-2.5 sm:p-4 sm:px-5 sm:pb-5 pt-0 grid grid-cols-2 gap-1.5 sm:gap-2">
        <button
          onClick={handlePreviewClick}
          className="flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-2 sm:px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] sm:text-xs font-semibold text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span><span className="hidden sm:inline">查验</span>预览</span>
        </button>

        <button
          onClick={handleDownloadClick}
          className="flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-2 sm:px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[11px] sm:text-xs font-bold shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all active:scale-95 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 shrink-0" />
          <span><span className="hidden sm:inline">极速</span>下载</span>
        </button>
      </div>

    </div>
  );
};
