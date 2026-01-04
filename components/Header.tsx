
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-black tracking-tighter text-teal-600">SPURT</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-teal-600 transition-colors">서비스</a>
            <a href="#" className="hover:text-teal-600 transition-colors">고객센터</a>
            <a href="#" className="hover:text-teal-600 transition-colors">블로그</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 mr-4">
            <button className="hover:text-teal-600">상표검색</button>
            <span className="w-px h-3 bg-slate-300"></span>
            <button className="hover:text-teal-600">장바구니</button>
          </div>
          <button className="text-sm font-semibold text-slate-700 hover:text-teal-600">로그인</button>
          <button className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">
            상표등록 신청하기
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
