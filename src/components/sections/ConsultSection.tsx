export default function ConsultSection() {
  return (
    <section id="consult" className="scroll-mt-32 mb-20 py-12 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
          무료 상담 안내
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 상담 방법 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">상담 방법</h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>
                  <strong>전화 상담</strong>: <a href="tel:0622242227" className="text-blue-600 hover:underline">062-224-2227</a>
                </li>
                <li>
                  <strong>방문 상담</strong>:  
                  <br />
                  광주 동구 동명로 110 법조타운 4층 404호  
                  <br className="hidden md:block" />
                  (지번: 광주 동구 지산동 715-2)
                </li>
              </ul>
            </div>

            {/* 상담 혜택 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">상담 혜택</h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>✔️ 모든 상담은 <strong>무료</strong>입니다</li>
                <li>✔️ <strong>개인정보는 철저히 보호</strong>됩니다</li>
                <li>✔️ <strong>전문 법무사의 정확한 진단</strong> 제공</li>
                <li>✔️ <strong>실질적인 법적 조언</strong>까지 함께 안내</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
