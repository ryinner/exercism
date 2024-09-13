enum Operations {
  plus = "plus",
  minus = "minus",
  multiplied = "multiplied",
  divided = "divided",
}

function tokenize(question: string): string[] {
  const expression = question.replace(/What is\s?|\?|(\sby)/gm, "").trim();
  if (expression.length === 0) {
    throw new Error("Syntax error");
  }

  return expression.split(" ");
}

export function answer(question: string): number {
  if (!question.startsWith("What is")) {
    throw new Error("Unknown operation");
  }
  const tokens = tokenize(question);
  let previousToken: string | number | undefined;
  return tokens.reduce((result, token, index) => {
    const tokenIsInt = token.match(/[\-\d]+/) !== null;
    const previousTokenIsInt =
      typeof previousToken === "number" ||
      (typeof previousToken === "string" &&
        previousToken.match(/[\-\d]+/) !== null);
    const isFirst = index === 0;
    const isLast = index === tokens.length - 1;
    if (
      tokenIsInt === previousTokenIsInt ||
      (!tokenIsInt && (isFirst || isLast))
    ) {
      if (!tokenIsInt && !(token in Operations)) {
        throw new Error("Unknown operation");
      }
      throw new Error("Syntax error");
    }
    if (tokenIsInt) {
      const number = parseInt(token);
      if (index === 0) {
        previousToken = number;
        return number;
      }
      switch (previousToken) {
        case Operations.plus:
          result += number;
          break;
        case Operations.minus:
          result -= number;
          break;
        case Operations.divided:
          result /= number;
          break;
        case Operations.multiplied:
          result *= number;
          break;
        default:
          throw new Error("Unknown operation");
      }
      previousToken = number;
      return result;
    }
    previousToken = token;
    return result;
  }, 0);
}
