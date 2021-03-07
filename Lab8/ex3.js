let colors = ['red', 'blue', 'green'];

capitalize = () => map1 = colors.map(x=>(x.charAt(0).toUpperCase() + x.slice(1)));

let capitalizedColors = capitalize();

console.log(capitalizedColors);