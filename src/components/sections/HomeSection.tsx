export default function HomeSection() {
    return (
      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/pic_home.webp"
            alt="메인 배경"
            className="w-full h-full object-fill"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative w-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">채무 해결 전문가</h1>
          <p className="text-xl md:text-2xl mb-8">신뢰와 경험으로 당신의 채무 문제를 해결합니다</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">상담 예약하기</button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors">상담 방법 알아보기</button>
          </div>
        </div>
      </section>
    )
  }