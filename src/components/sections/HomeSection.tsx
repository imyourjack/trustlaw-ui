import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HomeSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(/pic_home_mb.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '75vh'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <motion.div 
        ref={ref}
        className="relative w-full text-white text-center px-4"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          variants={item}
        >
          개인회생 · 파산 전문 법무사사무소
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 leading-relaxed"
          variants={item}
        >
          광주·전남을 중심으로, 전국 어디서든 회생·파산 상담이 가능합니다. <br />
          부동산등기, 법인등기, 민사소송(물품대금·손해배상),<br className="hidden md:block" />
          이혼·상속·개명 등 가사사건까지 신속하고 정확하게 도와드립니다.
        </motion.p>

        <motion.div 
          className="flex justify-center gap-4 flex-wrap"
          variants={item}
        >
          <a href="tel:0212345678">
            {/* <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              상담 예약하기
            </button> */}
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('consult');
              if (element) {
                const yOffset = -80; // 헤더 높이만큼 조정
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            상담 방법 알아보기
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
