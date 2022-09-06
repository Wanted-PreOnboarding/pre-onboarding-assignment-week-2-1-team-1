import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <img src="" alt="메인로고" />
      <div>검색바</div>
      <nav>
        <Link to="/">현재 상영작 </Link>
        <Link to="/">상영 예정 </Link>
        <Link to="/">영화 순위</Link>
      </nav>
    </div>
  );
}

export default Header;
