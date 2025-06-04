import { motion } from 'framer-motion';
import { FaUserCheck, FaBalanceScale, FaCommentsDollar, FaBriefcase, FaUserSecret, FaLaptopHouse } from 'react-icons/fa';
import Link from 'next/link';
import { fadeIn, fadeInUp, staggerContainer, viewportOptions } from '@/utils/animations';

export default function QualificationSection() {
  const qaList = [
    {
      icon: <FaUserCheck size={28} className="text-blue-600" />,
      q: 'Q. 최근 6개월 이상 꾸준한 소득이 있나요?',
      a: '네, 일정한 수입이 있는 경우 개인회생 신청 자격이 있습니다. 급여소득, 프리랜서, 자영업자 모두 포함됩니다.',
    },
    {
      icon: <FaBalanceScale size={28} className="text-blue-600" />,
      q: 'Q. 총 채무가 감당하기 어려운 수준인가요?',
      a: '신용카드 연체, 금융권·사채 대출, 투자 실패 등으로 채무가 소득을 초과하는 경우 회생이나 파산 신청 대상이 될 수 있습니다.',
    },
    {
      icon: <FaCommentsDollar size={28} className="text-blue-600" />,
      q: 'Q. 본인 명의의 재산이 많지 않은가요?',
      a: '주택, 차량, 예금 등의 재산이 제한적이라면 채무 조정이 가능합니다. 회생과 파산 모두 재산 상황이 중요한 기준입니다.',
    },
    {
      icon: <FaBriefcase size={28} className="text-blue-600" />,
      q: 'Q. 향후 3~5년간 꾸준히 상환이 가능한가요?',
      a: '정기적인 수입이 있어 변제 계획을 실행할 수 있다면 개인회생이 적합합니다. 수입이 없다면 개인파산이 검토됩니다.',
    },
    {
      icon: <FaUserSecret size={28} className="text-blue-600" />,
      q: 'Q. 채무로 인해 독촉·압류 등 피해를 받고 있나요?',
      a: '채권자의 독촉, 급여 압류 등이 있다면 법원의 중지명령을 통해 즉시 보호받을 수 있습니다.',
    },
    {
      icon: <FaLaptopHouse size={28} className="text-blue-600" />,
      q: 'Q. 사무실 방문 없이 신청하고 싶으신가요?',
      a: '방문이 어려운 경우에도 전화를 통해 비대면으로 회생/파산 절차 진행이 가능합니다.',
    },
  ]

  return (
    <motion.section 
      id="qualification" 
      className="scroll-mt-32 mb-20 py-12 bg-gradient-to-b from-[#d4e4ed] to-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer(0.2)}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center text-blue-900"
          variants={fadeInUp}
        >
          개인회생 · 파산 신청 자격
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12"
          variants={staggerContainer(0.1)}
        >
          {qaList.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-blue-100 rounded-lg p-6 shadow-md flex gap-4"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          variants={fadeInUp}
        >
          <Link href="#consult">
            <motion.button 
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              무료 상담 신청하기
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
