export function buildPyramid(rows, pyramidChar, spaceChar) {
  let string = "";
  for (let rowCounter = 1; rowCounter <= rows; rowCounter++) {
    if (rowCounter % 2 === 1) {
      string +=
        spaceChar.repeat((rows - rowCounter) / 2) +
        pyramidChar.repeat(rowCounter) +
        spaceChar.repeat((rows - rowCounter) / 2) +
        "\n";
    }
  }
  return string;
}
