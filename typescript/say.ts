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

const DIGITS_TO_WORDS_TENS = [
  "",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const WORDS = ["", "thousand", "million", "billion"];

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
    const secondDigit = Number(group[1] ?? 0);
    const thirdDigit = Number(group[2]);
    if (!Number.isNaN(thirdDigit) && thirdDigit > 0) {
      const lastDigit = Number(group[2]);
      digitsAsWords += `${DIGITS_TO_WORDS[lastDigit]} hundred `;
    }
    if (!Number.isNaN(secondDigit)) {
      switch (secondDigit) {
        case 1:
          digitsAsWords += `${DIGITS_TO_WORDS[secondDigit * 10 + firstDigit]}`;
          break;
        case 0:
          if (
            firstDigit > 0 ||
            (digitsAsWords.length === 0 && tokenized.length === 1)
          ) {
            digitsAsWords += `${DIGITS_TO_WORDS[firstDigit]}`;
          }
          break;
        default:
          digitsAsWords += `${DIGITS_TO_WORDS_TENS[secondDigit]}`;
          if (firstDigit !== 0) {
            digitsAsWords += `-${DIGITS_TO_WORDS[firstDigit]}`;
          }
          break;
      }
    }
    return digitsAsWords.trim();
  });

  return stack
    .reduceRight((accumulator, digits, index) => {
      if (digits.length > 0) {
        accumulator += `${digits} `;
        const word = index;

        if (WORDS[word]) {
          accumulator += `${WORDS[word]} `;
        }
      }

      return accumulator;
    }, "")
    .trim();
}
