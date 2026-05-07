import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSoftwareStore } from '../store/useSoftwareStore';
import '../styles/Header.css';

/**
 * 网站头部导航组件
 */
const Header: React.FC = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const setSearchKeyword = useSoftwareStore(state => state.setSearchKeyword);

  /**
   * 处理搜索表单提交
   * @param e - 表单事件
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchKeyword(searchInput);
    navigate('/search');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">📦</span>
          <span className="logo-text">WinSoft</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">首页</Link>
          <Link to="/search" className="nav-link">软件分类</Link>
          <Link to="/search?category=popular" className="nav-link">热门下载</Link>
        </nav>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="搜索软件名称或描述..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
