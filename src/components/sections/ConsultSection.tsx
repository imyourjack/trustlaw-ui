export default function ConsultSection() {
  return (
    <section 
      id="consult" 
      className="scroll-mt-32 mb-0 pt-16 relative"
      style={{
        backgroundImage: 'url(/pic_test.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '75vh'
      }}
    >
      <div className="absolute inset-0 bg-white/80" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
          무료 상담 안내
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 상담 방법 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">상담 방법</h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>
                  <span className="font-bold">📞 전화 상담:</span>{' '}
                  <a href="tel:0622242227" className="text-blue-600 hover:underline">062-224-2227</a>
                </li>
                <li>
                  <span className="font-bold">📍 방문 상담:</span><br />
                  광주 동구 동명로 110 법조타운 4층 404호<br className="hidden md:block" />
                  (지번: 광주 동구 지산동 715-2)
                </li>
                <li>
                  <span className="font-bold">⏰ 상담 가능 시간:</span><br />
                  평일 오전 9시 ~ 오후 6시 (주말 및 공휴일 휴무)
                </li>
              </ul>
            </div>

            {/* 상담 혜택 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">상담 혜택</h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>✅ <strong>모든 상담은 무료</strong>입니다</li>
                <li>✅ <strong>개인정보는 철저히 보호</strong>됩니다</li>
                <li>✅ <strong>전문 법무사의 정확한 진단</strong> 제공</li>
                <li>✅ <strong>실질적인 법적 조언</strong>까지 함께 안내</li>
                <li>✅ <strong>신속한 절차 안내</strong>로 빠른 해결 가능</li>
              </ul>
            </div>
          </div>

          {/* 강조 문구 */}
          <div className="text-center mt-10">
            <p className="text-lg text-blue-800 font-medium">
              개인회생, 파산 외에도 다양한 법률문제에 대해 <br className="md:hidden" />친절하게 안내해 드립니다.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              상담은 예약 없이도 가능하며, 빠르고 편하게 문의주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}