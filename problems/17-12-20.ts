// 4Sum II
export const fourSumCount = (A: number[], B: number[], C: number[], D: number[]): number => {
  const seen: any = {}
  let result: number = 0

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let sum = A[i] + B[j]
      seen[sum] ? seen[sum] += 1 : seen[sum] = 1
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let sum = -1 * (C[i] + D[j])
      if (seen[sum]) {
        result += seen[sum]
      }
    }
  }

  return result
};
