const bicycle = class {
    constructor(frontGear, backGear, maxSpeed, lightOn) {
        this.frontGear = frontGear;
        this.backGear = backGear;
        this.maxSpeed = maxSpeed;
        this.lightOn = lightOn;

        console.log(`Object created with frontGear = ${this.frontGear},
        backGear = ${this.backGear}, maxSpeed = ${this.maxSpeed} and current light status = ${this.lightOn}`)
    }

    frontGearNum() {
        console.log("Number of front gears in your bicycle: ")

        return this.frontGear
    }

    backGearNum() {
        console.log("Number of rear gears in your bicycle: ")

        return this.backGear
    }

    light(lightSwitch) {
        if (this.lightOn) {
            console.log("Current Light status: ", this.lightOn)
            console.log("Turning off lights.")

            this.lightOn = lightSwitch;

            console.log("New Light status: ", this.lightOn)
            return "-----------------";

        } else if (!this.lightOn) {
            console.log("Current Light status: ", this.lightOn)

            console.log("Turning on lights.")

            this.lightOn = lightSwitch;

            console.log("New Light status: ", this.lightOn)
            return "-----------------";
        }
    }
}

export default bicycle