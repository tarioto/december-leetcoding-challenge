// Decoded String at Index
export const decodeAtIndex = (S: string, K: number): string => {
  let [id, length, i] = [K, 0, 0]
  while (i < S.length && length < K) {
    if (isNumber(S[i])) {
      length *= parseInt(S[i])
    } else {
      length++;
    }
    i++;
  }

  i--;
  while (i >= 0 && (length > id || isNumber(S[i]))) {
    if (isNumber(S[i])) {
      length /= parseInt(S[i]);
      id = id % length ? id % length : length;
    }
    else {
      length--;
    }
    i--;
  }
  return S[i];
};

const isNumber = (char: any): boolean => {
  return char >= 0 && char <= 9;
}
