import React from 'react';
// 移除 react-helmet-async 導入
// import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  return (
    <>
      {/* Removed <title> tag */}
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