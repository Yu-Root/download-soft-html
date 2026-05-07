import React from 'react';
import { Link } from 'react-router-dom';
import { useSoftwareStore } from '../store/useSoftwareStore';
import { useShallow } from 'zustand/shallow';
import { formatDownloadCount } from '../utils/downloadUtils';
import '../styles/Home.css';

/**
 * 首页组件
 * 展示最新更新的软件、热门下载排行和分类导航入口
 */
const Home: React.FC = () => {
  const latestSoftware = useSoftwareStore(useShallow(state => state.getLatestSoftware()));
  const popularSoftware = useSoftwareStore(useShallow(state => state.getPopularSoftware()));
  const categories = useSoftwareStore(useShallow(state => state.categories));

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Windows 软件下载中心</h1>
          <p>安全、高速、免费的Windows平台软件下载平台</p>
        </div>
      </section>

      {/* Latest Software */}
      <section className="section">
        <div className="section-header">
          <h2>最新更新</h2>
          <Link to="/search?sort=time" className="view-all">查看全部 →</Link>
        </div>
        <div className="software-grid">
          {latestSoftware.map(software => (
            <Link to={`/software/${software.id}`} key={software.id} className="software-card">
              <img src={software.icon} alt={software.name} className="software-icon" />
              <div className="software-info">
                <h3 className="software-name">{software.name}</h3>
                <p className="software-desc">{software.description}</p>
                <div className="software-meta">
                  <span className="version">{software.version}</span>
                  <span className="downloads">
                    {formatDownloadCount(software.downloadCount)} 次下载
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Downloads */}
      <section className="section">
        <div className="section-header">
          <h2>热门下载</h2>
          <Link to="/search?sort=popularity" className="view-all">查看全部 →</Link>
        </div>
        <div className="software-grid">
          {popularSoftware.map((software, index) => (
            <Link to={`/software/${software.id}`} key={software.id} className="software-card popular">
              <div className="rank-badge">{index + 1}</div>
              <img src={software.icon} alt={software.name} className="software-icon" />
              <div className="software-info">
                <h3 className="software-name">{software.name}</h3>
                <p className="software-desc">{software.description}</p>
                <div className="software-meta">
                  <span className="version">{software.version}</span>
                  <span className="downloads hot">
                    🔥 {formatDownloadCount(software.downloadCount)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <h2>软件分类</h2>
        <div className="category-grid">
          {categories.slice(1).map(category => (
            <Link 
              to={`/search?category=${category.id}`} 
              key={category.id}
              className="category-card"
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;