const myArr=new Array;
var num=new Number;

function hasNumber(myArr, num){
    if(Array.isArray(myArr)==true && typeof num=='number'){
        if(myArr.includes(num)==true){
            return true;
        } else {
            return false;
        }
    }
}

console.log(hasNumber([1, 2, 3, 4, 5], 3));

console.log(hasNumber([1, 2, 1, 2, 1], 3));

console.log(hasNumber([12, 20, 65, 32, 44], 44));

console.log(hasNumber([], 3));


