const id = Symbol();

const courseInfo = {
    title: "JavaScript",
    topics: ["strings", "arrays", "objects"],
    id: "js-course"
}

// Set the id of course info a unique identifier
courseInfo[id] = 41284
// Even if there's id in the object a unique identifier by Symbol() will be added to object. Using Symbol() allow us to never get into naming conflicts.
console.log(courseInfo);