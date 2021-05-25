/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

// Transform a number into an internationalized format for this we use Intl.NumberFormat

const formatter = (locale, currency, value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
}

const tipCalculator = (sum, percentage, locale = "en-IN", currency = "INR") => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  console.log(`
      Sum before tip: ${formatter(locale,currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale,currency,tip)}
      Total:          ${formatter(locale,currency,total)}
    `);
};

console.log("Output with JPY currency: ")
tipCalculator(3500, 20, "ja-JP", "JPY");

console.log("Output with INR currency: ")
tipCalculator(3500, 20);

console.log("Output with USD currency: ")
tipCalculator(3500, 20, "en-US", "USD");

console.log("Output with CNY currency: ")
tipCalculator(3500, 20, "ch-CH", "CNY");

console.log("Output with Dutch currency: ")
tipCalculator(35000, 20, "de-DE", "EUR");

// console.log("Output with French currency: ")
// tipCalculator(35000, 20, "fr-FR", "EUR");

console.log("Output with Russian currency: ")
tipCalculator(35000, 20, "ru-RU", "RUB");