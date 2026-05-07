import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSoftwareStore } from '../store/useSoftwareStore';
import { useShallow } from 'zustand/shallow';
import { Category } from '../types';
import { formatDownloadCount } from '../utils/downloadUtils';
import '../styles/Search.css';

/**
 * 渲染分类项
 * @param category - 分类信息
 * @param level - 层级
 * @param expandedCategories - 展开的分类列表
 * @param selectedCategoryId - 选中的分类ID
 * @param toggleCategory - 切换分类展开状态的函数
 * @param setSelectedCategoryId - 设置选中分类ID的函数
 * @returns 分类项JSX
 */
const renderCategoryItem = (
  category: Category, 
  level: number = 0, 
  expandedCategories: string[], 
  selectedCategoryId: string,
  toggleCategory: (categoryId: string) => void,
  setSelectedCategoryId: (categoryId: string) => void
) => {
  const hasChildren = category.children && category.children.length > 0;
  const isExpanded = expandedCategories.includes(category.id);
  const isSelected = selectedCategoryId === category.id;

  const handleClick = () => {
    if (hasChildren) {
      toggleCategory(category.id);
    }
    setSelectedCategoryId(category.id);
  };

  return (
    <div key={category.id} className="category-item-wrapper">
      <div 
        className={`category-item ${isSelected ? 'active' : ''}`}
        style={{ paddingLeft: `${level * 20 + 16}px` }}
        onClick={handleClick}
      >
        {hasChildren && (
          <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
            ▶
          </span>
        )}
        <span className="category-icon">{category.icon}</span>
        <span className="category-name">{category.name}</span>
      </div>
      {hasChildren && isExpanded && (
        <div className="category-children">
          {category.children!.map(child => renderCategoryItem(child, level + 1, expandedCategories, selectedCategoryId, toggleCategory, setSelectedCategoryId))}
        </div>
      )}
    </div>
  );
};

/**
 * 分类/搜索页组件
 * 左侧显示分类树，右侧显示软件列表并支持排序
 */
const Search: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  
  // 优化状态选择，使用useShallow进行浅比较，避免不必要的重渲染
  const {
    categories,
    searchKeyword,
    selectedCategoryId,
    sortBy,
    setSelectedCategoryId,
    setSortBy,
    softwareList
  } = useSoftwareStore(
    useShallow((state) => ({
      categories: state.categories,
      searchKeyword: state.searchKeyword,
      selectedCategoryId: state.selectedCategoryId,
      sortBy: state.sortBy,
      setSelectedCategoryId: state.setSelectedCategoryId,
      setSortBy: state.setSortBy,
      softwareList: state.softwareList
    }))
  );

  // 直接在组件中实现过滤和排序逻辑，避免在渲染过程中触发Zustand状态更新
  const filteredSoftware = useMemo(() => {
    let filtered = [...softwareList];

    // 按分类过滤
    if (selectedCategoryId !== 'all') {
      filtered = filtered.filter(software => software.category === selectedCategoryId);
    }

    // 按关键词搜索
    if (searchKeyword.trim()) {
      const keyword = searchKeyword.toLowerCase();
      filtered = filtered.filter(software => 
        software.name.toLowerCase().includes(keyword) ||
        software.description.toLowerCase().includes(keyword)
      );
    }

    // 排序
    if (sortBy === 'time') {
      filtered.sort((a, b) => new Date(b.updateTime).getTime() - new Date(a.updateTime).getTime());
    } else {
      filtered.sort((a, b) => b.downloadCount - a.downloadCount);
    }

    return filtered;
  }, [softwareList, searchKeyword, selectedCategoryId, sortBy]);

  /**
   * 切换分类展开/折叠状态
   * @param categoryId - 分类ID
   */
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="search-page">
      {/* 左侧分类导航 */}
      <aside className="category-sidebar">
        <h3 className="sidebar-title">软件分类</h3>
        <div className="category-list">
          {categories.map(category => renderCategoryItem(category, 0, expandedCategories, selectedCategoryId, toggleCategory, setSelectedCategoryId))}
        </div>
      </aside>

      {/* 右侧内容区 */}
      <main className="main-content">
        {/* 搜索信息和排序 */}
        <div className="content-header">
          <div className="search-info">
            {searchKeyword ? (
              <span className="search-keyword">
                搜索 "{searchKeyword}" 的结果：
              </span>
            ) : (
              <span className="category-title">
                {categories.find(c => c.id === selectedCategoryId)?.name || '全部软件'}
              </span>
            )}
            <span className="result-count">
              共 {filteredSoftware.length} 个软件
            </span>
          </div>
          
          <div className="sort-options">
            <span className="sort-label">排序：</span>
            <button 
              className={`sort-button ${sortBy === 'time' ? 'active' : ''}`}
              onClick={() => setSortBy('time')}
            >
              最新更新
            </button>
            <button 
              className={`sort-button ${sortBy === 'popularity' ? 'active' : ''}`}
              onClick={() => setSortBy('popularity')}
            >
              下载热度
            </button>
          </div>
        </div>

        {/* 软件列表 */}
        <div className="software-list">
          {filteredSoftware.length === 0 ? (
            <div className="no-results">
              <p>没有找到相关软件</p>
              <button 
                onClick={() => {
                  setSelectedCategoryId('all');
                }}
                className="reset-button"
              >
                查看全部软件
              </button>
            </div>
          ) : (
            filteredSoftware.map(software => (
              <Link 
                to={`/software/${software.id}`} 
                key={software.id}
                className="software-list-item"
              >
                <img 
                  src={software.icon} 
                  alt={software.name} 
                  className="list-item-icon"
                />
                <div className="list-item-info">
                  <h3 className="list-item-name">{software.name}</h3>
                  <p className="list-item-desc">{software.description}</p>
                  <div className="list-item-meta">
                    <span className="list-version">v{software.version}</span>
                    <span className="list-size">{software.size}</span>
                    <span className="list-date">{software.updateTime}</span>
                  </div>
                </div>
                <div className="list-item-actions">
                  <span className="download-count">
                    {formatDownloadCount(software.downloadCount)} 次下载
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
