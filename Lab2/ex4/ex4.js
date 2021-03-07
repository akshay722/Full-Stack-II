const myArr=new Array;
var str=new String;

function findArrIndex(myArr, str){
    if(Array.isArray(myArr)==true && typeof str=='string'){
        var i= myArr.indexOf(str);
    }
    return i;
}

console.log(findArrIndex(["abc", "ddd", "yyy", "ccc"], "yyy"));

console.log(findArrIndex(["a", "d", "y", "c"], "c"));

console.log(findArrIndex(["ball", "ice", "cat", "jem", "hat"], "ice"));