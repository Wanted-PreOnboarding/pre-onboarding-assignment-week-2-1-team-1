import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Color } from '../styles/common';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default function ScrollTop() {
  // 디폴트 값 > 버튼 감추기
  const [showBtn, setShowBtn] = useState(false);

  // 클릭 시 top으로 scroll
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 스크롤 부드럽게
    });
  };

  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 500) {
        // 500만큼 내려오면 버튼 보이기
        setShowBtn(true);
      } else {
        // 그 외엔 false
        setShowBtn(false);
      }
    };

    // 스크롤 발생 시 handleShowButton 실행
    window.addEventListener('scroll', handleShowBtn);

    return () => {
      window.removeEventListener('scroll', handleShowBtn);
    };
  }, []);

  return (
    showBtn && (
      <ScrollTopBtn onClick={moveToTop}>
        <FaArrowAltCircleUp className="top-btn" />
      </ScrollTopBtn>
    )
  );
}

const ScrollTopBtn = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;

  .top-btn {
    font-size: 34px;
    transition: 0.3s;

    &:hover {
      color: ${Color.BLUE200};
    }
  }
`;
