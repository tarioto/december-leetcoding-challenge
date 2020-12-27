// Jump Game IV
export const minJumps = (arr: number[]): number => {
  const map: any = arr.reduce((acc: any, num: number, index: number) => {
    acc[num] = acc[num] || []
    acc[num].push(index)
    return acc
  }, {})
  const visited: any = {
    0: true,
  }
  let current = [0]
  let steps = 0

  while (current.length > 0) {
    const next: number[] = []
    const push = (index: number) => {
      if (index > 0 && index < arr.length && !visited[index]) {
        visited[index] = true
        next.push(index)
      }
    }

    for (const index of current) {
      if (index === arr.length - 1) {
        return steps
      }
      push(index + 1)
      push(index - 1)
      const indices: number[] = map[arr[index]] || []
      for (const index2 of indices) {
        push(index2)
      }
      delete map[arr[index]]
    }
    steps += 1
    current = next
  }
  return steps
}
