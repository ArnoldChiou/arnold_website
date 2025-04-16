# Arnold's Personal Website

這是一個使用現代前端技術棧構建的個人網站專案，採用 React、TypeScript 和 Vite 作為主要技術。

## 🚀 技術棧

- **React 18** - 用於構建用戶界面
- **TypeScript** - 提供類型安全和更好的開發體驗
- **Vite** - 快速的前端構建工具
- **ESLint** - 代碼質量檢查
- **SWC** - 用於快速開發和構建

## 📦 安裝

確保你的系統已安裝 Node.js (建議版本 18.0.0 或更高)

1. 克隆專案
```bash
git clone [your-repository-url]
cd arnold_website
```

2. 安裝依賴
```bash
npm install
```

3. 啟動開發服務器
```bash
npm run dev
```

4. 構建生產版本
```bash
npm run build
```

## 🛠️ 開發指南

### 專案結構

```
arnold_website/
├── public/          # 靜態資源
├── src/             # 源代碼
│   ├── components/  # React 組件
│   ├── pages/       # 頁面組件
│   ├── styles/      # 樣式文件
│   ├── utils/       # 工具函數
│   ├── App.tsx      # 主應用組件
│   └── main.tsx     # 入口文件
├── .gitignore       # Git 忽略文件
├── index.html       # HTML 模板
├── package.json     # 專案配置
├── tsconfig.json    # TypeScript 配置
├── tsconfig.node.json # Node 環境 TypeScript 配置
└── vite.config.ts   # Vite 配置
```

### 代碼規範

專案使用 ESLint 進行代碼質量檢查，主要規則包括：

- TypeScript 類型檢查
- React 最佳實踐
- 代碼風格一致性

### 開發工作流

1. 創建新功能分支
```bash
git checkout -b feature/your-feature-name
```

2. 提交更改
```bash
git add .
git commit -m "feat: add new feature"
```

3. 推送到遠程
```bash
git push origin feature/your-feature-name
```

## 🔧 配置說明

### TypeScript 配置

專案使用兩個 TypeScript 配置文件：

- `tsconfig.json` - 主配置文件，用於應用程序代碼
- `tsconfig.node.json` - 用於 Vite 配置文件的 TypeScript 配置

### Vite 配置

Vite 配置使用 SWC 插件進行快速開發和構建：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

## 📚 文檔

- [React 官方文檔](https://react.dev/)
- [TypeScript 手冊](https://www.typescriptlang.org/docs/)
- [Vite 文檔](https://vitejs.dev/guide/)
- [ESLint 配置指南](https://eslint.org/docs/latest/use/configure/)

## 🤝 貢獻指南

1. Fork 本專案
2. 創建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟一個 Pull Request

## 📝 許可證

本專案採用 MIT 許可證 - 詳見 [LICENSE](LICENSE) 文件

## 📞 聯繫方式

如有任何問題或建議，請通過以下方式聯繫：

- Email: [your-email@example.com]
- GitHub: [your-github-profile]

---

感謝你的關注和支持！🎉
