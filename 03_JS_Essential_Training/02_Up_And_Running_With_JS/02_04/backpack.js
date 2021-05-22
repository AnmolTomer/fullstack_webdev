/* We have defined a constant called backpack and we have exported the entity 
named backpack and we tell the browser backpack can be used and imported by 
any other file.
*/
const updateBackpack = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack)
    console.info(update)
}

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: 'grey',
    pocketNum: 15,
    strapLength: {
        left: 25,
        right: 25
    },
    lidOpen: false,

    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
        updateBackpack("Lid Status Changed.");
    },
    newStrapLength: function (lenLeft, lenRight) {
        this.strapLength.left = lenLeft;
        this.strapLength.right = lenRight;
        updateBackpack("Strap lengths updated.");
    },
};

// export backup object
export default backpack;