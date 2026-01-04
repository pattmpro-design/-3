
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black text-white mb-6">SPURT</h2>
            <p className="text-sm leading-relaxed max-w-md mb-8">
              SPURT는 사업자의 소중한 지식재산권을 보호하기 위해 탄생한 디지털 상표 등록 플랫폼입니다. 
              기술과 전문가가 만나 가장 빠르고 안전한 등록 경험을 선사합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <span className="sr-only">Blog</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 8v-8h-4v-4h4V6c0-4.418 3.582-8 8-8h4v4h-4v4h4v4h-4v4h4c4.418 0 8-3.582 8-8 0-5.523-4.477-10-10-10z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">서비스</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">상표등록 서비스</a></li>
              <li><a href="#" className="hover:text-white transition-colors">해외상표 출원</a></li>
              <li><a href="#" className="hover:text-white transition-colors">상표권 거래소</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용 가이드</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">고객지원</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-white transition-colors">1:1 문의하기</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">© 2024 SPURT Inc. All rights reserved.</p>
          <div className="flex gap-8 text-xs font-bold">
            <a href="#" className="text-white">개인정보처리방침</a>
            <a href="#">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
