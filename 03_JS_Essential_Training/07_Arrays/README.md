# 07 Arrays

## 07_01 Arrays Explained

- We use arrays when we want to group some items together or because we need to apply some sort of order to a bunch of objects or a whole array. We use arrays a lot in programming to store, retrieve and process data.

- There are a whole set of array functions and methods which help us to work with and manipulate these arrays. We see methods which helps us in adding/removing objects, find objects, reorder objects etc. In JS these methods have names like `pop`, `push` and `shift` among others.

- `pop` removes the last element, `push` inserts the element into array, to remove from index 0 and move all the items after this we `shift` the elements one position to left, to add element on first index we move items to right emptying up the index 0 thus, callingthis `unshift`.

---

## 07_02 Arrays in Code

- An array is an instance of the array object and we declare a new array by creating a variable and `[]` to tell the js that it's an array.

- In JS we can also add element by skipping some index as well. E.g. your list has 4 items but you do `collection[9] = "In the end"` now this will be added to the list and this means if you do collection[9] you will get what you have stored and index from 4 to 8 will return undefined as those indices were just skipped and have nothing in the list.

- Ref: [07_02](07_02/script.js)

---

## 07_03 Array Methods

- Arrays are used extensively in JS. There is a whole set of array methods to do different things with arrays and their contents. All of these methods can be found in MDN web docs.

- Ref: [07_03](07_03/script.js)

- MDN Reference: [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
