import { FaUserCheck, FaBalanceScale, FaCommentsDollar, FaBriefcase, FaUserSecret, FaLaptopHouse } from 'react-icons/fa'
import Link from 'next/link'

export default function QualificationSection() {
  const qaList = [
    {
      icon: <FaUserCheck size={28} className="text-blue-600" />,
      q: 'Q. 개인회생은 누가 신청할 수 있나요?',
      a: '일정한 소득이 있는 분이라면 누구나 신청 가능합니다. 신용불량자도 신청이 가능합니다.',
    },
    {
      icon: <FaBalanceScale size={28} className="text-blue-600" />,
      q: 'Q. 개인파산은 어떤 경우에 가능한가요?',
      a: '채무가 과도하고 상환 능력이 부족한 경우, 특히 일정한 수입이 없거나 장기간 무직 상태라면 가능합니다.',
    },
    {
      icon: <FaCommentsDollar size={28} className="text-blue-600" />,
      q: 'Q. 상담을 통해 어떤 문제를 해결할 수 있나요?',
      a: '카드빚, 대출, 사채는 물론 주식 투자, 가상자산, 도박 채무까지 상담이 가능합니다.',
    },
    {
      icon: <FaBriefcase size={28} className="text-blue-600" />,
      q: 'Q. 회생·파산 후에도 일상생활은 가능한가요?',
      a: '네, 은행거래, 직장생활, 사업 등 정상적인 사회활동에 지장이 없습니다.',
    },
    {
      icon: <FaUserSecret size={28} className="text-blue-600" />,
      q: 'Q. 주변에 알려지지는 않나요?',
      a: '가족이나 직장에 알리지 않으며, 모든 절차는 비공개로 안전하게 진행됩니다.',
    },
    {
      icon: <FaLaptopHouse size={28} className="text-blue-600" />,
      q: 'Q. 꼭 사무실을 방문해야 하나요?',
      a: '방문이 어려운 경우 비대면으로도 충분히 상담 및 신청이 가능합니다.',
    },
  ]

  return (
    <section id="qualification" className="scroll-mt-32 mb-20 py-12 bg-gradient-to-b from-[#e9f1f4] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">
          개인회생 · 파산 신청 자격
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {qaList.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-lg p-6 shadow-md flex gap-4"
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <p className="text-blue-800 font-semibold mb-2">{item.q}</p>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#consult">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
              무료 상담 신청하기
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
