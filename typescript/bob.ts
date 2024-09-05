export function hey(message: string): string {
  const messageTrimmed = message.trim();
  if (messageTrimmed.length === 0) {
    return "Fine. Be that way!";
  }
  const isQuestion = messageTrimmed.split("").at(-1) === "?";
  const isYell =
    !messageTrimmed.match(/[a-z]/gm) && messageTrimmed.match(/[A-Z]/gm);
  if (isQuestion && isYell) {
    return "Calm down, I know what I'm doing!";
  }
  if (isQuestion) {
    return "Sure.";
  }
  if (isYell) {
    return "Whoa, chill out!";
  }
  return "Whatever.";
}
