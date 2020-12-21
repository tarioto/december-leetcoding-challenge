// Smallest Range II
export const smallestRangeII = (A: number[], K: number): number => {
  A.sort((a, b) => a - b)
  const max = A.length
  let result = A[max - 1] - A[0]
  for (let i = 0; i < max - 1; i++) {
    result = Math.min(result, Math.max(A[max - 1], A[i] + 2 * K) - Math.min(A[i + 1], A[0] + 2 * K))
  }
  return result
}
