import React from 'react';
// 移除 react-helmet-async 導入
// import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  return (
    <>
      {/* 將 Helmet title 替換為標準 title 標籤 */}
      <title>Arnold's Portfolio | 服務項目</title>
      {/* <Helmet>
        <title>Arnold's Portfolio | 專業技能</title>
      </Helmet> */}
      <div className="services-page">
        <h1>服務項目</h1>
        <p>我們的專業服務內容。</p>
      </div>
    </>
  );
};

export default Services; 