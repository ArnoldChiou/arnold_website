import React from 'react';
// Removed Helmet import

const Services: React.FC = () => {
  return (
    <>
      {/* 添加 page-container class */}
      <div className="services-page page-container">
        <h1>服務項目</h1>
        <p>我們的專業服務內容。</p>
      </div>
    </>
  );
};

export default Services;