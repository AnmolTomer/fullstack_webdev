let books = new Set();
books.add("Pride and Prejudice.")
books.add("War and Peace.")
console.log(books)
console.log(books.size)
console.log("has Olive Twist", books.has("Oliver Twist"))
books.add("Oliver Twist")
console.log("has Olive Twist", books.has("Oliver Twist"))
// delte
books.delete("Oliver Twist")
console.log("has Olive Twist", books.has("Oliver Twist"))

books.forEach((item) => {
    console.log(item)
})