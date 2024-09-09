const DIGITS_TO_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function tokenizeNumber(number: number) {
  const groups = number.toString().split("").reverse();
  const groupsCount = Math.ceil(groups.length / 3);
  const tokens = [];
  for (let index = 0; index < groupsCount; index++) {
    tokens.push(groups.splice(0, 3));
  }
  return tokens;
}

export function sayInEnglish(number: number): string {
  if (number < 0 || number > 999_999_999_999) {
    throw new Error("Number must be between 0 and 999,999,999,999.");
  }
  const tokenized = tokenizeNumber(number);

  const stack = tokenized.map<string>((group, index) => {
    let digitsAsWords = "";
    const firstDigit = Number(group[0]);
    if (group.length === 3 && group[2] !== "0") {
      const lastDigit = Number(group[2]);
      digitsAsWords += `${DIGITS_TO_WORDS[lastDigit]} `;
    }
    return digitsAsWords;
  });

  return "";
}
