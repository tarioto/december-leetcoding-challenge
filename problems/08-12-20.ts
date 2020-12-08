// Pairs of Songs With Total Durations Divisible by 60
export const numPairsDivisibleBy60 = (time: number[]): number => {
  let result: number = 0
  for (let i = 0; i < time.length; i++) {
    for (let j = i+1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        result++
      }
    }
  }
  return result
};
