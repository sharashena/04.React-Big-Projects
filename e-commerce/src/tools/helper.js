export const featuredProducts = products => {
  const featured = products.filter(item => item.featured === true);
  return featured.slice(0, 3);
};

export const formatPrice = number => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};
