# rectangle-overlap

[![npm type definitions](https://img.shields.io/npm/types/rectangle-overlap.svg)](https://github.com/lovasoa/rectangle-overlap/blob/master/index.ts)
[![npm type definitions](https://img.shields.io/npm/l/rectangle-overlap.svg)](https://github.com/lovasoa/rectangle-overlap/blob/master/LICENSE)

Fastly compute the area of the intersection of two rectangles.

## Usage

```js
const area = require("rectangle-overlap");

let rect1 = {
  x: 100,
  y: 100,
  w: 100,
  h: 100,
};
let rect2 = {
  x: 50,
  y: 50,
  w: 100,
  h: 100,
};
// rectangles overlap partially
area(rect1.x, rect1.y, rect1.w, rect1.h, rect2.x, rect2.y, rect2.w, rect2.h); // 2500

let rect3 = {
  x: 150,
  y: 150,
  w: 0,
  h: 0,
};
// rect3 has area 0
area(rect1.x, rect1.y, rect1.w, rect1.h, rect3.x, rect3.y, rect3.w, rect3.h); // 0

let rect4 = {
  x: 0,
  y: 0,
  w: 10,
  h: 10,
};
// non-intersecting rectangles
area(rect1.x, rect1.y, rect1.w, rect1.h, rect4.x, rect4.y, rect4.w, rect4.h); // null
```
