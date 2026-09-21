export type ZoneType = 
  | 'courseware'  // 课件区 (项目介绍，金融简介)
  | 'marketing'   // 市场宣传 (各种海报，长图)
  | 'assets'      // 素材 (logo, 易拉宝)
  | 'videos'      // 视频区 (项目宣传片，活动片，公益片)
  | 'events';     // 活动照片区 (各国公益活动相册)

export type SupportedLanguage = 
  | '中文'
  | '英语'
  | '越南语'
  | '印尼语'
  | '韩语'
  | '日语'
  | '泰语';

export type FileFormat = 'image' | 'pdf' | 'video' | 'archive' | 'figma' | 'doc';

export interface LanguageEdition {
  language: SupportedLanguage;
  label: string; // e.g. "中文", "English", "한국어"
  flag: string;  // e.g. "🇨🇳", "🇺🇸", "🇰🇷"
  downloadUrl: string;
  previewUrl: string;
  fileSize: string;
  fileFormatName?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  zone: ZoneType;
  subCategory: string; // e.g. "项目介绍", "金融简介", "长图", "海报", "Logo", "易拉宝", "项目宣传片", "公益片"
  description: string;
  languages: SupportedLanguage[];
  editions?: LanguageEdition[]; // 多语言独立版本切换
  fileType: FileFormat;
  fileFormatName: string; // e.g. "PNG", "PDF", "MP4", "ZIP"
  fileSize: string;
  downloadUrl: string;
  previewUrl: string;
  updatedAt: string;
  isNewDelivery?: boolean;
  deliveryProjectId?: string;
  downloadsCount: number;
  tags: string[];
  dimensions?: string;
  duration?: string; // for videos
  photoCount?: number; // for photo albums
}

export type SortOption = 'latest' | 'popular' | 'size';
