import overlap = require("../index");

interface IRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

describe("rectangle-overlap", () => {
  const container: IRectangle = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  };

  it("should return null for rectangles that do not overlap", () => {
    const rectangles: IRectangle[] = [
      { // N
        x: 10,
        y: -10,
        width: 10,
        height: 9,
      },
      { // NE
        x: 101,
        y: -10,
        width: 10,
        height: 9,
      },
      { // E
        x: 101,
        y: 10,
        width: 10,
        height: 10,
      },
      { // SE
        x: 101,
        y: 101,
        width: 10,
        height: 10,
      },
      { // S
        x: 10,
        y: 101,
        width: 10,
        height: 10,
      },
      { // SW
        x: -10,
        y: 101,
        width: 9,
        height: 10,
      },
      { // W
        x: -10,
        y: 10,
        width: 9,
        height: 10,
      },
      { // NW
        x: -10,
        y: -10,
        width: 9,
        height: 9,
      },
    ];
    for (const rectangle of rectangles) {
      expect(getOverlapWithContainer(rectangle)).toBeNull();
    }
  });

  function getOverlapWithContainer(
    rectangle: IRectangle,
  ): null | {x: number, y: number, width: number, height: number, area: number} {
    return overlap(rectangle, container);
  }
});
