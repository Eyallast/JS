function swapKeysAndValues(obj) {
  const swapped = Object.entries(obj).map(
    ([key, value]) => [value, key]
  );

  return Object.fromEntries(swapped);
}

console.log(
  swapKeysAndValues({blue: 'color', apple: 'fruit'})
);