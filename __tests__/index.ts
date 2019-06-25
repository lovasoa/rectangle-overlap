import area = require("../index");

interface IRectangle {
  x: number;
  y: number;
  w: number;
  h: number;
}

describe("rectangle-overlap", () => {
  const container: IRectangle = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
  };

  it("should return null for rectangles that do not overlap", () => {
    const rectangles: IRectangle[] = [
      { // N
        x: 10,
        y: -10,
        w: 10,
        h: 9,
      },
      { // NE
        x: 101,
        y: -10,
        w: 10,
        h: 9,
      },
      { // E
        x: 101,
        y: 10,
        w: 10,
        h: 10,
      },
      { // SE
        x: 101,
        y: 101,
        w: 10,
        h: 10,
      },
      { // S
        x: 10,
        y: 101,
        w: 10,
        h: 10,
      },
      { // SW
        x: -10,
        y: 101,
        w: 9,
        h: 10,
      },
      { // W
        x: -10,
        y: 10,
        w: 9,
        h: 10,
      },
      { // NW
        x: -10,
        y: -10,
        w: 9,
        h: 9,
      },
    ];
    for (const rectangle of rectangles) {
      expect(getOverlapWithContainer(rectangle)).toBeNull();
    }
  });

  function getOverlapWithContainer(rectangle: IRectangle): null | number {
    return area(rectangle.x, rectangle.y, rectangle.w, rectangle.h, container.x, container.y, container.w, container.h);
  }
});
