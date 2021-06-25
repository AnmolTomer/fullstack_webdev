// Multiplies by two is the name of the test, then we add a callback function , and we use an assertion framework called expect. First argument is name of the test, and second argument contains what should be tested.

import {
    timesTwo
} from "./functions"

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
})