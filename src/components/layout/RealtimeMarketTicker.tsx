import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  Coins, 
  Flame, 
  BarChart3, 
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw
} from 'lucide-react';
import { useI18n } from '../../i18n/I18nContext';

export type AssetCategory = 'all' | 'crypto' | 'gold' | 'stocks' | 'tokens';

export interface MarketAsset {
  symbol: string;
  name: string;
  category: 'crypto' | 'gold' | 'stocks' | 'tokens';
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume: string;
  prefix?: string;
  suffix?: string;
  tag?: string;
  iconBg: string;
}

const INITIAL_ASSETS: MarketAsset[] = [
  // 1. 区块链主流币
  {
    symbol: 'BTC/USDT',
    name: 'Bitcoin',
    category: 'crypto',
    price: 94820.50,
    change24h: +3.28,
    high24h: 95400.00,
    low24h: 91800.00,
    volume: '$42.8B',
    prefix: '$',
    tag: 'Layer 1',
    iconBg: 'from-amber-500/20 to-orange-600/30 text-amber-400 border-amber-500/30'
  },
  {
    symbol: 'ETH/USDT',
    name: 'Ethereum',
    category: 'crypto',
    price: 3418.80,
    change24h: +2.15,
    high24h: 3460.00,
    low24h: 3310.00,
    volume: '$19.4B',
    prefix: '$',
    tag: 'Smart Contract',
    iconBg: 'from-purple-500/20 to-indigo-600/30 text-purple-300 border-purple-500/30'
  },
  {
    symbol: 'SOL/USDT',
    name: 'Solana',
    category: 'crypto',
    price: 216.45,
    change24h: +5.82,
    high24h: 222.00,
    low24h: 202.50,
    volume: '$8.2B',
    prefix: '$',
    tag: 'High Speed L1',
    iconBg: 'from-emerald-500/20 to-teal-600/30 text-emerald-400 border-emerald-500/30'
  },
  {
    symbol: 'BNB/USDT',
    name: 'BNB Chain',
    category: 'crypto',
    price: 668.30,
    change24h: +1.45,
    high24h: 675.00,
    low24h: 652.00,
    volume: '$2.1B',
    prefix: '$',
    tag: 'Exchange / L1',
    iconBg: 'from-yellow-500/20 to-amber-600/30 text-yellow-300 border-yellow-500/30'
  },
  {
    symbol: 'XRP/USDT',
    name: 'Ripple',
    category: 'crypto',
    price: 1.842,
    change24h: +4.10,
    high24h: 1.910,
    low24h: 1.760,
    volume: '$3.9B',
    prefix: '$',
    tag: 'Payment Network',
    iconBg: 'from-blue-500/20 to-cyan-600/30 text-cyan-300 border-cyan-500/30'
  },

  // 2. 黄金相关与大宗商品
  {
    symbol: 'XAU/USD',
    name: 'Spot Gold 现货黄金',
    category: 'gold',
    price: 2748.60,
    change24h: +0.86,
    high24h: 2758.40,
    low24h: 2726.00,
    volume: '$86.5B',
    prefix: '$',
    suffix: '/oz',
    tag: 'Physical Gold',
    iconBg: 'from-amber-400/20 to-yellow-600/30 text-amber-300 border-amber-400/30'
  },
  {
    symbol: 'PAXG/USDT',
    name: 'PAX Gold 实物代币',
    category: 'gold',
    price: 2746.20,
    change24h: +0.84,
    high24h: 2755.00,
    low24h: 2724.00,
    volume: '$48.2M',
    prefix: '$',
    tag: 'RWA Token',
    iconBg: 'from-yellow-400/20 to-amber-500/30 text-yellow-200 border-yellow-400/30'
  },
  {
    symbol: 'GLD (ETF)',
    name: 'SPDR Gold Shares',
    category: 'gold',
    price: 252.35,
    change24h: +0.78,
    high24h: 253.20,
    low24h: 250.80,
    volume: '$1.4B',
    prefix: '$',
    tag: 'NYSE Arca',
    iconBg: 'from-amber-500/20 to-yellow-600/30 text-amber-400 border-amber-500/30'
  },
  {
    symbol: 'NEM (Gold)',
    name: 'Newmont 纽蒙特矿业',
    category: 'gold',
    price: 49.80,
    change24h: +1.92,
    high24h: 50.45,
    low24h: 48.60,
    volume: '$310M',
    prefix: '$',
    tag: 'Mining Leader',
    iconBg: 'from-orange-400/20 to-amber-600/30 text-orange-300 border-orange-400/30'
  },

  // 3. 美股常见股票走势
  {
    symbol: 'NVDA',
    name: 'NVIDIA 英伟达',
    category: 'stocks',
    price: 138.25,
    change24h: +2.85,
    high24h: 140.10,
    low24h: 134.50,
    volume: '$32.4B',
    prefix: '$',
    tag: 'AI Compute',
    iconBg: 'from-emerald-500/20 to-green-600/30 text-emerald-300 border-emerald-500/30'
  },
  {
    symbol: 'AAPL',
    name: 'Apple 苹果',
    category: 'stocks',
    price: 236.40,
    change24h: +0.94,
    high24h: 238.00,
    low24h: 234.20,
    volume: '$14.2B',
    prefix: '$',
    tag: 'Consumer Tech',
    iconBg: 'from-slate-400/20 to-slate-600/30 text-slate-200 border-slate-400/30'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla 特斯拉',
    category: 'stocks',
    price: 248.60,
    change24h: +4.62,
    high24h: 254.00,
    low24h: 238.10,
    volume: '$22.8B',
    prefix: '$',
    tag: 'EV & Robotics',
    iconBg: 'from-rose-500/20 to-red-600/30 text-rose-300 border-rose-500/30'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft 微软',
    category: 'stocks',
    price: 432.10,
    change24h: +1.28,
    high24h: 435.50,
    low24h: 428.00,
    volume: '$11.6B',
    prefix: '$',
    tag: 'Cloud & AI',
    iconBg: 'from-blue-500/20 to-indigo-600/30 text-blue-300 border-blue-500/30'
  },
  {
    symbol: 'COIN',
    name: 'Coinbase Global',
    category: 'stocks',
    price: 312.80,
    change24h: +6.45,
    high24h: 320.00,
    low24h: 292.00,
    volume: '$3.8B',
    prefix: '$',
    tag: 'Crypto Exchange',
    iconBg: 'from-indigo-500/20 to-purple-600/30 text-indigo-300 border-indigo-500/30'
  },

  // 4. 生态代币 & RWA 创新
  {
    symbol: 'SPARK/USDT',
    name: 'Spark Ecosystem Index',
    category: 'tokens',
    price: 3.485,
    change24h: +8.94,
    high24h: 3.620,
    low24h: 3.120,
    volume: '$18.6M',
    prefix: '$',
    tag: 'Eco Gov Token',
    iconBg: 'from-purple-600/30 to-fuchsia-600/40 text-purple-200 border-purple-400/40'
  },
  {
    symbol: 'UC-YIELD',
    name: 'Union Capital Quant Fund',
    category: 'tokens',
    price: 1.284,
    change24h: +1.18,
    high24h: 1.290,
    low24h: 1.272,
    volume: '$9.4M',
    prefix: '$',
    tag: 'Arbitrage Vault',
    iconBg: 'from-cyan-500/20 to-blue-600/30 text-cyan-300 border-cyan-500/30'
  },
];

export const RealtimeMarketTicker: React.FC = () => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<AssetCategory>('all');
  const [assets, setAssets] = useState<MarketAsset[]>(INITIAL_ASSETS);
  const [flashingSymbols, setFlashingSymbols] = useState<Record<string, 'up' | 'down'>>({});

  // Simulate ultra-smooth real-time tick movements
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 2-3 random assets to tick
      const count = Math.floor(Math.random() * 2) + 2;
      const updatedFlash: Record<string, 'up' | 'down'> = {};

      setAssets(prev => {
        return prev.map(asset => {
          if (Math.random() > 0.45) return asset; // Only randomly tick some assets

          // Dynamic random delta (-0.2% to +0.25%)
          const pct = (Math.random() * 0.45 - 0.20) / 100;
          const newPrice = +(asset.price * (1 + pct)).toFixed(
            asset.price > 1000 ? 2 : asset.price > 10 ? 2 : 4
          );
          const dir: 'up' | 'down' = newPrice >= asset.price ? 'up' : 'down';
          updatedFlash[asset.symbol] = dir;

          const newChange = +(asset.change24h + (pct * 10)).toFixed(2);
          const newHigh = Math.max(asset.high24h, newPrice);
          const newLow = Math.min(asset.low24h, newPrice);

          return {
            ...asset,
            price: newPrice,
            change24h: newChange,
            high24h: newHigh,
            low24h: newLow
          };
        });
      });

      setFlashingSymbols(updatedFlash);
      setTimeout(() => setFlashingSymbols({}), 800);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const filteredAssets = assets.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-purple-500/15">
      
      {/* Title & Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
        
        {/* Left Title & Status */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500/20 via-purple-600/30 to-indigo-600/20 border border-purple-400/30 text-purple-300">
            <BarChart3 className="w-3.5 h-3.5 text-purple-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {t.metrics.marketTitle}
              </h4>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>{t.metrics.realtimeUpdate}</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block">
              {t.metrics.marketSubtitle}
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 -mx-1 px-1 sm:mx-0 sm:px-0">
          {[
            { id: 'all' as const, label: t.metrics.tabAll },
            { id: 'crypto' as const, label: t.metrics.tabCrypto },
            { id: 'gold' as const, label: t.metrics.tabGoldCommodity },
            { id: 'stocks' as const, label: t.metrics.tabUsStocks },
            { id: 'tokens' as const, label: t.metrics.tabTokens },
          ].map(tab => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-purple-600 text-white font-bold shadow-[0_0_12px_rgba(124,58,237,0.5)] border border-purple-400/50'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Horizontal Scrollable Realtime Asset Cards */}
      <div className="flex gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1 sm:mx-0 sm:px-0">
        {filteredAssets.map(asset => {
          const isUp = asset.change24h >= 0;
          const flash = flashingSymbols[asset.symbol];

          return (
            <div
              key={asset.symbol}
              className={`min-w-[170px] sm:min-w-[195px] flex-shrink-0 p-2.5 sm:p-3 rounded-xl bg-purple-950/20 border transition-all duration-300 relative group overflow-hidden ${
                flash === 'up'
                  ? 'border-emerald-400/80 bg-emerald-950/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : flash === 'down'
                  ? 'border-rose-400/80 bg-rose-950/30 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                  : 'border-purple-500/15 hover:border-purple-400/40 hover:bg-purple-950/35'
              }`}
            >
              {/* Card Top: Symbol & Tag */}
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-xs font-black font-['Space_Grotesk'] text-white truncate">
                    {asset.symbol}
                  </span>
                </div>
                {asset.tag && (
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-white/5 text-purple-300 border border-purple-500/20 shrink-0">
                    {asset.tag}
                  </span>
                )}
              </div>

              {/* Asset Full Name */}
              <div className="text-[10px] text-slate-400 truncate mb-1">
                {asset.name}
              </div>

              {/* Price & Change Row */}
              <div className="flex items-baseline justify-between gap-1">
                <span className={`text-sm sm:text-base font-black font-['Space_Grotesk'] tracking-tight transition-colors ${
                  flash === 'up' 
                    ? 'text-emerald-300' 
                    : flash === 'down' 
                    ? 'text-rose-300' 
                    : 'text-white'
                }`}>
                  {asset.prefix}{asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}{asset.suffix}
                </span>

                <div className={`flex items-center text-[10px] sm:text-[11px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                  isUp 
                    ? 'text-emerald-400 bg-emerald-950/50 border border-emerald-500/30' 
                    : 'text-rose-400 bg-rose-950/50 border border-rose-500/30'
                }`}>
                  {isUp ? (
                    <ArrowUpRight className="w-3 h-3 mr-0.5 shrink-0 stroke-[2.5]" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 mr-0.5 shrink-0 stroke-[2.5]" />
                  )}
                  <span>{isUp ? '+' : ''}{asset.change24h}%</span>
                </div>
              </div>

              {/* High / Low / Volume Micro stats */}
              <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-400">
                <span className="truncate">24H: {asset.volume}</span>
                <span className="text-slate-500 truncate">H: {asset.high24h.toLocaleString()}</span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
