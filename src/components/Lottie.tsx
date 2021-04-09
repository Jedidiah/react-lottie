import React, { useEffect, useRef, useState } from "react";
import LottiePlayer, {
  AnimationItem,
  AnimationSegment,
  CanvasRendererConfig,
  HTMLRendererConfig,
  SVGRendererConfig,
} from "lottie-web";

export type LottieProps = {
  renderer?: "svg" | "canvas" | "html";
  loop?: boolean | number;
  playState?: "playing" | "paused" | "stopped";
  initialSegment?: AnimationSegment;
  name?: string;
  assetsPath?: string;
  direction?: -1 | 1;
  speed?: number;
  rendererSettings?:
    | SVGRendererConfig
    | CanvasRendererConfig
    | HTMLRendererConfig;
  path?: string;
  animationData?: any;
  width?: string;
  height?: string;
};

function Lottie({
  renderer,
  loop,
  playState = "playing",
  initialSegment,
  name,
  assetsPath,
  rendererSettings,
  direction = 1,
  speed = 1,
  path,
  animationData,
  width,
  height,
}: LottieProps) {
  const playerContainer = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<AnimationItem | null>(null);

  useEffect(() => {
    if (playerContainer.current !== null) {
      const currentAnimation = LottiePlayer.loadAnimation({
        container: playerContainer.current,
        renderer,
        loop,
        autoplay: Boolean(playState === "playing"),
        initialSegment,
        name,
        assetsPath,
        rendererSettings,
        path,
        animationData,
      });
      setAnimation(currentAnimation);
      return () => {
        currentAnimation?.destroy();
      };
    }
  }, [playerContainer, assetsPath, renderer, loop, path]);

  useEffect(() => {
    animation?.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    animation?.setDirection(direction);
  }, [direction]);

  useEffect(() => {
    if (playState === "playing") {
      animation?.play();
    }

    if (playState === "paused") {
      animation?.pause();
    }

    if (playState === "stopped") {
      animation?.stop();
    }
  }, [playState]);

  return <div style={{ width, height }} ref={playerContainer}></div>;
}

export default Lottie;
