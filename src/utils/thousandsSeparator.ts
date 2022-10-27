export const thousandsSeparator = (n: number) => {
  var parts = n.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  const result =
    numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
  return result.substring(0, result.lastIndexOf(".") + 3);
};
