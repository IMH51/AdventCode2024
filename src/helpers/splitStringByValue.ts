export const splitStringByValue = (input: string, value: string | RegExp) => 
  input.trim().split(value).filter(Boolean)