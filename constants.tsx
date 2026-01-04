
import React from 'react';
import { Review, ServiceCardProps } from './types';

export const PRIMARY_COLOR = 'text-teal-600';
export const PRIMARY_BG = 'bg-teal-600';

export const SERVICES: ServiceCardProps[] = [
  {
    title: '간편출원',
    price: '49,000원',
    originalPrice: '99,000원',
    description: '동일 상표 여부만 간단히 확인하고 확정하여 상표등록 진행하는 서비스',
    recommendFor: ['상표를 바로 사용하고 있어 변경이 어려운 분'],
    benefits: [
      '독점적인 실시간 출원 번호 안내',
      '상표 관리 법무 설정 1:1 상담',
      '상표 출원 상담 및 관리',
      '상표권 120% 활용 가이드북'
    ],
    buttonText: '서비스 비용 알아보기'
  },
  {
    title: '조사출원',
    price: '99,000원',
    originalPrice: '154,000원',
    description: '등록 가능 여부 확인하고 상표등록 신청 여부 결정하는 서비스',
    recommendFor: ['등록 가능성이 높은 조사 후 출원 여부 결정'],
    benefits: [
      '변리사가 직접 작성한 전문 조사 보고서 제공',
      '상표 등록 가능성 확인 후 전략적 상표 출원',
      '프리미엄 네이밍 가이드북 제공'
    ],
    buttonText: '서비스 비용 알아보기'
  },
  {
    title: '종합출원',
    price: '249,000원',
    originalPrice: '479,000원',
    description: '조사출원 패키지에 우선심사 서비스까지 포함된 프리미엄 서비스',
    recommendFor: ['3개월 안에 상표 심사 결과를 빨리 보고 싶은 분'],
    benefits: [
      '상표권 침해 경고문 샘플 양식 제공',
      '심사기간 15개월 이상 → 3개월로 단축',
      '조사부터 출원까지 원스톱 패키지 서비스'
    ],
    buttonText: '서비스 비용 알아보기',
    highlight: true
  }
];

export const REVIEWS: Review[] = [
  { id: 1, author: '김OO님', rating: 5, text: '신속하고 정확하게 처리해주셔서 감사합니다. 처음이라 걱정했는데 상담도 친절하네요.', serviceType: '간편출원 서비스' },
  { id: 2, author: '이OO님', rating: 5, text: '조사보고서가 아주 디테일해서 믿음이 갔습니다. 덕분에 안심하고 사업 시작합니다.', serviceType: '조사출원 패키지' },
  { id: 3, author: '박OO님', rating: 5, text: '우선심사 덕분에 정말 빠르게 등록 완료되었습니다. 사업 일정에 딱 맞았어요.', serviceType: '종합출원 패키지' },
  { id: 4, author: '최OO님', rating: 4, text: '합리적인 가격에 전문적인 관리를 받을 수 있어 만족합니다.', serviceType: '간편출원 서비스' },
  { id: 5, author: '정OO님', rating: 5, text: 'SPURT를 선택하길 잘했네요. UI가 직관적이고 과정이 투명합니다.', serviceType: '조사출원 패키지' },
  { id: 6, author: '유OO님', rating: 5, text: '상표권 가이드북이 정말 유용했습니다. 사업 확장에 큰 도움이 되겠어요.', serviceType: '종합출원 패키지' }
];

export const PARTNERS = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  name: `Partner ${i + 1}`,
  logo: `https://picsum.photos/seed/${i + 123}/120/60`
}));
