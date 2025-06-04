import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/utils/animations';
import { PhoneIcon, MapPinIcon, ClockIcon, ShieldCheckIcon, UserCheckIcon, CheckCircleIcon } from 'lucide-react';

export default function ConsultSection() {
  return (
    <motion.section 
      id="consult" 
      className="scroll-mt-32 mb-0 pt-16 pb-24 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer(0.2)}
      style={{
        backgroundImage: 'url(/pic_test.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-blue-900"
          variants={fadeInUp}
        >
          무료 상담 안내
        </motion.h2>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto space-y-10"
          variants={staggerContainer(0.1)}
        >
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer(0.1)}
          >
            {/* 상담 방법 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white/90 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2 flex items-center gap-2">
                <UserCheckIcon className="w-5 h-5 text-blue-700" /> 상담 방법
              </h3>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <PhoneIcon className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong>전화 상담:</strong> <a href="tel:0622242227" className="text-blue-600 hover:underline">062-224-2227</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPinIcon className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <strong>방문 상담:</strong><br />
                    광주 동구 동명로 110 법조타운 4층 404호<br className="hidden md:block" />
                    (지번: 광주 동구 지산동 715-2)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ClockIcon className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <strong>상담 가능 시간:</strong><br />
                    평일 오전 9시 ~ 오후 6시 (주말 및 공휴일 휴무)
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* 상담 혜택 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white/90 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2 flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-blue-700" /> 상담 혜택
              </h3>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" /> 모든 상담은 <strong>무료</strong>입니다
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" /> <strong>개인정보는 철저히 보호</strong>됩니다
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" /> <strong>전문 법무사의 정확한 진단</strong> 제공
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" /> <strong>실질적인 법적 조언</strong>까지 함께 안내
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" /> <strong>신속한 절차 안내</strong>로 빠른 해결 가능
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* 강조 문구 */}
          <motion.div 
            className="text-center mt-8"
            variants={fadeInUp}
          >
            <p className="text-lg text-blue-800 font-medium">
              개인회생, 파산 외에도 다양한 법률문제에 대해 <br className="md:hidden" />친절하게 안내해 드립니다.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              상담은 예약 없이도 가능하며, 빠르고 편하게 문의주세요.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}