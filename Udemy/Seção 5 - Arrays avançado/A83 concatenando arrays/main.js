const a1 = [1, 2];
const a2 = [3, 4];
//const a3 = a1.concat(a2, [7, 8], 'Luiz');
// ... rest -> ... spread
const a3 = [...a1, 'Leo', ...a2, ...['a', 'b', 'c']];
console.log(a3);