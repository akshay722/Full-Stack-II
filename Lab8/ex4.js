var values = [1, 60, 34, 30, 20, 5];

filterFunction = () => values.filter(value => value<20);

let filterLessThan20 = filterFunction();

console.log(filterLessThan20);