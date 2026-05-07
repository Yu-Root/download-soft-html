import { create } from 'zustand';
import { Software, Category } from '../types';
import { mockSoftware, mockCategories } from '../utils/mockData';

/**
 * 软件状态管理接口
 */
interface SoftwareState {
  // 数据状态
  softwareList: Software[];
  categories: Category[];
  searchKeyword: string;
  selectedCategoryId: string;
  sortBy: 'time' | 'popularity';
  
  // UI状态
  isLoading: boolean;
  error: string | null;

  // 缓存状态
  latestSoftwareCache: Software[] | null;
  popularSoftwareCache: Software[] | null;
  
  // 操作方法
  setSearchKeyword: (keyword: string) => void;
  setSelectedCategoryId: (categoryId: string) => void;
  setSortBy: (sortBy: 'time' | 'popularity') => void;
  getSoftwareById: (id: string) => Software | undefined;
  getLatestSoftware: () => Software[];
  getPopularSoftware: () => Software[];
  incrementDownloadCount: (id: string) => void;
  invalidateCaches: () => void;
}

/**
 * 创建软件状态管理store
 */
export const useSoftwareStore = create<SoftwareState>((set, get) => ({
  // 初始状态
  softwareList: mockSoftware,
  categories: mockCategories,
  searchKeyword: '',
  selectedCategoryId: 'all',
  sortBy: 'time',
  isLoading: false,
  error: null,
  latestSoftwareCache: null,
  popularSoftwareCache: null,

  /**
   * 设置搜索关键词
   * @param keyword - 搜索关键词
   */
  setSearchKeyword: (keyword: string) => {
    set({ searchKeyword: keyword });
  },

  /**
   * 设置选中的分类ID
   * @param categoryId - 分类ID
   */
  setSelectedCategoryId: (categoryId: string) => {
    set({ selectedCategoryId: categoryId });
  },

  /**
   * 设置排序方式
   * @param sortBy - 排序方式 ('time' | 'popularity')
   */
  setSortBy: (sortBy: 'time' | 'popularity') => {
    set({ sortBy });
  },

  /**
   * 根据ID获取软件信息
   * @param id - 软件ID
   * @returns 软件信息或undefined
   */
  getSoftwareById: (id: string) => {
    return get().softwareList.find(software => software.id === id);
  },

  /**
   * 获取最新更新的软件列表
   * @returns 按时间排序的软件列表
   */
  getLatestSoftware: () => {
    const state = get();
    if (state.latestSoftwareCache) {
      return state.latestSoftwareCache;
    }
    
    const latest = [...state.softwareList]
      .sort((a, b) => new Date(b.updateTime).getTime() - new Date(a.updateTime).getTime())
      .slice(0, 6);
    
    set({ latestSoftwareCache: latest });
    return latest;
  },

  /**
   * 获取热门下载软件列表
   * @returns 按下载量排序的软件列表
   */
  getPopularSoftware: () => {
    const state = get();
    if (state.popularSoftwareCache) {
      return state.popularSoftwareCache;
    }
    
    const popular = [...state.softwareList]
      .sort((a, b) => b.downloadCount - a.downloadCount)
      .slice(0, 6);
    
    set({ popularSoftwareCache: popular });
    return popular;
  },

  /**
   * 增加软件下载次数
   * @param id - 软件ID
   */
  incrementDownloadCount: (id: string) => {
    set(state => {
      const newSoftwareList = state.softwareList.map(software => 
        software.id === id 
          ? { ...software, downloadCount: software.downloadCount + 1 }
          : software
      );
      
      // 清除缓存，因为软件列表已更改
      return {
        softwareList: newSoftwareList,
        latestSoftwareCache: null,
        popularSoftwareCache: null
      };
    });
  },

  /**
   * 清除所有缓存
   */
  invalidateCaches: () => {
    set({
      latestSoftwareCache: null,
      popularSoftwareCache: null
    });
  }
}));