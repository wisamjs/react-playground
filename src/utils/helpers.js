export const findMode = (numbers = []) => {
  if (numbers.length) {
    let counted = numbers.reduce((acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }

      return acc;
    }, {});

    let mode = Object.keys(counted).reduce((a, b) =>
      counted[a] > counted[b] ? a : b,
    );

    return Number(mode);
  }
  return -1;
};
