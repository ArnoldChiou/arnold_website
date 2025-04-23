import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem 0; /* 稍微減少 padding */
  position: fixed; /* 固定定位 */
  bottom: 0; /* 貼齊底部 */
  left: 0; /* 貼齊左側 */
  width: 100%; /* 寬度 100% */
  z-index: 1000; /* 確保在其他內容之上 */
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© {new Date().getFullYear()} Your Website. All rights reserved.</Copyright>
        <FooterLinks>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
