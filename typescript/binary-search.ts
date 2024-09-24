export function find<T>(haystack: T[], needle: T): number | never {
  if (haystack.length === 0) {
    throw new Error("Value not in array");
  }

  let arraySlice: T[] = [...haystack];
  while (arraySlice.length > 0) {
    const index = getArrayMiddleIndex(arraySlice);
    const middleElement = arraySlice[index];
    if (middleElement === needle) {
      return haystack.indexOf(middleElement);
    }
    if (arraySlice.length === 1) {
      throw new Error("Value not in array");
    }
    if (middleElement < needle) {
      arraySlice.splice(0, index);
    } else {
      arraySlice.splice(index);
    }
  }

  throw new Error("Value not in array");
}

function getArrayMiddleIndex(array: unknown[]): number {
  return Math.floor(array.length / 2);
}
