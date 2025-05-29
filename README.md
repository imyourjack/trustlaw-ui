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
├── public/                         # 정적 리소스 (이미지, favicon 등)
├── src/
│   ├── app/                        # App Router 기반 페이지 구성
│   │   ├── layout.tsx             # 전역 레이아웃
│   │   ├── page.tsx               # 메인 페이지
│   │   └── globals.css            # 전역 스타일
│   ├── components/
│   │   └── sections/              # 페이지 구성 섹션별 컴포넌트
│   └── types/                     # 타입 정의 (필요 시 확장)
├── tailwind.config.ts             # Tailwind 설정
├── next.config.js                 # Next.js 설정
├── tsconfig.json                  # TypeScript 설정
└── package.json
```

---

## ✅ TODO

- [x] 메인 `pic_home.webp` 이미지 최적화 및 반응형 대응 - class명 추가
- [ ] 각 메뉴별로 배경 이미지 추가 (텍스트는 가운데 정렬)
- [x] 헤더 메뉴 hover 스타일 보완 / 모바일 버전 햄버거 메뉴 추가
- [ ] 각 섹션별 텍스트 및 콘텐츠 문구 확정
- [ ] 네이버 지도 iframe 영역 재정리 (텍스트와 좌우 배치)
- [ ] 도메인 연결 및 운영 서버(Vercel 또는 기타) 구축
- [ ] SEO 설정 (`metadata`, og:image 등 추가)
- [ ] 구글 애널리틱스 또는 네이버 서치 등록
- [ ] robot.txt & next-sitemap.config.js > 두 파일 URL 실제 배포 URL로 교체 > (now) https://trustlaw.kr

✅ 네이버 사이트 등록 필수
네이버 서치어드바이저 사용:
주소: https://searchadvisor.naver.com

등록 절차:
네이버 계정 로그인

사이트 소유 확인

https://trustlaw.kr 도메인을 넣고

HTML 파일 업로드 or <meta> 태그 삽입 방식 중 택1

사이트맵 등록 (선택사항이지만 추천)

/sitemap.xml 자동 생성 필요 (Next.js에서 설정 가능)
---
