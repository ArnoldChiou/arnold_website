import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'your-email@example.com';
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '09XX-XXX-XXX';

  return (
    <div className="privacy-page page-container">
      <h1>隱私權政策</h1>
      <p style={{ color: '#6b7280', marginTop: 8 }}>最後更新：2025-08-16</p>

      <section>
        <h2>總則</h2>
        <p>
          歡迎您使用「諾丘工作室」（以下簡稱「本網站」）之服務。本隱私權政策旨在說明我們如何蒐集、使用、保護與分享您的個人資料，以及您對個人資料的權利。本政策適用於您造訪本網站與使用我們提供之各項服務時。
        </p>
      </section>

      <section>
        <h2>我們蒐集的資料</h2>
        <ul>
          <li>
            您主動提供的資料：例如透過聯絡表單或電子郵件提供之姓名、聯絡方式、公司名稱、詢問內容等。
          </li>
          <li>
            服務使用資訊：包含瀏覽頁面、停留時間、點擊操作、裝置與瀏覽器類型、作業系統、IP 位址、參照網址等技術資料。
          </li>
          <li>
            Cookie 與類似技術：用於記錄偏好設定與改善體驗。您可於瀏覽器中調整 Cookie 設定；若停用，部分功能可能無法正常運作。
          </li>
        </ul>
      </section>

      <section>
        <h2>資料使用目的</h2>
        <ul>
          <li>提供與維護服務功能、回覆您的詢問與提供客戶支援。</li>
          <li>優化使用者體驗、改善網站效能與內容品質。</li>
          <li>安全性用途：偵測、預防或處理詐欺、濫用或安全事件。</li>
          <li>法令遵循：依相關法律或主管機關之要求提供必要資訊。</li>
        </ul>
      </section>

      <section>
        <h2>第三方服務與外部連結</h2>
        <p>
          本網站可能嵌入或連結至第三方服務（例如分析工具、社群平台或外部網站）。第三方可能使用 Cookie 或取得部分技術性資料；該等第三方之資料處理將受其各自的隱私權政策約束。本網站不對第三方之行為負責。
        </p>
      </section>

      <section>
        <h2>資料保存期間</h2>
        <p>
          我們會在達成蒐集目的所必要之期間內保存您的個人資料，並考量法令要求、爭議解決及合約義務等因素；一旦目的消失或期限屆滿，我們將依內部程序刪除或匿名化處理。
        </p>
      </section>

      <section>
        <h2>您的權利</h2>
        <p>依相關法令，您可就您的個人資料行使以下權利：</p>
        <ul>
          <li>查詢或請求閱覽、請求製給複本。</li>
          <li>請求補充或更正、請求停止蒐集、處理或利用。</li>
          <li>請求刪除（在法令許可與合約義務範圍內）。</li>
          <li>撤回同意（不影響撤回前基於同意之處理活動合法性）。</li>
        </ul>
        <p>若您欲行使權利，請透過下方「聯絡我們」方式與我們聯繫。</p>
      </section>

      <section>
        <h2>資訊安全</h2>
        <p>
          我們採取合理且符合業界慣例的安全措施，以保護資料免於未經授權的存取、揭露、變更或破壞。但透過網際網路傳輸或電子儲存之方式無法保證絕對安全。
        </p>
      </section>

      <section>
        <h2>未成年人保護</h2>
        <p>
          本網站之服務主要提供給一般大眾使用。若您為未成年人，應在法定代理人同意並陪同下使用本網站並提供個人資料。
        </p>
      </section>

      <section>
        <h2>政策更新</h2>
        <p>
          我們可能不定期更新本政策以反映法規變更或服務調整。更新後之版本將公布於本頁面，並以「最後更新」日期標示。建議您定期查閱。
        </p>
      </section>

      <section>
        <h2>聯絡我們</h2>
        <p>
          若您對本隱私權政策或個人資料處理有任何疑問，歡迎與「諾丘工作室」聯繫：
        </p>
        <ul>
          <li>
            Email：
            <a href={`mailto:${contactEmail}`} rel="noopener noreferrer">{contactEmail}</a>
          </li>
          <li>
            電話：
            <a href={`tel:${contactPhone}`} rel="noopener noreferrer">{contactPhone}</a>
          </li>
          <li>
            或前往<Link to="/contact">聯絡我們頁面</Link>留下訊息。
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Privacy;