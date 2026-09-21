import { supabase } from '../lib/supabase';
import type { ResourceItem, ZoneType, SupportedLanguage } from '../types/resource';

export function mapProjectTypeToZone(type: string): { zone: ZoneType; subCategory: string } {
  switch (type) {
    case '视频 / 动态特效':
      return { zone: 'videos', subCategory: '项目宣传片' };
    case '品牌资产 / 规范':
      return { zone: 'assets', subCategory: 'Logo' };
    case '线下物料 / 周边':
      return { zone: 'assets', subCategory: '易拉宝' };
    case '演示提案 / 商业计划书':
      return { zone: 'courseware', subCategory: '项目介绍' };
    case '营销广告横幅':
    case '社媒创意配图':
    case '落地页设计':
    default:
      return { zone: 'marketing', subCategory: '海报' };
  }
}

export function transformProjectToResources(project: any): ResourceItem[] {
  const items: ResourceItem[] = [];
  const { zone, subCategory } = mapProjectTypeToZone(project.type);
  const markets: SupportedLanguage[] = Array.isArray(project.markets) && project.markets.length > 0 
    ? project.markets 
    : ['中文'];

  if (Array.isArray(project.assets) && project.assets.length > 0) {
    project.assets.forEach((asset: any, index: number) => {
      items.push({
        id: `delivery-${project.id}-${asset.id || index}`,
        title: `${project.title} - ${asset.name || '交付成品'}`,
        zone,
        subCategory,
        description: project.description || `由 Spark 创意协作中心交付结项，项目编号：${project.id}`,
        languages: markets,
        fileType: asset.type === 'video' ? 'video' : asset.type === 'pdf' ? 'pdf' : asset.type === 'archive' ? 'archive' : 'image',
        fileFormatName: asset.type ? asset.type.toUpperCase() : 'ZIP / FILE',
        fileSize: asset.size || '4.2 MB',
        downloadUrl: asset.url || project.preview_url || '/brand/Spark_PurpleBlack_Metal.png',
        previewUrl: asset.url || project.preview_url || '/brand/Spark_PurpleBlack_Metal.png',
        updatedAt: project.updated_at ? new Date(project.updated_at).toISOString().split('T')[0] : '刚刚结项',
        isNewDelivery: true,
        deliveryProjectId: project.id,
        downloadsCount: 1,
        tags: ['最新交付', project.type, '已结项'],
      });
    });
  } else if (project.preview_url) {
    items.push({
      id: `delivery-${project.id}-preview`,
      title: `${project.title} (交付成品包)`,
      zone,
      subCategory,
      description: project.description || `由 Spark 创意中心审核结项，项目编号：${project.id}`,
      languages: markets,
      fileType: project.type?.includes('视频') ? 'video' : 'image',
      fileFormatName: project.type?.includes('视频') ? 'MP4' : 'PNG / ZIP',
      fileSize: '12.8 MB',
      downloadUrl: project.preview_url,
      previewUrl: project.preview_url,
      updatedAt: project.updated_at ? new Date(project.updated_at).toISOString().split('T')[0] : '刚刚结项',
      isNewDelivery: true,
      deliveryProjectId: project.id,
      downloadsCount: 1,
      tags: ['最新交付', project.type, '已结项'],
    });
  }

  return items;
}

export async function fetchCompletedProjects(): Promise<ResourceItem[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .or('status.eq.Completed,progress.eq.100')
      .order('updated_at', { ascending: false });

    if (error) {
      console.warn('Could not fetch projects from Supabase:', error.message);
      return [];
    }

    if (!data || data.length === 0) return [];

    const resources: ResourceItem[] = [];
    data.forEach(project => {
      resources.push(...transformProjectToResources(project));
    });

    return resources;
  } catch (err) {
    console.warn('Supabase fetch error:', err);
    return [];
  }
}

export function subscribeToCompletedProjects(onNewOrUpdatedItem: (items: ResourceItem[]) => void) {
  try {
    const channel = supabase
      .channel('public:projects:completed:zones')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'projects' },
        (payload) => {
          const newRecord = payload.new as any;
          if (newRecord && (newRecord.status === 'Completed' || newRecord.progress === 100)) {
            const transformed = transformProjectToResources(newRecord);
            onNewOrUpdatedItem(transformed);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  } catch (err) {
    console.warn('Realtime subscription error:', err);
    return () => {};
  }
}
