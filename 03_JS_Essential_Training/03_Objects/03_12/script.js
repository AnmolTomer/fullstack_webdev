import bicycle from "./bicycle.js"
import calc from "./calc.js"
console.log("Class - 1")
const Calcu = new calc(12, 3)

console.log(Calcu)
console.log(Calcu.add())
console.log(Calcu.sub())
console.log(Calcu.multi())
console.log(Calcu.divide())

console.log("-------------------------")

console.log("Class - 2")

/**
 * bicycle(frontGear, backGear, maxSpeed, lightStatus)
 */
const fireFox = new bicycle(3, 7, 40, true)

console.log(fireFox)
console.log(fireFox.frontGearNum())
console.log(fireFox.backGearNum())
console.log(fireFox.light(false))
console.log(fireFox.light(false))

console.log("-------------------------")