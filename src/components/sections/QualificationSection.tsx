export default function QualificationSection() {
  return (
    <section id="qualification" className="scroll-mt-32 mb-20">
      <h2 className="text-3xl font-bold mb-8">개인회생·파산 신청 자격</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
      <p className="text-lg text-gray-800 mb-6">
        광주, 전남 지역을 중심으로, 전국 어디서든 개인회생과 파산 상담이 가능합니다. <br />
        관할 법원 절차는 물론, 부동산등기, 민사소송(물품대금·공사대금 등), 이혼·상속 등 가사사건까지 폭넓게 지원합니다.
      </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">개인회생</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>신용카드 대금</li>
              <li>대출금</li>
              <li>투자금</li>
              <li>사업자금</li>
              <li>물품대금, 공사대금 등 민사채권 조정</li>
            </ul>
          </div>
          <div className="bg-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">개인파산</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>채무가 소득을 초과</li>
              <li>상환이 불가능한 상태</li>
              <li>지속적인 수입이 없는 경우</li>
              <li>광주 법원 개인파산 신청 가능</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}