export default function FaqSection() {
    return (
        <section id="faq" className="scroll-mt-32 mb-20">
        <h2 className="text-3xl font-bold mb-8">자주하는 질문</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="border-b pb-4">
            <h3 className="font-semibold mb-2">Q1. 신용불량자도 개인회생 신청이 가능한가요?</h3>
            <p className="text-gray-700">네, 가능합니다. 일정한 수입이 있다면 법원 인가를 받을 수 있습니다.</p>
            </div>
            <div className="border-b pb-4">
            <h3 className="font-semibold mb-2">Q2. 파산하면 모든 재산을 잃게 되나요?</h3>
            <p className="text-gray-700">아니요. 기초생활에 필요한 일부 재산은 보호받을 수 있습니다.</p>
            </div>
            <div className="border-b pb-4">
            <h3 className="font-semibold mb-2">Q3. 회생 절차는 얼마나 걸리나요?</h3>
            <p className="text-gray-700">보통 3~6개월 이내에 개시결정이 나오며, 이후 변제 기간은 3~5년입니다.</p>
            </div>
        </div>
        </section>
    )
  }