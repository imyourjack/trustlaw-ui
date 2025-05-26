export default function QualificationSection() {
    return (
      <section id="qualification" className="scroll-mt-32 mb-20">
        <h2 className="text-3xl font-bold mb-8">회생/파산 신청자격</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-800 mb-6">
            채무가 총소득을 초과하거나, 상환이 불가능한 상태라면 회생 또는 파산 신청이 가능합니다.
            소득과 재산 상태에 따라 판단되며, 전문가의 상담을 통해 정확히 진단받으실 수 있습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">개인회생</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>신용카드 대금</li>
                <li>대출금</li>
                <li>투자금</li>
                <li>사업자금</li>
              </ul>
            </div>
            <div className="bg-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">파산</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>채무가 소득을 초과</li>
                <li>상환이 불가능한 상태</li>
                <li>일정한 수입이 없음</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }