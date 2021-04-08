# react-lottie

A proof of concept lightweight wrapper around lottie-web. Very alpha.

---

## Usage

`yarn add @jedidiah/react-lottie`
`npm install --save @jedidiah/react-lottie`


`import { Lottie } from '@jedidiah/react-lottie';`

`<Lottie animationData={lottieJson} />`

Play State: "playing" | "paused" | "stopped"
`<Lottie animationData={lottieJson} playState={playState} />`

Speed and direction: number
`<Lottie animationData={lottieJson} speed={1} direction={-1} />`

Loop: number | boolean
`<Lottie animationData={lottieJson} loop={3} />`
`<Lottie animationData={lottieJson} loop={true} />`

Renderer: "svg" | "canvas" | "html";
`<Lottie animationData={lottieJson} renderer="canvas" />`

rendererSettings: See https://github.com/airbnb/lottie-web#other-loading-options
`<Lottie animationData={lottieJson} rendererSettings={rendererSettings} />`