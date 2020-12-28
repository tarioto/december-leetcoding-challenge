// Reach a Number
export const reachNumber = (target: number): number => {
  let step: number = 0
  let current: number = 0
  target = Math.abs(target)

  while (current < target || (current - target) % 2 !== 0) {
    step += 1
    current += step
  }

  return step
}
