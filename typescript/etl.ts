export function transform(
  dataset: Record<number, string[]>
): Record<string, number> {
  const reversedDataset: Record<string, number> = {};
  for (const score in dataset) {
    if (Object.prototype.hasOwnProperty.call(dataset, score)) {
      const letters = dataset[score];
      letters.forEach((l) => {
        reversedDataset[l.toLowerCase()] = Number.parseInt(score);
      });
    }
  }
  return reversedDataset;
}
