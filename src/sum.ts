export const sum = (a: number, b: number): number => a + b;

// 掛け算
export const multiply = (a: number, b: number): number => {
  if (a < 0 || b < 0) {
    throw new Error("Number must be non-negative.");
  }
  return a * b;
};

// 引き算
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

// test comment editor

// test comment editor 2