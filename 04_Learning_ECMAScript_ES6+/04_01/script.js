function skier(name, sound) {
    return {
        name: name,
        sound: sound,
        powederYell: function () {
            let yell = this.sound.toUpperCase();
            console.log("Yell from name: name without object literal 📣📣: ", `${yell}! ${yell}!`)
        }
    };
}

skier("John", "arghh").powederYell();

function skierObjLiteral(name, sound) {
    return {
        name,
        sound,
        powederYell: function () {
            let yell = this.sound.toUpperCase();
            console.log("Yell from name object literal 📣📣: ", `${yell}! ${yell}!`)
        }
    };
}

skierObjLiteral("Randy", "woohoo").powederYell()