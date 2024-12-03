import { readFileSync } from 'fs'

export const exampleDay3Input = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'

export const exampleDay3ConditionalInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

export const day3RawInput = readFileSync('src/day3/day3RawInput.txt', 'utf-8')