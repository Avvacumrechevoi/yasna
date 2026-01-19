export const animationDurations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
};

export const animationDurationsMs = {
  fast: 200,
  normal: 300,
  slow: 500,
};

export const animationEasings = {
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: { type: "spring", stiffness: 220, damping: 20 },
};

export const animationStagger = 0.1;

export function getMotionPreference({
  prefersReducedMotion,
  hardwareConcurrency,
}: {
  prefersReducedMotion: boolean;
  hardwareConcurrency?: number | null;
}) {
  const lowEndDevice = typeof hardwareConcurrency === "number" && hardwareConcurrency <= 4;
  const reduceMotion = prefersReducedMotion || lowEndDevice;
  return { reduceMotion, lowEndDevice };
}
