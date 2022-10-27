export const marketCapFormatter = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(num);
};
