const COMMANDS = ["wink", "double blink", "close your eyes", "jump"];

export function commands(input: number): string[] {
  if (input === 0) {
    return [];
  }
  const binary = input.toString(2);

  const lastIndex = binary.length - 1;

  return [...binary].reduceRight<string[]>((result, binaryDigit, i) => {
    if (binaryDigit === "1") {
      const indexRight = lastIndex - i;
      if (indexRight >= COMMANDS.length) {
        result.reverse();
      } else {
        result.push(COMMANDS[indexRight]);
      }
    }
    return result;
  }, []);
}
