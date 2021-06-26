let count = 0;

const inc = () => ++count;
const dec = () => --count;

// All variables are scoped to that module only within JS. So files that consume this module won't have access to count. What we will do is create a getter function to return the value of count.

const getCount = () => count;

module.exports = {
    inc,
    dec,
    getCount
};