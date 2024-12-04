export const getXmasCount = (wordsearch: string[][]): number => 
  wordsearch.reduce((total, row, y) => {
    const rowTotal = row.reduce((rowCount, letter, x) => {
      const rowWord = letter + row[x + 1] + row[x + 2] + row[x + 3]
      const columnWord = letter + wordsearch[y + 1]?.[x] + wordsearch[y + 2]?.[x] + wordsearch[y + 3]?.[x]
      const eastDiagonalWord = letter + wordsearch[y + 1]?.[x + 1] + wordsearch[y + 2]?.[x + 2] + wordsearch[y + 3]?.[x + 3]
      const westDiagonalWord = letter + wordsearch[y + 1]?.[x - 1] + wordsearch[y + 2]?.[x - 2] + wordsearch[y + 3]?.[x - 3]

      const allWords = [rowWord, columnWord, eastDiagonalWord, westDiagonalWord]

      allWords.forEach(word => ['XMAS', 'SAMX'].includes(word) && rowCount++)

      return rowCount
    }, 0)
    return total + rowTotal
  }, 0)
  
export const getXmasCrossCount = (wordsearch: string[][]): number => 
  wordsearch.reduce((total, row, y) => {
    const rowTotal = row.reduce((rowCount, letter, x) => {
      if (letter !== "A") return rowCount
      
      const eastDiagonalWord = wordsearch[y - 1]?.[x - 1] + letter + wordsearch[y + 1]?.[x + 1]
      const westDiagonalWord = wordsearch[y - 1]?.[x + 1] + letter + wordsearch[y + 1]?.[x - 1]

      const allWords = [eastDiagonalWord, westDiagonalWord]

      if (allWords.every(word => ['MAS', 'SAM'].includes(word))) rowCount++

      return rowCount
    }, 0)
    return total + rowTotal
  }, 0)
  