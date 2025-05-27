export default function HomeSection() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/pic_home.webp"
          alt="광주 법무사 메인 배경"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative w-full text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          광주 개인회생·개인파산, 민사·가사·등기 법률상담 전문
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          부동산등기, 법인등기, 물품대금·손해배상 등 민사소송, 이혼·상속·개명 등 가사사건까지
          광주 지역 법률 문제를 신속하게 해결합니다.
        </p>
        <div className="flex justify-center gap-4">
          <a href="tel:0212345678">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              상담 예약하기
            </button>
          </a>
          <button
            onClick={() => document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            상담 방법 알아보기
          </button>
        </div>
      </div>
    </section>
  )
}
