const targetFramerate: number = 60
const singleFrameLength: number = 1000 / targetFramerate
let accumulator: number = 0;

let now: number = 0
let last: number = 0

const convertMS = (ms): number => {
  return +(ms / 1000).toFixed(4)
}

const isFrameStep = (delta): boolean => {
  accumulator += delta
  if (accumulator >= singleFrameLength) {
    accumulator = 0
    return true
  }
}

const loop = (ms): void => {
  last = +ms.toFixed(3)
  const delta: number = +(last - now).toFixed(3)
  now = last

  if (isFrameStep(delta)) {
    // render()
    // update()
  }

  requestAnimationFrame(loop)
}

export default loop
