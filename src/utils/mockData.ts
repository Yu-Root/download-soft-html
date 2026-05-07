import { Software, Category } from '../types';

export const mockSoftware: Software[] = [
  {
    id: '1',
    name: 'Chrome浏览器',
    icon: 'https://img.icons8.com/color/96/chrome.png',
    version: '120.0.6099.225',
    size: '125 MB',
    md5: '8F7D3C2A5E4B1F0D9A8B7C6D5E4F3A2B',
    updateTime: '2024-01-15',
    system: 'Windows 10/11',
    description: '快速、安全的网络浏览器',
    category: 'network',
    downloadCount: 1256800,
    downloadUrl: 'https://dl.google.com/chrome/install/ChromeSetup.exe',
    screenshots: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600'
    ],
    markdownContent: `## Chrome浏览器

Google Chrome是由Google开发的免费网页浏览器。

### 主要特性

- **极速加载**：采用V8引擎，加载速度快
- **安全浏览**：内置恶意网站检测
- **扩展丰富**：支持数千种扩展程序
- **同步功能**：多设备同步书签和设置

### 系统要求

- Windows 10 或更高版本
- 至少2GB RAM
- 至少500MB可用磁盘空间

![Chrome界面](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600)`
  },
  {
    id: '2',
    name: 'Visual Studio Code',
    icon: 'https://img.icons8.com/color/96/visual-studio-code-2019.png',
    version: '1.85.1',
    size: '110 MB',
    md5: 'A1B2C3D4E5F67890ABCDEF1234567890',
    updateTime: '2024-01-10',
    system: 'Windows 10/11',
    description: '微软出品的开源代码编辑器',
    category: 'development',
    downloadCount: 987500,
    downloadUrl: 'https://code.visualstudio.com/docs/?dv=win64user',
    screenshots: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600'
    ],
    markdownContent: `## Visual Studio Code

轻量级但功能强大的代码编辑器。

### 核心功能

- 支持多种编程语言
- 智能代码补全
- 内置Git集成
- 强大的调试工具

### 扩展生态

VS Code拥有丰富的扩展生态系统，支持几乎所有编程语言和开发工具。`
  },
  {
    id: '3',
    name: 'Notepad++',
    icon: 'https://img.icons8.com/color/96/notepad-plus-plus.png',
    version: '8.6.2',
    size: '8.5 MB',
    md5: '1234567890ABCDEF1234567890ABCDEF',
    updateTime: '2024-01-05',
    system: 'Windows 7/8/10/11',
    description: '免费的源代码编辑器和记事本替代工具',
    category: 'development',
    downloadCount: 756200,
    downloadUrl: 'https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.2/npp.8.6.2.Installer.exe',
    screenshots: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600'
    ],
    markdownContent: `## Notepad++

Notepad++是一款免费的源代码编辑器，支持多种编程语言。

### 特性

- 语法高亮
- 代码折叠
- 多文档界面
- 正则表达式搜索替换`
  },
  {
    id: '4',
    name: 'VLC媒体播放器',
    icon: 'https://img.icons8.com/color/96/vlc.png',
    version: '3.0.20',
    size: '45 MB',
    md5: 'ABCDEF1234567890ABCDEF1234567890',
    updateTime: '2024-01-12',
    system: 'Windows 7/8/10/11',
    description: '免费开源的多媒体播放器',
    category: 'multimedia',
    downloadCount: 2345600,
    downloadUrl: 'https://get.videolan.org/vlc/3.0.20/win64/vlc-3.0.20-win64.exe',
    screenshots: [
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600'
    ],
    markdownContent: `## VLC媒体播放器

VLC是一款功能强大的媒体播放器，支持几乎所有音视频格式。

### 支持格式

- MP4, MKV, AVI
- MP3, FLAC, AAC
- DVD, VCD, 流媒体

### 特色功能

- 无需安装额外解码器
- 支持字幕
- 可自定义皮肤`
  },
  {
    id: '5',
    name: 'CCleaner',
    icon: 'https://img.icons8.com/color/96/ccleaner.png',
    version: '6.24.0',
    size: '35 MB',
    md5: 'FEDCBA9876543210FEDCBA9876543210',
    updateTime: '2024-01-08',
    system: 'Windows 10/11',
    description: '系统清理和优化工具',
    category: 'system',
    downloadCount: 1567800,
    downloadUrl: 'https://download.ccleaner.com/ccsetup624.exe',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
    ],
    markdownContent: `## CCleaner

CCleaner是一款优秀的系统清理工具。

### 主要功能

- 清理临时文件
- 清理浏览器缓存
- 注册表清理
- 软件卸载管理

### 系统优化

帮助优化系统性能，释放磁盘空间。`
  },
  {
    id: '6',
    name: '7-Zip',
    icon: 'https://img.icons8.com/color/96/7-zip.png',
    version: '23.01',
    size: '1.5 MB',
    md5: '0123456789ABCDEF0123456789ABCDEF',
    updateTime: '2024-01-01',
    system: 'Windows 7/8/10/11',
    description: '免费开源的文件压缩工具',
    category: 'system',
    downloadCount: 1892300,
    downloadUrl: 'https://7-zip.org/a/7z2301-x64.exe',
    screenshots: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600'
    ],
    markdownContent: `## 7-Zip

7-Zip是一款免费的文件压缩工具，拥有极高的压缩比。

### 支持格式

- 7z, ZIP, RAR
- TAR, GZIP, BZIP2
- ISO, CAB

### 特点

- 开源免费
- 高压缩比
- 支持加密压缩`
  },
  {
    id: '7',
    name: 'Spotify',
    icon: 'https://img.icons8.com/color/96/spotify.png',
    version: '1.2.31.1205',
    size: '150 MB',
    md5: '12345678901234567890123456789012',
    updateTime: '2024-01-14',
    system: 'Windows 10/11',
    description: '全球流行的音乐流媒体平台',
    category: 'multimedia',
    downloadCount: 3256700,
    downloadUrl: 'https://download.spotify.com/SpotifySetup.exe',
    screenshots: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600'
    ],
    markdownContent: `## Spotify

Spotify是全球最大的正版流媒体音乐服务平台。

### 音乐库

- 超过1亿首歌曲
- 百万级播客
- 个性化推荐

### 高级功能

- 离线下载
- 无广告播放
- 高音质音频`
  },
  {
    id: '8',
    name: 'Node.js',
    icon: 'https://img.icons8.com/color/96/nodejs.png',
    version: '20.11.0',
    size: '75 MB',
    md5: '23456789012345678901234567890123',
    updateTime: '2024-01-09',
    system: 'Windows 10/11',
    description: '基于Chrome V8引擎的JavaScript运行环境',
    category: 'development',
    downloadCount: 876500,
    downloadUrl: 'https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi',
    screenshots: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600'
    ],
    markdownContent: `## Node.js

Node.js是一个开源的跨平台JavaScript运行时环境。

### 主要特性

- 事件驱动
- 非阻塞I/O
- npm包管理器
- 单线程高效`
  },
  {
    id: '9',
    name: 'Discord',
    icon: 'https://img.icons8.com/color/96/discord.png',
    version: '1.0.9026',
    size: '85 MB',
    md5: '34567890123456789012345678901234',
    updateTime: '2024-01-13',
    system: 'Windows 10/11',
    description: '专为游戏玩家设计的语音聊天软件',
    category: 'network',
    downloadCount: 2156800,
    downloadUrl: 'https://dl.discordapp.net/distro/app/stable/win/x64/1.0.9026/DiscordSetup.exe',
    screenshots: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600'
    ],
    markdownContent: `## Discord

Discord是一款免费的语音、视频和文字聊天应用。

### 功能

- 语音聊天
- 视频通话
- 屏幕共享
- 服务器管理

### 社区

全球数百万用户使用Discord进行交流。`
  },
  {
    id: '10',
    name: 'Malwarebytes',
    icon: 'https://img.icons8.com/color/96/malwarebytes.png',
    version: '4.6.7.296',
    size: '95 MB',
    md5: '45678901234567890123456789012345',
    updateTime: '2024-01-07',
    system: 'Windows 10/11',
    description: '专业的恶意软件清除工具',
    category: 'security',
    downloadCount: 1456700,
    downloadUrl: 'https://data-cdn.mbamupdates.com/web/mb4-setup-4.6.7.296.exe',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
    ],
    markdownContent: `## Malwarebytes

Malwarebytes是一款专业的反恶意软件工具。

### 保护功能

- 实时保护
- 恶意软件扫描
- 勒索软件防护
- Web保护

### 扫描选项

- 快速扫描
- 全面扫描
- 自定义扫描`
  }
];

export const mockCategories: Category[] = [
  { id: 'all', name: '全部软件', icon: '📦' },
  {
    id: 'system',
    name: '系统工具',
    icon: '⚙️',
    children: [
      { id: 'cleanup', name: '清理优化', icon: '🧹' },
      { id: 'compression', name: '压缩解压', icon: '📦' },
      { id: 'backup', name: '备份恢复', icon: '💾' }
    ]
  },
  {
    id: 'multimedia',
    name: '多媒体',
    icon: '🎵',
    children: [
      { id: 'video', name: '视频播放', icon: '🎬' },
      { id: 'audio', name: '音频播放', icon: '🎧' },
      { id: 'editor', name: '音视频编辑', icon: '✂️' }
    ]
  },
  {
    id: 'development',
    name: '编程开发',
    icon: '💻',
    children: [
      { id: 'editor', name: '代码编辑器', icon: '📝' },
      { id: 'ide', name: '集成开发环境', icon: '🖥️' },
      { id: 'database', name: '数据库工具', icon: '🗄️' }
    ]
  },
  {
    id: 'network',
    name: '网络工具',
    icon: '🌐',
    children: [
      { id: 'browser', name: '浏览器', icon: '🔍' },
      { id: 'download', name: '下载工具', icon: '⬇️' },
      { id: 'chat', name: '聊天通讯', icon: '💬' }
    ]
  },
  {
    id: 'security',
    name: '安全防护',
    icon: '🛡️',
    children: [
      { id: 'antivirus', name: '杀毒软件', icon: '🦠' },
      { id: 'firewall', name: '防火墙', icon: '🧱' },
      { id: 'encryption', name: '加密工具', icon: '🔒' }
    ]
  }
];
