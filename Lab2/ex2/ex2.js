var myArray=new Array;

function emptyArray(myArray){
    var n=myArray.length;
    while(n>0){
        myArray.pop();
        if (myArray==[]){
            break;
        }
    }

    console.log(myArray);
}

console.log(emptyArray(["1","2","3"]));