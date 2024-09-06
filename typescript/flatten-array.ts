export function flatten(array: unknown[]): unknown[] {
  return array.reduce<unknown[]>((accumulator, item) => {
    if (Array.isArray(item)) {
      accumulator.push(...flatten(item));
    } else if (item !== null && item !== undefined) {
      accumulator.push(item);
    }
    return accumulator;
  }, []);
}
