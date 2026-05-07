/**
 * 软件类型定义
 */
export interface Software {
  id: string;
  name: string;
  icon: string;
  version: string;
  size: string;
  md5: string;
  updateTime: string;
  system: string;
  description: string;
  category: string;
  downloadCount: number;
  downloadUrl: string;
  screenshots: string[];
  markdownContent: string;
}

/**
 * 分类类型定义
 */
export interface Category {
  id: string;
  name: string;
  icon: string;
  children?: Category[];
}

/**
 * 搜索参数类型定义
 */
export interface SearchParams {
  keyword: string;
  categoryId?: string;
  sortBy: 'time' | 'popularity';
}
