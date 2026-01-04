
import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            쉽고 간편한 <span className="text-teal-600">4단계 절차</span>로<br />
            올바른 상표 등록을 도와드립니다.
          </h2>
          <p className="text-slate-500">방문 없이 3분 만에 신청을 완료하세요.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '01', title: '온라인 3분 신청', desc: '휴대폰·PC로 언제 어디서나 간편 상표등록 신청 시스템' },
            { step: '02', title: '동일 상표 검토', desc: '상표 전문 변리사 검수 하에 담당 매니저와 1:1 상담 진행' },
            { step: '03', title: '신청 내역 확인', desc: '이메일, 카톡으로 신청 내역 안내 후 최종 동의 시 진행' },
            { step: '04', title: '출원 완료', desc: '특허청 심사 결과 통지 시 이메일·카톡으로 즉시 안내' }
          ].map((item, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all group">
              <span className="text-6xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-teal-50 transition-colors">
                {item.step}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-12 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              언제 어디서나 1:1 상담<br />
              <span className="text-teal-600">실시간 진행 상황</span> 확인까지
            </h3>
            <p className="text-slate-500 mb-8">
              사업에만 집중할 수 있도록 SPURT만의 전담 시스템이 함께합니다.
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
              상담 등록 신청하기
            </button>
          </div>
          <div className="flex-1 w-full max-w-md">
            {/* Chat Mockup */}
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                  고객님의 상표가 7월 15일 자로 특허청에 신청 완료되었습니다! 🎉
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-teal-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                  제가 신청한 내용은 어디서 확인할 수 있나요?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                  마이페이지에서 신청 내용을 상시 확인 가능합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
