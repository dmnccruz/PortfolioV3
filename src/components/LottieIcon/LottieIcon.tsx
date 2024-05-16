"use client";

import Lottie, { LottieRef } from "lottie-react";
import { CSSProperties } from "react";

export interface LottieIconInterface {
  icon: object;
  lottieRef?: LottieRef;
  loop?: boolean;
  style?: CSSProperties;
  height?: number;
}

export const LottieIcon: React.FC<LottieIconInterface> = ({
  icon,
  lottieRef,
  style,
  height,
  loop,
}) => {
  return (
    <Lottie
      style={{ height: height, ...style }}
      lottieRef={lottieRef}
      loop={loop}
      animationData={icon}
    />
  );
};
