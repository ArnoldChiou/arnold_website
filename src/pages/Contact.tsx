import React from 'react';
import { FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa'; // 保留 icons

const Contact: React.FC = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'your-email@example.com';
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '09XX-XXX-XXX';

  return (
    <>
    <title>Arnold's Portfolio | 聯絡我們</title>
    {/* 使用更有語意的 section 標籤，並加上 padding 等 class */}
    <section className="contact-page container mx-auto px-4 py-8 md:py-12">
      {/* 主要標題，置中或靠左，視整體設計而定 */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">與我們聯繫</h1>
      {/* 引導文字，更親切 */}
      <p className="text-lg text-center text-gray-600 mb-10">
        我們很樂意聽到您的聲音！您可以透過以下方式找到我們：
      </p>

      {/* 將聯絡資訊區塊視覺化，例如加上背景或邊框 */}
      <div className="contact-info bg-gray-100 p-6 md:p-8 rounded-lg shadow-md max-w-lg mx-auto">
        {/* 公司名稱作為次標題或重點資訊 */}
        <div className="flex items-center mb-6">
          
          <h2 className="text-2xl font-semibold"><FaBuilding className="text-2xl text-blue-600 mr-3" /> 諾丘工作室</h2>
        </div>

        {/* 聯絡方式列表 */}
        <ul className="contact-methods space-y-4">
          {/* Email 項目 */}
          <li className="contact-method-item flex items-start">
            <FaEnvelope className="text-xl text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <a href={`mailto:${contactEmail}`} className="text-blue-700 hover:underline break-all">
                {contactEmail}
              </a>
            </div>
          </li>

          {/* 手機項目 */}
          <li className="contact-method-item flex items-start">
            <FaPhone className="text-xl text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <a href={`tel:${contactPhone}`} className="text-blue-700 hover:underline">
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