import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/layout/Navbar';
import { HeroBanner } from './components/layout/HeroBanner';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { RealtimeMetricsBanner } from './components/layout/RealtimeMetricsBanner';
import { ZoneNavBar } from './components/resources/ZoneNavBar';
import { ZoneItemCard } from './components/resources/ZoneItemCard';
import { SectionBlock } from './components/resources/SectionBlock';
import { PreviewModal } from './components/resources/PreviewModal';
import { INITIAL_RESOURCES } from './data/initialAssets';
import { fetchCompletedProjects, subscribeToCompletedProjects } from './services/syncService';
import { I18nProvider, useI18n } from './i18n/I18nContext';
import type { 
  ResourceItem, 
  ZoneType, 
  SupportedLanguage, 
  FileFormat, 
  SortOption 
} from './types/resource';
import { 
  FileText, 
  Megaphone, 
  Sparkles, 
  Film, 
  Camera, 
  Search, 
  CheckCircle2, 
  Bell
} from 'lucide-react';

export const AppContent: React.FC = () => {
  const { t, currentLanguage, setLanguage } = useI18n();
  const [resources, setResources] = useState<ResourceItem[]>(INITIAL_RESOURCES);
  const [searchQuery, setSearchQuery] = useState('');
  const selectedLanguage = currentLanguage;
  const setSelectedLanguage = setLanguage;
  const [activeZone, setActiveZone] = useState<ZoneType | 'all'>('all');
  const [selectedFormat, setSelectedFormat] = useState<FileFormat | 'All'>('All');
  const [selectedSort, setSelectedSort] = useState<SortOption>('latest');
  
  // Modal & Toast states
  const [previewItem, setPreviewItem] = useState<ResourceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<{ title: string; desc: string; type?: 'info' | 'success' | 'new' } | null>(null);

  // 1. Initial load & Supabase Realtime Sync
  useEffect(() => {
    fetchCompletedProjects().then((completedItems) => {
      if (completedItems.length > 0) {
        setResources(prev => {
          const existingIds = new Set(prev.map(r => r.id));
          const newItems = completedItems.filter(item => !existingIds.has(item.id));
          return [...newItems, ...prev];
        });
      }
    });

    const unsubscribe = subscribeToCompletedProjects((newDeliveries) => {
      if (newDeliveries.length > 0) {
        setResources(prev => {
          const existingIds = new Set(prev.map(r => r.id));
          const toAdd = newDeliveries.filter(item => !existingIds.has(item.id));
          return [...toAdd, ...prev];
        });

        setToastMessage({
          title: '⚡️ 实时上架：新物料已归档！',
          desc: `《${newDeliveries[0].title}》已自动归入对应专区。`,
          type: 'new'
        });

        try {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.1 }
          });
        } catch {
          // ignore
        }

        setTimeout(() => setToastMessage(null), 4000);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // 2. Zone Counts
  const zoneCounts = useMemo(() => {
    const counts: Record<string, number> = {
      courseware: 0,
      marketing: 0,
      assets: 0,
      videos: 0,
      events: 0,
    };
    resources.forEach(item => {
      if (counts[item.zone] !== undefined) {
        counts[item.zone] += 1;
      }
    });
    return counts;
  }, [resources]);

  // 3. Filtered Items
  const filteredResources = useMemo(() => {
    return resources.filter(item => {
      // Zone filter
      if (activeZone !== 'all') {
        if (item.zone !== activeZone) {
          return false;
        }
      }

      // Language filter
      if (selectedLanguage !== 'All') {
        const matchesLang = item.languages.some(lang => {
          if (lang === selectedLanguage) return true;
          if ((selectedLanguage === '中文简体' || selectedLanguage === '中文') && (lang === '中文简体' || lang === '中文')) return true;
          if (selectedLanguage === '中文繁体' && lang === '中文繁体') return true;
          if ((selectedLanguage === '英文' || selectedLanguage === '英语') && (lang === '英文' || lang === '英语')) return true;
          if ((selectedLanguage === '韩文' || selectedLanguage === '韩语') && (lang === '韩文' || lang === '韩语')) return true;
          if ((selectedLanguage === '日文' || selectedLanguage === '日语') && (lang === '日文' || lang === '日语')) return true;
          if ((selectedLanguage === '泰文' || selectedLanguage === '泰语') && (lang === '泰文' || lang === '泰语')) return true;
          if ((selectedLanguage === '越南文' || selectedLanguage === '越南语') && (lang === '越南文' || lang === '越南语')) return true;
          if ((selectedLanguage === '印尼文' || selectedLanguage === '印尼语') && (lang === '印尼文' || lang === '印尼语')) return true;
          return false;
        });
        if (!matchesLang) return false;
      }

      // Format filter
      if (selectedFormat !== 'All') {
        if (item.fileType !== selectedFormat) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchSub = item.subCategory.toLowerCase().includes(q);
        const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchSub && !matchTags) return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === 'latest') {
        return b.updatedAt.localeCompare(a.updatedAt);
      }
      if (selectedSort === 'popular') {
        return b.downloadsCount - a.downloadsCount;
      }
      if (selectedSort === 'size') {
        return parseFloat(b.fileSize) - parseFloat(a.fileSize);
      }
      return 0;
    });
  }, [resources, activeZone, selectedLanguage, selectedFormat, searchQuery, selectedSort]);

  // Group items by zone for structured rendering
  const coursewareItems = useMemo(() => filteredResources.filter(r => r.zone === 'courseware'), [filteredResources]);
  const marketingItems = useMemo(() => filteredResources.filter(r => r.zone === 'marketing'), [filteredResources]);
  const assetsItems = useMemo(() => filteredResources.filter(r => r.zone === 'assets'), [filteredResources]);
  const videoItems = useMemo(() => filteredResources.filter(r => r.zone === 'videos'), [filteredResources]);
  const eventItems = useMemo(() => filteredResources.filter(r => r.zone === 'events'), [filteredResources]);

  // 4. Download Handlers
  const handleDownload = (item: ResourceItem) => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85 }
      });
    } catch {
      // ignore
    }

    setToastMessage({
      title: t.toast.preparingDownload,
      desc: t.toast.preparingDesc.replace('{title}', item.title),
      type: 'info'
    });

    const link = document.createElement('a');
    link.href = item.downloadUrl;
    link.download = item.title;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setResources(prev => prev.map(r => r.id === item.id ? { ...r, downloadsCount: r.downloadsCount + 1 } : r));

    setTimeout(() => {
      setToastMessage({
        title: t.toast.downloadStarted,
        desc: t.toast.downloadStartedDesc.replace('{title}', item.title),
        type: 'success'
      });
      setTimeout(() => setToastMessage(null), 3000);
    }, 1000);
  };

  const handleBatchDownload = (zoneName: string, itemsCount: number) => {
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {
      // ignore
    }

    setToastMessage({
      title: t.toast.batchPackaging.replace('{zone}', zoneName),
      desc: t.toast.batchPackagingDesc.replace('{count}', String(itemsCount)),
      type: 'info'
    });

    setTimeout(() => {
      setToastMessage({
        title: t.toast.batchReady,
        desc: t.toast.batchReadyDesc.replace('{zone}', zoneName),
        type: 'success'
      });
      setTimeout(() => setToastMessage(null), 4000);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#07050d] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white relative">
      
      {/* Background ambient mesh */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-950/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-10 w-[700px] h-[500px] bg-indigo-950/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Floating Toast Notification (Centered & elevated on mobile) */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-6 inset-x-3 md:inset-x-auto md:right-6 z-50 max-w-md mx-auto md:mx-0 p-3 sm:p-4 rounded-2xl bg-[#120d24]/95 border border-purple-500/40 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(124,58,237,0.3)] animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3">
          <div className={`p-2 rounded-xl shrink-0 ${
            toastMessage.type === 'new' 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse' 
              : toastMessage.type === 'success'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
          }`}>
            {toastMessage.type === 'new' ? <Bell className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
          </div>
          <div className="flex-1">
            <h5 className="text-sm font-bold text-white mb-0.5">{toastMessage.title}</h5>
            <p className="text-xs text-slate-300 leading-relaxed">{toastMessage.desc}</p>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white text-xs px-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={resources.length}
      />

      {/* Hero Banner */}
      <HeroBanner
        totalAssets={resources.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onQuickJump={(zId) => {
          setActiveZone(zId as any);
          const el = document.getElementById(`zone-${zId}`);
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 110;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
      />

      {/* Real-time Ecosystem & Quant Metrics Banner + Live Download Activity Ticker */}
      <RealtimeMetricsBanner />

      {/* Sticky Zone Nav Bar */}
      <ZoneNavBar
        activeZone={activeZone}
        onSelectZone={setActiveZone}
        zoneCounts={zoneCounts}
        selectedFormat={selectedFormat}
        onSelectFormat={setSelectedFormat}
      />

      {/* Main Zones Container (pb-24 on mobile to give room for MobileBottomBar) */}
      <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 w-full pb-24 md:pb-10">

        {/* Search Query View */}
        {searchQuery.trim() ? (
          <div className="pt-2 sm:pt-4">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h2 className="text-lg sm:text-2xl font-black text-white">
                  {t.search.resultsTitle}: “{searchQuery}”
                </h2>
                <p className="text-xs text-slate-400 mt-0.5 sm:mt-1">
                  {t.search.resultsCount.replace('{count}', String(filteredResources.length))}
                </p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 active:scale-95 cursor-pointer"
              >
                {t.search.clearSearch}
              </button>
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                {filteredResources.map(item => (
                  <ZoneItemCard
                    key={item.id}
                    item={item}
                    onPreview={setPreviewItem}
                    onDownload={handleDownload}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 sm:p-12 text-center rounded-3xl metal-card max-w-md mx-auto my-8 sm:my-12">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mx-auto mb-3" />
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">{t.search.noResults}</h3>
                <p className="text-xs text-slate-400">{t.search.noResultsDesc}</p>
              </div>
            )}
          </div>
        ) : (
          /* 5 Dedicated Aligned Sections */
          <div className="space-y-2 sm:space-y-4">

            {/* 1. 课件区 (项目介绍，金融简介) */}
            {(activeZone === 'all' || activeZone === 'courseware') && (
              <SectionBlock
                id="zone-courseware"
                icon={FileText}
                title={t.zones.courseware}
                subtitle={t.zones.coursewareSub}
                count={coursewareItems.length}
                onBatchDownload={() => handleBatchDownload(t.zones.courseware, coursewareItems.length)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {coursewareItems.map(item => (
                    <ZoneItemCard
                      key={item.id}
                      item={item}
                      onPreview={setPreviewItem}
                      onDownload={handleDownload}
                    />
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* 2. 市场宣传 (各种海报，长图) */}
            {(activeZone === 'all' || activeZone === 'marketing') && (
              <SectionBlock
                id="zone-marketing"
                icon={Megaphone}
                title={t.zones.marketing}
                subtitle={t.zones.marketingSub}
                count={marketingItems.length}
                onBatchDownload={() => handleBatchDownload(t.zones.marketing, marketingItems.length)}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                  {marketingItems.map(item => (
                    <ZoneItemCard
                      key={item.id}
                      item={item}
                      onPreview={setPreviewItem}
                      onDownload={handleDownload}
                    />
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* 3. 素材 (logo, 易拉宝, 执照) */}
            {(activeZone === 'all' || activeZone === 'assets') && (
              <SectionBlock
                id="zone-assets"
                icon={Sparkles}
                title={t.zones.assets}
                subtitle={t.zones.assetsSub}
                count={assetsItems.length}
                onBatchDownload={() => handleBatchDownload(t.zones.assets, assetsItems.length)}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                  {assetsItems.map(item => (
                    <ZoneItemCard
                      key={item.id}
                      item={item}
                      onPreview={setPreviewItem}
                      onDownload={handleDownload}
                    />
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* 4. 视频区 (分类项目宣传片，活动片，公益片) */}
            {(activeZone === 'all' || activeZone === 'videos') && (
              <SectionBlock
                id="zone-videos"
                icon={Film}
                title={t.zones.videos}
                subtitle={t.zones.videosSub}
                count={videoItems.length}
                onBatchDownload={() => handleBatchDownload(t.zones.videos, videoItems.length)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {videoItems.map(item => (
                    <ZoneItemCard
                      key={item.id}
                      item={item}
                      onPreview={setPreviewItem}
                      onDownload={handleDownload}
                    />
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* 5. 活动照片区 (各国公益相册合集) */}
            {(activeZone === 'all' || activeZone === 'events') && (
              <SectionBlock
                id="zone-events"
                icon={Camera}
                title={t.zones.events}
                subtitle={t.zones.eventsSub}
                count={eventItems.length}
                onBatchDownload={() => handleBatchDownload(t.zones.events, eventItems.length)}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                  {eventItems.map(item => (
                    <ZoneItemCard
                      key={item.id}
                      item={item}
                      onPreview={setPreviewItem}
                      onDownload={handleDownload}
                    />
                  ))}
                </div>
              </SectionBlock>
            )}

          </div>
        )}

      </main>

      {/* Mobile Floating Bottom Navigation Dock */}
      <MobileBottomBar
        activeZone={activeZone}
        onSelectZone={setActiveZone}
      />

      {/* Footer */}
      <Footer />

      {/* Preview Modal */}
      <PreviewModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
        onDownload={handleDownload}
      />

    </div>
  );
};

export const App: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage | 'All'>('All');

  return (
    <I18nProvider currentLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage}>
      <AppContent />
    </I18nProvider>
  );
};

export default App;

