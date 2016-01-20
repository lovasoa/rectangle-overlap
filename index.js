module.exports = function(x1, y1, w1, h1, x2, y2, w2, h2) {
  var dx = (x1 < x2) ? x1 + w1 - x2 : x2 + w2 - x1;
  if (dx < 0) return 0;
  var dy = (y1 < y2) ? y1 + h1 - y2 : y2 + h2 - y1;
  if (dy < 0) return 0;
  return dx * dy;
}
