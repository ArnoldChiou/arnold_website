import React from 'react';
import { FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import '../styles/pages/Contact.css'; // 引入新的 CSS 檔案

const Contact: React.FC = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'your-email@example.com';
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '09XX-XXX-XXX';

  return (
    <>
      {/* 使用語意化標籤和 CSS class */}
      <section className="contact-page">
        <h1 className="contact-title">與我們聯繫</h1>
        <p className="contact-subtitle">
          我們很樂意聽到您的聲音！您可以透過以下方式找到我們：
        </p>

        <div className="contact-info-box">
          <div className="company-info">
            <FaBuilding className="company-icon" />
            <h2 className="company-name">諾丘工作室</h2>
          </div>

          <ul className="contact-methods">
            <li className="contact-method-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <a href={`mailto:${contactEmail}`} className="contact-link">
                  {contactEmail}
                </a>
              </div>
            </li>

            <li className="contact-method-item">
              <FaPhone className="contact-icon" />
              <div>
                <a href={`tel:${contactPhone}`} className="contact-link">
                  {contactPhone}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;