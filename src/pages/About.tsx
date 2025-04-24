import React from 'react';
// import { Helmet } from 'react-helmet-async';
import '../styles/pages/About.css';

const About: React.FC = () => {
  return (
    <>
      <div className="about-page page-container">
        <h1>關於我</h1>
        <p>我們是一個專注於提供高質量服務的團隊。</p>
        <section>
          <h2>我們的使命</h2>
          <p>為客戶提供最好的解決方案和服務。</p>
        </section>
        <section>
          <h2>我們的願景</h2>
          <p>成為業界領先的服務提供商。</p>
        </section>
      </div>
    </>
  );
};

export default About;