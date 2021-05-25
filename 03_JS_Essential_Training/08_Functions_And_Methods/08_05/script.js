/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    // ----------------------------------------------------------------
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    // ----------------------------------------------------------------
    // Immediately Invoked Function Expression : Prints value of window.volume as function declaration is hoisted to global scope, hence IIFE uses global value of volume.

    (function () {
      console.log("this.volume in nested function due to hoisted function declaration:", this.volume);
    })();
    // ----------------------------------------------------------------
    // If we want IIFE inside a function then better to use arrow function to avoid declaration being hoisted to global scope.
    (() => {
      console.log("this.volume in arrow function stays in current scope:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));