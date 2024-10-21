export function clean(raw: string): string {
  if (!/^[0-9\-\s\(\)\.\+]+$/.test(raw)) {
    if (/[a-z]/i.test(raw)) {
      throw new Error("Letters not permitted");
    } else {
      throw new Error("Punctuations not permitted");
    }
  }
  let cleaned = raw.replace(/[\-\s\(\)\.\+]/g, "");

  if (cleaned.length === 11) {
    if (cleaned[0] !== "1") {
      throw new Error("11 digits must start with 1");
    }
    cleaned = cleaned.substring(1);
  }

  if (cleaned.length <= 9) {
    throw new Error("Incorrect number of digits");
  }

  if (cleaned.length > 11) {
    throw new Error("More than 11 digits");
  }

  switch (cleaned[0]) {
    case "0":
      throw new Error("Area code cannot start with zero");
    case "1":
      throw new Error("Area code cannot start with one");
  }

  const exchangeCode = cleaned[3];
  switch (exchangeCode) {
    case "0":
      throw new Error("Exchange code cannot start with zero");
    case "1":
      throw new Error("Exchange code cannot start with one");
  }

  return cleaned;
}
