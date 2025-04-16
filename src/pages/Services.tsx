import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Arnold's Portfolio | 專業技能</title>
      </Helmet>
      <div className="services-page">
        <h1>專業技能</h1>
        <p>我們的專業服務內容。</p>
      </div>
    </>
  );
};

export default Services; 