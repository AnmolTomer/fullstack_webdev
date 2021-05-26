// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`${inp}: `)
}

appliedOver("Using function keyword and this = _this fix")

let person = {
    first: "John",
    hobbies: ["run", "swim", "play FIFA"],
    printHobbies: function () {
        let _this = this;
        this.hobbies.forEach(function (hobby) {
            let str = `${_this.first} likes to ${hobby}.`
            console.log(str);
        })
    }
}

person.printHobbies()
drawLine()

appliedOver("Using arrow function")

let person2 = {
    first: "John",
    hobbies: ["run", "swim", "play FIFA"],
    printHobbies: function () {
        this.hobbies.forEach((hobby) => {
            let str = `${this.first} likes to ${hobby}.`
            console.log(str);
        })
    }
}
person2.printHobbies()