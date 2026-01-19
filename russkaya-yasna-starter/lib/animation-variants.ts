import { animationDurations, animationEasings, animationStagger } from "@/lib/animation-config";

type MotionPresetOptions = {
  reduceMotion?: boolean;
  delay?: number;
};

const motionTransition = (
  reduceMotion: boolean,
  duration: number,
  ease: number[] | { type: "spring"; stiffness: number; damping: number },
  delay = 0
) => ({
  duration: reduceMotion ? 0 : duration,
  ease: reduceMotion ? undefined : ease,
  delay: reduceMotion ? 0 : delay,
});

export const fadeIn = ({ reduceMotion, delay = 0 }: MotionPresetOptions = {}) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: motionTransition(
      Boolean(reduceMotion),
      animationDurations.normal,
      animationEasings.easeOut,
      delay
    ),
  },
  exit: {
    opacity: 0,
    transition: motionTransition(Boolean(reduceMotion), animationDurations.fast, animationEasings.easeIn),
  },
});

export const fadeInUp = ({ reduceMotion, delay = 0 }: MotionPresetOptions = {}) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition(
      Boolean(reduceMotion),
      animationDurations.normal,
      animationEasings.easeOut,
      delay
    ),
  },
  exit: {
    opacity: 0,
    y: reduceMotion ? 0 : 8,
    transition: motionTransition(Boolean(reduceMotion), animationDurations.fast, animationEasings.easeIn),
  },
});

export const fadeInDown = ({ reduceMotion, delay = 0 }: MotionPresetOptions = {}) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition(
      Boolean(reduceMotion),
      animationDurations.normal,
      animationEasings.easeOut,
      delay
    ),
  },
  exit: {
    opacity: 0,
    y: reduceMotion ? 0 : -8,
    transition: motionTransition(Boolean(reduceMotion), animationDurations.fast, animationEasings.easeIn),
  },
});

export const slideInLeft = ({ reduceMotion, delay = 0 }: MotionPresetOptions = {}) => ({
  hidden: { opacity: 0, x: reduceMotion ? 0 : -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: motionTransition(
      Boolean(reduceMotion),
      animationDurations.normal,
      animationEasings.easeOut,
      delay
    ),
  },
});

export const slideInRight = ({ reduceMotion, delay = 0 }: MotionPresetOptions = {}) => ({
  hidden: { opacity: 0, x: reduceMotion ? 0 : 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: motionTransition(
      Boolean(reduceMotion),
      animationDurations.normal,
      animationEasings.easeOut,
      delay
    ),
  },
});

export const scaleIn = ({ reduceMotion, delay = 0 }: MotionPresetOptions = {}) => ({
  hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: motionTransition(
      Boolean(reduceMotion),
      animationDurations.normal,
      animationEasings.easeOut,
      delay
    ),
  },
});

export const staggerChildren = (reduceMotion?: boolean, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduceMotion ? 0 : animationStagger,
      delayChildren: reduceMotion ? 0 : delayChildren,
    },
  },
});

export const listItemVariants = (reduceMotion?: boolean) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition(
      Boolean(reduceMotion),
      animationDurations.fast,
      animationEasings.easeOut
    ),
  },
});

export const cardVariants = (reduceMotion?: boolean) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition(
      Boolean(reduceMotion),
      animationDurations.normal,
      animationEasings.easeOut
    ),
  },
});

export const buttonVariants = (reduceMotion?: boolean) => ({
  rest: { scale: 1 },
  hover: {
    scale: reduceMotion ? 1 : 1.05,
    transition: motionTransition(Boolean(reduceMotion), animationDurations.fast, animationEasings.easeOut),
  },
  tap: { scale: reduceMotion ? 1 : 0.95 },
});
