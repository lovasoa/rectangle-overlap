export = (rectangle1: IRectangle, rectangle2: IRectangle): null | Rectangle => {
  const intersectionX1 = Math.max(rectangle1.x, rectangle2.x);
  const intersectionX2 = Math.min(rectangle1.x + rectangle1.width, rectangle2.x + rectangle2.width);
  if (intersectionX2 < intersectionX1) {
    return null;
  }

  const intersectionY1 = Math.max(rectangle1.y, rectangle2.y);
  const intersectionY2 = Math.min(rectangle1.y + rectangle1.height, rectangle2.y + rectangle2.height);
  if (intersectionY2 < intersectionY1) {
    return null;
  }

  return new Rectangle(
    intersectionX1,
    intersectionY1,
    intersectionX2 - intersectionX1,
    intersectionY2 - intersectionY1,
  );
};

interface IRectangle {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

class Rectangle implements IRectangle {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly width: number,
    public readonly height: number,
  ) {
  }

  get area(): number {
    return this.width * this.height;
  }
}
