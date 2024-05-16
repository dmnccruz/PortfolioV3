"use client";

import Lottie, { LottieRef } from "lottie-react";
import { CSSProperties } from "react";

export interface LottieIconInterface {
  icon: object;
  lottieRef?: LottieRef;
  loop?: boolean;
  style?: CSSProperties;
}

export const LottieIcon: React.FC<LottieIconInterface> = ({
  icon,
  lottieRef,
  style,
  loop,
}) => {
  return (
    <Lottie
      style={style}
      lottieRef={lottieRef}
      loop={loop}
      animationData={icon}
    />
  );
};
