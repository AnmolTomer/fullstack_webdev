// Without template literals

const print = (firstName) => {
    console.log("Hello", firstName, "from print().");
}

const print2 = (firstName) => {
    console.log(`Hello, ${firstName} from print2().`)
}

const createEmail = (firstName, price) => {
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thanks!!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price+shipping}`)
}

print("Cosmic")

print2("Cosmic")
createEmail("Anmol", 300)