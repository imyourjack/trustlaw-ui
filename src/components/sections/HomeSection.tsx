import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { imageBlurData } from '@/utils/performance';
import { staggerContainer } from '@/utils/animations'; // fadeInUp은 사용하지 않으므로 제거

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
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/pic_home_mb.webp"
          alt="법무사 사무소 배경 이미지"
          fill
          priority
          className="object-cover"
          quality={85}
          placeholder="blur"
          blurDataURL={imageBlurData}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <motion.div 
        ref={ref}
        className="relative h-full flex flex-col items-center justify-center px-4 text-white text-center"
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate={controls}
      >
        <div className="container mx-auto max-w-4xl">
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
        </div>
      </motion.div>
    </section>
  );
}
