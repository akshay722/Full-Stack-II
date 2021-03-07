function greaterThanSize(){
    size=Math.floor(Math.random() * (50 - 0));
    var count=0
    while(count<size){
        count++;
        console.log("The current size is "+size+" and count is "+count);
    }
}

greaterThanSize();