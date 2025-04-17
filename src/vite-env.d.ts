/// <reference types="vite/client" />

// 加入這段來宣告 CSS 模組
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
