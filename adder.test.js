const adder = require('./adder');

describe ("adder", () => {
    it("Should add two numbers", () => {
        expect(adder(1, 2)).toBe(3);
    })
    it("Should return a simple input", () => {
        expect(adder(5)).toBe(5);
    })
    it("Should add three numbers", () => {
        expect(adder(1, 2, 3)).toBe(6);
    })
    it("Should return 0 if no numbers are passed", () => {
        expect(adder()).toBe(0);
    })
    it("Should add any number of arguments", () => {
        expect(adder(1, 2, 3, 4, 5, 6)).toBe(21);
    })
})
