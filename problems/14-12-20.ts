// Palindrome Partitioning
export const partition = (s: string): string[][] => {
  const result: string[][] = []
  if (s.length === 0) {
    return result
  }

  generate(s, 0, [], result)

  return result
};


const generate = (s: string, index: number, output: string[], result: string[][]) => {
  if (index === s.length) {
    result.push(output.slice())
    return
  }

  let n = s.length
  for (let high = index; high < n; high++) {
    if (isPalindrome(s, index, high)) {
      output.push(s.substring(index, high + 1))
      generate(s, high + 1, output, result)
      output.pop()
    }
  }
}

const isPalindrome = (s: string, low: number, high: number): boolean => {
  while (low <= high) {
    if (s[low] !== s[high]) {
      return false
    }
    low++
    high--
  }

  return true
}
