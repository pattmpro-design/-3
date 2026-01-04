
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-bold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            15만+ 사업자가 선택한 안전한 서비스
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.15] text-slate-900 mb-8">
            상표 출원부터 등록까지<br />
            <span className="text-teal-600">SPURT</span>가 한 번에<br />
            해결해드립니다.
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
            복잡하고 어려운 상표권 등록, 이제 SPURT 전문가와 함께 실시간으로 진행 상황을 확인하며 가장 쉽고 안전하게 진행하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/30 flex items-center justify-center">
              상표등록 신청하기
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
              수수료 조회하기
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <img 
              src="https://picsum.photos/seed/office/800/600" 
              alt="SPURT Service" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/10 backdrop-blur rounded-xl">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">국내 최대 11만+ 상표 데이터</p>
                  <p className="text-sm text-slate-300">생생한 후기를 지금 바로 확인하세요</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Bar Floating */}
      <div className="max-w-4xl mx-auto px-4 -mb-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="내 상표 이름, 도메인, 서비스명을 검색해보세요"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="bg-teal-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all">
            상표 검색
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
