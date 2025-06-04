# TrustLaw UI - 회생/파산 전문 법률 상담 웹사이트 (Next.js 버전)

## 📝 프로젝트 개요
개인 및 기업의 회생/파산 관련 법률 상담을 온라인으로 제공하는 반응형 웹사이트입니다.

## 🚀 기술 스택

### 프론트엔드
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Geist, Geist Mono)

### 기타 도구
- ESLint / Prettier
- Vercel (배포 예정)

---

## ⚙️ 개발 환경 설정

1. Node.js LTS 버전 설치 (v18 이상 권장)
2. 레포지토리 클론

```
git clone https://github.com/your-username/trustlaw-ui.git
cd trustlaw-ui
```

3. 의존성 설치

```
npm install
```

---

## 🧪 실행 방법

### 개발 서버 실행
```
npm run dev
```

### 프로덕션 빌드
```
npm run build
```

### 빌드 결과 미리보기
```
npm start
```

---

## 📁 프로젝트 구조

```
trustlaw-ui/
├── public/                      # 정적 파일 (이미지, 아이콘 등)
│   ├── images/                  # 이미지 에셋
│   ├── pic_faq.webp             # FAQ 섹션 배경 이미지
│   ├── pic_home.webp            # 홈 섹션 배경 이미지
│   └── pic_test.webp            # 상담 섹션 배경 이미지
├── src/
│   ├── app/                     # Next.js 13+ App Router
│   │   ├── favicon.ico           # 파비콘
│   │   ├── globals.css           # 전역 스타일
│   │   ├── layout.tsx            # 전역 레이아웃
│   │   └── page.tsx              # 메인 페이지
│   ├── components/
│   │   ├── sections/            # 페이지 구성 섹션별 컴포넌트
│   │   │   ├── ConsultSection.tsx  # 상담 안내 섹션
│   │   │   ├── FaqSection.tsx     # 자주 묻는 질문 섹션
│   │   │   ├── Footer.tsx         # 푸터 컴포넌트
│   │   │   ├── Header.tsx         # 헤더 컴포넌트
│   │   │   ├── HomeSection.tsx    # 홈 섹션
│   │   │   ├── LocationSection.tsx # 오시는 길 섹션
│   │   │   └── QualificationSection.tsx # 신청 자격 섹션
│   │   └── ui/                   # 공통 UI 컴포넌트
│   │       └── Button.tsx         # 버튼 컴포넌트
│   ├── utils/                    # 유틸리티 함수
│   │   └── animations.ts         # 애니메이션 설정
│   └── types/                    # 타입 정의
│       └── index.ts              # 공통 타입 정의
├── .eslintrc.json                # ESLint 설정
├── .gitignore                    # Git 무시 파일
├── next-env.d.ts                 # Next.js 타입 정의
├── next.config.js                # Next.js 설정
├── package-lock.json             # 패키지 잠금 파일
├── package.json                  # 프로젝트 설정 및 의존성
├── postcss.config.js             # PostCSS 설정
├── tailwind.config.ts            # Tailwind CSS 설정
└── tsconfig.json                 # TypeScript 설정
```

---

## ✅ TODO

* 개발
- [x] 메인 `pic_home.webp` 이미지 최적화 및 반응형 대응 - class명 추가
- [x] 각 메뉴별로 배경 이미지 추가 (텍스트는 가운데 정렬) - 회생/파산 신청자격 메뉴는 배경X / 상담안내, 자주하는 질문 메뉴는 배경 넣기
- [x] 헤더 메뉴 hover 스타일 보완 / 모바일 버전 햄버거 메뉴 추가
- [x] 각 섹션별 텍스트 및 콘텐츠 문구 확정
- [x] 오시는 길 - 카카오맵 연동
- [x] 전체적으로 애니메이션 적용

* 배포

- [x] Vercel 배포
- [x] SEO 설정 (`metadata`, og:image 등 추가)
- [ ] 구글 애널리틱스 또는 네이버 서치 등록
- [ ] robot.txt & next-sitemap.config.js > 두 파일 URL 실제 배포 URL로 교체 > (ex) https://trustlaw.kr
- [ ] 도메인 연결

* 고객 문의
- [ ] 네이버지도, 카카오맵 등록할 각각의 id/pw 문의
- [ ] 주차 안내 방법 문의 후 추가
- [ ] 전화번호 확인하기
- [ ] 사업자등록번호 문의
- [ ] 상담 가능 시간 09~18시, 공휴일 휴무에서 연중무휴로 변경할지 문의

* 추가
- [ ] 네이버 블로그 작성

✅ 네이버 사이트 등록 필수
네이버 서치어드바이저 사용:
주소: https://searchadvisor.naver.com

등록 절차:
네이버 계정 로그인

사이트 소유 확인

ex) https://trustlaw.kr 도메인을 넣고

HTML 파일 업로드 or <meta> 태그 삽입 방식 중 택1

사이트맵 등록 (선택사항이지만 추천)

/sitemap.xml 자동 생성 필요 (Next.js에서 설정 가능)
---
