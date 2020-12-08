// Pairs of Songs With Total Durations Divisible by 60
export const numPairsDivisibleBy60 = (time: number[]): number => {
  let result: number = 0
  const map: any = {}

  for (const t of time) {
    let remainder = t % 60
    result += map[(60 - remainder) % 60] || 0
    map[remainder] = (map[remainder] || 0) + 1
  }

  return result
};
