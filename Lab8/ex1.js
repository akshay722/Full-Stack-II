let difference = num => {
    if (num<13){
        return 13-num;
    } else {
        return 2*Math.abs(13-num);
    }
}

console.log(difference(32));
console.log(difference(11));