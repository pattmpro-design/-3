
import React from 'react';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            사업 상황에 맞춘 <span className="text-teal-600">SPURT</span> 핵심 서비스
          </h2>
          <p className="text-slate-500">합리적인 비용으로 전문가의 관리를 받으세요.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all hover:translate-y-[-8px] ${
                service.highlight 
                ? 'border-teal-600 shadow-2xl shadow-teal-600/10' 
                : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  가장 추천하는 서비스
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed min-h-[40px]">
                  {service.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-teal-600">{service.price}</span>
                  <span className="text-sm text-slate-400">/건</span>
                  {service.originalPrice && (
                    <span className="text-sm text-slate-400 line-through ml-2">{service.originalPrice}</span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-1">*특허청 관납료 별도 (출원 시 56,000원)</p>
              </div>
              
              <div className="space-y-6 mb-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">이런 분들께 추천!</h4>
                  <ul className="space-y-1">
                    {service.recommendFor.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-teal-500 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">핵심 혜택</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((item, i) => (
                      <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                        <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                service.highlight 
                ? 'bg-teal-600 text-white hover:bg-teal-700 active:scale-95' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95'
              }`}>
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
