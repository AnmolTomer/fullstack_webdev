/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
    constructor(
        // Define parameters
        name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen
    ) {
        // Define properties
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
                left: strapLengthL,
                right: strapLengthR
            },
            this.lidOpen = lidOpen;
    };
    // Add methods
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }

    newStrapLength(lenL, lenR) {
        this.strapLength.left = lenL;
        this.strapLength.right = lenR;
    }
}

export default Backpack;