// Next Greater Element III
export const nextGreaterElement = (n: number): number => {
  let list: string[] = (n + '').split('')
  list.sort((b, a) => parseInt(a) - parseInt(b))
  if (n + '' === list.join('')) {
      return -1
  }
  let l: string[] = (n + '').split('')
  let index: number = -1
  for (let i = l.length - 2; i >= 0; i--) {
      if (l[i] < l[i + 1]) {
          index = i
          break
      }
  }
  let key: string = l[index]
  let sub: string[] = l.splice(index)
  sub.sort((a, b) => parseInt(a) - parseInt(b))
  let ind: number = sub.lastIndexOf(key) + 1
  l.push(sub[ind])
  sub.splice(ind, 1)
  l.push(...sub)
  let res: number = parseInt(l.join(''))
  const max: number = 2147483647

  return res < max ? res : -1
}
