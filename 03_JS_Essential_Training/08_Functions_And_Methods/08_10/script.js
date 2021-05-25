/**
 * Using a callback function.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// Helper function to format currency numbers. Used by tipCalculator
const formatter = (locale = "en-IN", currency = "INR", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

// Create a finalTip object with all the data. Send it to the printHTML callback.
// by having a callbackFxn passed in as param we can pass in name of some other function and then that will be the function that gets called, instead of writing a specific function's name
const tipCalculator = (sum, percentage, locale = "en-IN", currency = "INR", callbackFxn) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  const finalTip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total)
  }

  console.log(`
      Sum before tip: ${formatter(locale,currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale,currency,tip)}
      Total:          ${formatter(locale,currency,total)}
    `);

  callbackFxn(finalTip)

};


// Callback receives finalTip object, creates and outputs table on the DOM.
const printHTML = (finalTip) => {
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
    <tr>
      <td>Sum before tip:</td>
      <td>${finalTip.sum}</td>
    </tr>
    <tr>
      <td>Tip percentage:</td>
      <td>${finalTip.percentage}</td>
    </tr>
    <tr>
      <td>Tip:</td>
      <td>${finalTip.tip}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${finalTip.total}</td>
    </tr>
    ------------------------------------------------------------------------------------------------------------------------
  `;
  document.querySelector("main").append(tipTable);
};



console.log("Output with GER currency: ")
tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);
// -----------------------------------
console.log("Output with JPY currency: ")
tipCalculator(3500, 20, "ja-JP", "JPY", printHTML);

console.log("Output with INR currency: ")
tipCalculator(3500, 20, "en-IN", "INR", printHTML);

console.log("Output with USD currency: ")
tipCalculator(3500, 20, "en-US", "USD", printHTML);

console.log("Output with CNY currency: ")
tipCalculator(3500, 20, "ch-CH", "CNY", printHTML);