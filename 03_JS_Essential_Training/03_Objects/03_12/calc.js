/**
 * Class Expression: const Name = class{}
 */

const calc = class {
    // Constructor
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.result = 0
        console.log("Object created with a = ", this.a, " and b = ", this.b)
    }

    add() {
        this.result = this.a + this.b;
        console.log("Sum of ", this.a, " and ", this.b, " = ")
        return this.result
    }

    sub(a, b) {
        this.result = this.a - this.b;
        console.log("Difference of ", this.a, " and ", this.b, " = ")
        return this.result
    }

    multi(a, b) {
        this.result = this.a * this.b;
        console.log("Product of ", this.a, " and ", this.b, " = ")
        return this.result
    }

    divide(a, b) {
        this.result = this.a / this.b;
        console.log("Division of ", this.a, " and ", this.b, " = ")
        return this.result
    }

}

export default calc