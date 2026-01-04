
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { PARTNERS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Quick Stats Section */}
        <section className="bg-white py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-black text-teal-600 mb-1">115,420</div>
              <div className="text-sm text-slate-500 font-medium">상표 출원 건수</div>
            </div>
            <div className="text-center border-l border-slate-100">
              <div className="text-2xl font-black text-teal-600 mb-1">56,790</div>
              <div className="text-sm text-slate-500 font-medium">누적 회원수</div>
            </div>
            <div className="text-center border-l border-slate-100">
              <div className="text-2xl font-black text-teal-600 mb-1">9.8/10</div>
              <div className="text-sm text-slate-500 font-medium">고객 만족도</div>
            </div>
            <div className="text-center border-l border-slate-100">
              <div className="text-2xl font-black text-teal-600 mb-1">20,123</div>
              <div className="text-sm text-slate-500 font-medium">성공 사례</div>
            </div>
          </div>
        </section>

        <Benefits />
        <Services />
        <Process />
        
        {/* Partner Logos Section */}
        <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                1만 사업자부터 스타트업, 공공기관이 선택한<br />
                <span className="text-teal-600">SPURT</span>의 전문성
              </h2>
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {PARTNERS.map(partner => (
                <div key={partner.id} className="aspect-[2/1] bg-slate-50 rounded-lg flex items-center justify-center p-4">
                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reviews />

        {/* Floating Action Button for Mobile */}
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <button className="bg-teal-600 text-white p-4 rounded-full shadow-2xl shadow-teal-600/50 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
