export const removeDataFromLC = (data: string[]) => {
  data.forEach((item) => localStorage.removeItem(item));
};
