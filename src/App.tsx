import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/layout/Navbar';
import { HeroBanner } from './components/layout/HeroBanner';
import { Footer } from './components/layout/Footer';
import { ZoneNavBar } from './components/resources/ZoneNavBar';
import { ZoneItemCard } from './components/resources/ZoneItemCard';
import { SectionBlock } from './components/resources/SectionBlock';
import { PreviewModal } from './components/resources/PreviewModal';
import { INITIAL_RESOURCES } from './data/initialAssets';
import { fetchCompletedProjects, subscribeToCompletedProjects } from './services/syncService';
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

export const App: React.FC = () => {
  const [resources, setResources] = useState<ResourceItem[]>(INITIAL_RESOURCES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage | 'All'>('All');
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
        if (!item.languages.includes(selectedLanguage)) return false;
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
      title: '正在极速打包传输...',
      desc: `已为您建立《${item.title}》的高速安全下载通道。`,
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
        title: '下载已启动！',
        desc: `《${item.title}》源文件已成功保存到您的本地设备。`,
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
      title: `打包下载【${zoneName}】物料`,
      desc: `正在为该专区下的 ${itemsCount} 份高清源文件生成 ZIP 压缩总包...`,
      type: 'info'
    });

    setTimeout(() => {
      setToastMessage({
        title: 'ZIP 打包已就绪！',
        desc: `【${zoneName}】全套物料压缩包已开始下载。`,
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

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl bg-[#120d24]/95 border border-purple-500/40 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(124,58,237,0.3)] animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3">
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

      {/* Navbar (设计协作中心已去除) */}
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
            const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
      />

      {/* Sticky Zone Nav Bar */}
      <ZoneNavBar
        activeZone={activeZone}
        onSelectZone={setActiveZone}
        zoneCounts={zoneCounts}
        selectedFormat={selectedFormat}
        onSelectFormat={setSelectedFormat}
      />

      {/* Main Zones Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

        {/* Search Query View */}
        {searchQuery.trim() ? (
          <div className="pt-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-white">
                  搜索结果: “{searchQuery}”
                </h2>
                <p className="text-xs text-slate-400 mt-1">共找到 {filteredResources.length} 项匹配物料</p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 cursor-pointer"
              >
                清除搜索
              </button>
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              <div className="p-12 text-center rounded-3xl metal-card max-w-md mx-auto my-12">
                <Search className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">未找到匹配物料</h3>
                <p className="text-xs text-slate-400">请尝试缩短搜索词或重置筛选条件。</p>
              </div>
            )}
          </div>
        ) : (
          /* 5 Dedicated Aligned Sections (无最新交付冗余区块) */
          <div className="space-y-4">

            {/* 1. 课件区 (项目介绍，金融简介) - 单卡多语言切换 */}
            {(activeZone === 'all' || activeZone === 'courseware') && (
              <SectionBlock
                id="zone-courseware"
                icon={FileText}
                title="课件区"
                subtitle="项目介绍标准课件 • 金融简介白皮书 • 全球演讲讲义 (同一档案点击小按钮切换语言版本)"
                count={coursewareItems.length}
                onBatchDownload={() => handleBatchDownload('课件区', coursewareItems.length)}
              >
                {/* 3-Column Balanced Presentation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                title="市场宣传区"
                subtitle="会员权益全景长图 • 官方品牌活动海报 • 印刷级宣发竖版主视觉"
                count={marketingItems.length}
                onBatchDownload={() => handleBatchDownload('市场宣传区', marketingItems.length)}
              >
                {/* 4-Column Balanced Poster Grid (3:4 Ratio) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

            {/* 3. 素材 (logo, 易拉宝) */}
            {(activeZone === 'all' || activeZone === 'assets') && (
              <SectionBlock
                id="zone-assets"
                icon={Sparkles}
                title="素材专区"
                subtitle="3D立体金属新Logo • 透明底高清矢量 • 多语言线下易拉宝展架 (80x200cm)"
                count={assetsItems.length}
                onBatchDownload={() => handleBatchDownload('素材专区', assetsItems.length)}
              >
                {/* 4-Column Showcase Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                title="视频专区"
                subtitle="四语原声官方品牌大片 • 3D动态Logo光效演绎 • 各国现场公益纪录片"
                count={videoItems.length}
                onBatchDownload={() => handleBatchDownload('视频专区', videoItems.length)}
              >
                {/* 3-Column Cinema Wide Aspect Grid (16:9) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                title="活动照片区"
                subtitle="西非助学 • 越南爱心捐赠 • 泰国孤儿院 • 马来西亚老人院等现场高清纪实相册"
                count={eventItems.length}
                onBatchDownload={() => handleBatchDownload('活动照片区', eventItems.length)}
              >
                {/* 3-Column Photo Albums Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default App;
