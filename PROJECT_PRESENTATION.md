
# Introduction to ASCII Art

ASCII art is a form of digital art that uses characters from the ASCII character set to create images and designs. This art form relies on simple, printable characters like letters, numbers, and symbols to represent visual elements.

# Challenge Overview

Create a JavaScript function that generates a small piece of ASCII art. The pattern should display a centered pyramid made by the '#' character. The height of the pyramid should be an odd integer to ensure proper centering and symmetry.

# Example Output

```
    #
   ###
  #####
```

# Requirements

1. **Function Name**: `buildPyramid`

2. **Parameters**:
   
   - **`rows` (number)**: The number required to generate the rows in the pattern. This value must be an odd integer.
   - **`pyramidChar` (string)**: The character used to create the pyramid.
   - **`spaceChar` (string)**: The character used to create the empty space.

3. **Output**:
   - Return a pattern that printed to the terminal displays a centered pyramid.
   - The height of the pyramid should be equal to the number of odd rows.

4. **Pattern Characteristics**:
   - All spaces occupied by the pyramid should be filled with the # character.
   - All spaces not occupied by the pyramid should be filled with an empty string (` `).

