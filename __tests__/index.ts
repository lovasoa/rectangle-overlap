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

  it("should return correct intersections for rectangles intersecting from one side", () => {
    for (let i = 0; i < 100; i++) {
      const topRectangle = {
        x: 10,
        y: -100,
        width: 10,
        height: 100 + i,
      };
      expect(getOverlapWithContainer(topRectangle)).toEqual({
        x: 10,
        y: 0,
        width: 10,
        height: i,
        area: 10 * i,
      });
      const rightRectangle = {
        x: 100 - i,
        y: 10,
        width: 100,
        height: 10,
      };
      expect(getOverlapWithContainer(rightRectangle)).toEqual({
        x: 100 - i,
        y: 10,
        width: i,
        height: 10,
        area: i * 10,
      });
      const bottomRectangle = {
        x: 10,
        y: 100 - i,
        width: 10,
        height: 100,
      };
      expect(getOverlapWithContainer(bottomRectangle)).toEqual({
        x: 10,
        y: 100 - i,
        width: 10,
        height: i,
        area: 10 * i,
      });
      const leftRectangle = {
        x: -100,
        y: 10,
        width: 100 + i,
        height: 10,
      };
      expect(getOverlapWithContainer(leftRectangle)).toEqual({
        x: 0,
        y: 10,
        width: i,
        height: 10,
        area: i * 10,
      });
    }
  });

  function getOverlapWithContainer(
    rectangle: IRectangle,
  ): null | {x: number, y: number, width: number, height: number, area: number} {
    const rectangleOverlap = overlap(rectangle, container);
    return rectangleOverlap && Object.assign({}, rectangleOverlap, {area: rectangleOverlap.area});
  }
});
