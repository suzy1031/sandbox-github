import { test, expect } from "vitest";
import { sum, multiply, divide } from "../src/sum";

test("1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2 * 3 equals 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("4 / 2 equals 2", () => {
  expect(divide(4, 2)).toBe(2);
});

test("multiply throws error for negative numbers", () => {
  expect(() => multiply(-1, 2)).toThrowError("Number must be non-negative.");
});

test("divide throws error for division by zero", () => {
  expect(() => divide(4, 0)).toThrowError("Division by zero is not allowed.");
});
