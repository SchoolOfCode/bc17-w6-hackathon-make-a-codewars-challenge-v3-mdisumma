
# Introduction to ASCII Art

ASCII art is a form of digital art that uses characters from the ASCII (American Standard Code for Information Interchange) character set to create images and designs. This art form relies on simple, printable characters like letters, numbers, and symbols to represent visual elements.

# Challenge Overview

Create a JavaScript function that generates and prints a pattern to the terminal. The pattern should display a centered pyramid made from a chosen character. The height of the pyramid should be equal to the number of rows, which must be an odd integer to ensure proper centering and symmetry.

# Example Output

```
    #
   ###
  #####
```

# Requirements

1. **Function Name**: `buildPyramid`

2. **Parameters**:
   - **`pyramidChar` (string)**: The character used to create the pyramid.
   - **`rows` (number)**: The total number of rows in the pattern. This value must be an odd integer.

3. **Output**:
   - Print a pattern to the terminal that includes a centered pyramid made from `pyramidChar`.
   - The height of the pyramid should be equal to the number of rows.

4. **Pattern Characteristics**:
   - The pyramid should be centered within the pattern.
   - The pattern should be a square of size `rows x rows`.

5. **Grid Constraints**:
   - Ensure that `rows` is always an odd integer to maintain proper centering and symmetry.

6. **Filling**:
   - All spaces not occupied by the pyramid should be filled with spaces (` `).
