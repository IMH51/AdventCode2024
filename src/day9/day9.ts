import { group } from "console";

const dot = "."

const getUnsortedFileBlocks = (input: string): string[] => 
  input.split('').reduce((fileStringArray, char, i) => {
    const charToPush = i % 2 ? dot : String(i / 2)
    for (let i = 0; i < Number(char); i++) {
      fileStringArray.push(charToPush)
    }
    return fileStringArray
  }, []);


const getSortedFileBlocksTotal = (fileBlocks: string[]): number => 
  fileBlocks.reduce((total, block, i) => (
   block === dot ? total : total + (i * Number(block))
  ), 0)

export const getFileSystemChecksum = (input: string): number => {
  const fileBlocks = getUnsortedFileBlocks(input) 

  let x = fileBlocks.length - 1

  while (x) {
    let y = 0

    while (y < x) {
      if (y === x) {
        break
      }

      if (fileBlocks[y] ===  dot) {
        fileBlocks[y] = fileBlocks[x]
        fileBlocks[x] = dot
        break
      }
      y++
    }

    x--
  }

  return getSortedFileBlocksTotal(fileBlocks)
}

export const getUnfragmentedFileSystemChecksum = (input: string): number => {
  const fileBlocks = getUnsortedFileBlocks(input) 

  const groupedFileBlocks = fileBlocks.reduce((groupedBlocks, block, i) => {
    if (i === 0) {
      groupedBlocks.push([block])
      return groupedBlocks
    }

    const lastGroup = groupedBlocks[groupedBlocks.length - 1]

    if (lastGroup[0] === block) {
      lastGroup.push(block)
    } else {
      groupedBlocks.push([block])
    }

    return groupedBlocks
  }, [])

  const sortedGroupedFileBlocks = groupedFileBlocks.reduce((sortedBlocks, group, i) => {
    let nextSortedBlocks = [...sortedBlocks]

    if (group[0] !== dot) {
      nextSortedBlocks.push(group)
      return nextSortedBlocks
    }

    for (let x = groupedFileBlocks.length - 1; x >= 0; x--) {
      const currentGroup = groupedFileBlocks[x]
      if (currentGroup[0] !== dot) {

        if (currentGroup.length <= group.length) {
          nextSortedBlocks[i] = currentGroup
          groupedFileBlocks[x] = Array(currentGroup.length).fill(dot)
          if (currentGroup.length !== group.length) {
            nextSortedBlocks[i+1] = Array(group.length - currentGroup.length).fill(dot)
          }
          break
        }
      }
    }

    return nextSortedBlocks
  }, [])

  console.log(sortedGroupedFileBlocks)

  return getSortedFileBlocksTotal(fileBlocks)
}