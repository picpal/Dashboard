/**
 * recursion deep copy
 * lodash를 적용하려 했으나, 예상치 못한 오류로 적용하지 않음.
 */
export const deepCopy = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
};
