import { test, expect } from "vitest";
import { buildPyramid } from "./main.js";

test("should build a pyramid with the # character and 1 rows", () => {
  const output = "#\n";
  expect(buildPyramid(1, "#", " ")).toBe(output);
  console.log(buildPyramid(1, "#", " "));
});

test("should build a pyramid with the # character and 2 rows", () => {
  const output = " # \n###\n";
  expect(buildPyramid(3, "#", " ")).toBe(output);
  console.log(buildPyramid(3, "#", " "));
});

test("should build a pyramid with the # character and 3 rows", () => {
  const output = "  #  \n ### \n#####\n";
  expect(buildPyramid(5, "#", " ")).toBe(output);
  console.log(buildPyramid(5, "#", " "));
});

test("should build a pyramid with the # character and 4 rows", () => {
  const output = "   #   \n  ###  \n ##### \n#######\n";
  expect(buildPyramid(7, "#", " ")).toBe(output);
  console.log(buildPyramid(7, "#", " "));
});

test("should build a pyramid with the # character and 5 rows", () => {
  const output = "    #    \n   ###   \n  #####  \n ####### \n#########\n";
  expect(buildPyramid(9, "#", " ")).toBe(output);
  console.log(buildPyramid(9, "#", " "));
});
