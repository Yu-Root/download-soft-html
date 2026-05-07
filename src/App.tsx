import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SoftwareDetail from './pages/SoftwareDetail';
import Search from './pages/Search';
import './styles/index.css';

/**
 * 应用主组件
 * 配置路由和整体布局结构
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/software/:id" element={<SoftwareDetail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
