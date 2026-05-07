import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useSoftwareStore } from '../store/useSoftwareStore';
import { useShallow } from 'zustand/shallow';
import { triggerDownload, formatDownloadCount } from '../utils/downloadUtils';
import '../styles/SoftwareDetail.css';

/**
 * 软件详情页组件
 * 展示软件的详细信息、图文介绍和下载功能
 */
const SoftwareDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const software = useSoftwareStore(useShallow(state => state.getSoftwareById(id || '')));
  const incrementDownloadCount = useSoftwareStore(useShallow(state => state.incrementDownloadCount));

  /**
   * 处理下载按钮点击
   */
  const handleDownload = () => {
    if (software) {
      triggerDownload(software.downloadUrl, software.name);
      incrementDownloadCount(software.id);
    }
  };

  if (!software) {
    return (
      <div className="not-found">
        <h2>软件未找到</h2>
        <button onClick={() => navigate('/')} className="back-button">
          返回首页
        </button>
      </div>
    );
  }

  return (
    <div className="software-detail">
      {/* 软件头部信息 */}
      <section className="detail-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← 返回
        </button>
        <div className="software-main-info">
          <img src={software.icon} alt={software.name} className="detail-icon" />
          <div className="software-basic">
            <h1 className="detail-name">{software.name}</h1>
            <p className="detail-desc">{software.description}</p>
            <div className="detail-meta">
              <span className="meta-item">
                <strong>版本：</strong>{software.version}
              </span>
              <span className="meta-item">
                <strong>大小：</strong>{software.size}
              </span>
              <span className="meta-item">
                <strong>更新时间：</strong>{software.updateTime}
              </span>
              <span className="meta-item">
                <strong>适用系统：</strong>{software.system}
              </span>
              <span className="meta-item">
                <strong>下载次数：</strong>{formatDownloadCount(software.downloadCount)}
              </span>
            </div>
          </div>
          <div className="download-section">
            <button onClick={handleDownload} className="download-button">
              <span className="download-icon">⬇️</span>
              本地下载
            </button>
            <p className="md5-info">MD5: {software.md5}</p>
          </div>
        </div>
      </section>

      {/* 软件截图 */}
      {software.screenshots.length > 0 && (
        <section className="screenshots-section">
          <h2>软件截图</h2>
          <div className="screenshots-grid">
            {software.screenshots.map((screenshot, index) => (
              <img 
                key={index} 
                src={screenshot} 
                alt={`${software.name} 截图 ${index + 1}`}
                className="screenshot-image"
              />
            ))}
          </div>
        </section>
      )}

      {/* 软件介绍（Markdown渲染） */}
      <section className="description-section">
        <h2>软件介绍</h2>
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {software.markdownContent}
          </ReactMarkdown>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDetail;