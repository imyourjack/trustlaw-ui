export default function ConsultSection() {
    return (
      <section id="consult" className="scroll-mt-32 mb-20">
        <h2 className="text-3xl font-bold mb-8">상담안내</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">상담 방법</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>📞 전화 상담: 02-1234-5678 (평일 09:00~18:00)</li>
                <li>💬 카카오톡 상담: [상담 바로가기]</li>
                <li>🏢 방문 상담: 서울특별시 ○○구 ○○로 123, ○○빌딩 4층</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">상담 혜택</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>모든 상담은 무료</li>
                <li>개인정보 철저 보호</li>
                <li>전문가의 정확한 진단</li>
                <li>법적 조언 제공</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }