import { Variants } from 'framer-motion';

const baseTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // 부드러운 이징
};

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: baseTransition,
  },
};

export const staggerContainer = (delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: delayChildren,
    },
  },
});

export const viewportOptions = {
  once: true,
  margin: '0px 0px -100px 0px',
};

// 성능 최적화를 위한 CSS 속성
export const optimizeAnimation = {
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden' as const,
  WebkitFontSmoothing: 'antialiased' as const,
  WebkitTransform: 'translateZ(0)',
  transform: 'translateZ(0)',
};
