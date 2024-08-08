
# Introduction to ASCII Art

ASCII art is a form of digital art that uses characters from the ASCII character set to create images and designs. This art form relies on simple, printable characters like letters, numbers, and symbols to represent visual elements.

# Challenge Overview

Create a JavaScript function that generates a small piece of ASCII art. If printed the pattern should display a centered pyramid made by the '#' character. The height of the pyramid should be provided by an odd integer to ensure proper centering and symmetry. With a limitation between 1 and 9 the odd number value should produce a pattern of 1 to a maximum of 5 rows.

# Example Output

```
    #
   ###
  #####
```

# Requirements

1. **Function Name**: `buildPyramid`

2. **Parameters**:
   - **`rows` (number)**: A number between 1 and 9 to generate the number of rows. the function should consider only odd integer and return a rows pattern of 1 to a maximum of 5.
   - **`pyramidChar` (string)**: The character used to create the pyramid blocks.
   - **`spaceChar` (string)**: The character used to create the empty space.

3. **Output**:
   - Should return a pattern that if printed to the terminal would display a centered pyramid.
   - The height of the pyramid should be equal to the number of the odd value contained in the rows number.

4. **Pattern Characteristics**:
   - All spaces occupied by the pyramid should be filled with the # character.
   - All spaces not occupied by the pyramid should be filled with an empty string (` `).

