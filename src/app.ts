import { add } from "./add"



export const myfunction = (a: number, b: number): string => `this is my ${add(a, b)} text`

console.log(myfunction(10, 10))


