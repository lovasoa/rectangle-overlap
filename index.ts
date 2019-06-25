export = (
  x1: number, y1: number, w1: number, h1: number,
  x2: number, y2: number, w2: number, h2: number,
): null | number => {
  const dx = (x1 < x2) ? x1 + w1 - x2 : x2 + w2 - x1;
  if (dx < 0) {
    return 0;
  }

  const dy = (y1 < y2) ? y1 + h1 - y2 : y2 + h2 - y1;
  if (dy < 0) {
    return 0;
  }

  return dx * dy;
};
