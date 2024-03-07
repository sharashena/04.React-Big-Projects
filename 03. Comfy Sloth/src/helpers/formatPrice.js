export const formatPrice = price => {
  const newPrice = new Intl.NumberFormat("ge-de", {
    style: "currency",
    currency: "EUR",
  }).format((price / 100).toFixed(2));
  return newPrice;
};
