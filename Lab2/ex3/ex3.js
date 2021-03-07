var myArr=new Array;

function reverselt(myArr){
    if(Array.isArray(myArr)==true){
        myArr.reverse();
    }
    return myArr;
}

console.log(reverselt([1, 2, 3, 4]));

console.log(reverselt([9, 9, 2, 3, 4]));

console.log(reverselt([]));
