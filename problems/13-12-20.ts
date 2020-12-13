// Burst Balloons
export const maxCoins = (nums: number[]): number => {
  const temp: number[] = [1]
  const dp: number[][] = []

  for (let i = 0; i < nums.length; i++) {
    temp[i + 1] = nums[i]
  }
  temp[nums.length + 1] = 1

  const len = temp.length

  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < len; j++) {
      dp[i].push(0);
    }
  }

  for (let win = 1; win < len; win++) {
    for (let left = 0; left + win < len; left++) {
      for (let right = left + 1; right < left + win; right++) {
        dp[left][left + win] = Math.max(
          dp[left][left + win],
          dp[left][right] + dp[right][left + win] + temp[right] * temp[left] * temp[left + win]
        );

      }
    }
  }
  return dp[0][len - 1];
};
