import Image from 'next/image'

export default function FaqSection() {
  const faqs = [
    {
      q: 'Q. 신용불량자도 개인회생 신청이 가능한가요?',
      a: '네, 가능합니다. 일정한 수입이 있다면 법원 인가를 받을 수 있습니다.',
    },
    {
      q: 'Q. 파산하면 모든 재산을 잃게 되나요?',
      a: '아니요. 기초생활에 필요한 일부 재산은 보호받을 수 있습니다.',
    },
    {
      q: 'Q. 신청하면 바로 채권추심이 중단되나요?',
      a: '네. 회생·파산 신청이 접수되면 법원에서 ‘중지명령’을 내릴 수 있으며, 이후에는 채권자의 독촉이나 압류가 중단됩니다.',
    },
    {
      q: 'Q. 회생 절차는 얼마나 걸리나요?',
      a: '보통 3~6개월 이내에 개시결정이 나오며, 이후 변제 기간은 3~5년입니다.',
    },
    {
      q: 'Q. 회생 중에도 재산을 가질 수 있나요?',
      a: '예, 회생 절차 중이라도 소득 활동과 재산 형성이 가능합니다. 다만 법원에 성실히 보고해야 하며, 채무 변제에 영향을 주지 않아야 합니다.',
    },
  ];

  return (
    <section
      id="faq"
      className="relative scroll-mt-32 py-20 mb-20 min-h-[700px] overflow-hidden z-0 text-gray-900"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-[-1]">
        <div className="relative w-full h-full">
          <Image
            src="/pic_faq.webp"
            alt="자주 묻는 질문 배경"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* ✅ 더 짙은 밝은 오버레이 */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
        </div>
      </div>

      {/* 내용 */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900 drop-shadow-sm">
          자주 묻는 질문
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-lg p-6 shadow-md border border-gray-200 backdrop-blur-sm"
            >
              <p className="text-blue-800 font-semibold mb-2">{item.q}</p>
              <p className="text-gray-800 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
