import { execPath } from "process";
import { myfunction } from "../src/app"

const num: number = 2;
const num1: number = 10;

test("this is my first test", () => {
    expect(myfunction(num, num1)).toBe(`this is my 12 text`)

})

