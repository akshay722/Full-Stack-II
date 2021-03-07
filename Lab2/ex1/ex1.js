var myArray = new Array;
var count=0;
function buildArray(num){
    while(count<num){
        myArray.push(count);
        count++;
    }
    return myArray;
}

console.log(buildArray(22));









