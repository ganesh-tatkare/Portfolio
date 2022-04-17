import React, { Component, Suspense } from "react";
import Lottie from "react-lottie";

export const LottieAnimation = (props) => {
  const { animationData, width, height } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Lottie
      height={height}
      width={width}
      options={defaultOptions}
      isClickToPauseDisabled={true}
    />
  );
};
