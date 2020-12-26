// Decode Ways
export const numDecodings = (s: string): number => {
  const memo = new Map()
  return decode(s, memo)
}

export const decode = (s: string, memo: any): number => {
  if (s[0] === '0') {
    return 0
  }

  if (s.length <= 1) {
    return 1
  }

  if (memo.has(s)) {
    return memo.get(s)
  }

  let decodings = 0
  let option1Diget = s.slice(0, 1)
  let option1Rest = s.slice(1)
  let option2Diget = s.slice(0, 2)
  let option2Rest = s.slice(2)

  decodings += decode(option1Rest, memo)

  if (Number(option2Diget) <= 26) {
    decodings += decode(option2Rest, memo)
  }

  memo.set(s, decodings)

  return decodings
}
