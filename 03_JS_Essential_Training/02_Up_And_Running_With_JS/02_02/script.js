/* Create a Backpack object, populate some HTML to display its properties */

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

const markup = (backpack) => {
    return `
    <div>
        <h3>${backpack.name}</h3>
        <ul>
            <li>Volume: ${backpack.volume}</li>
            <li>Color: ${backpack.color}</li>
            <li>Number of pockets: ${backpack.pocketNum}</li>
            <li>Strap Length L: ${backpack.strapLength.left}, R: ${backpack.strapLength.right}</li>
            <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
        </ul>
    </div>
    `;
};

const main = document.createElement("main");

main.innerHTML = markup(backpack);

document.body.appendChild(main);