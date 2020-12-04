// The kth Factor of n
export const kthFactor = (n: number, k: number): number => {
  const factors: number[] = []

  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      factors.push(i)
    }
  }

  return factors[k - 1] || -1
};
