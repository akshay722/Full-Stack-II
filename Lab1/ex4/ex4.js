function startClock(){
    do {
        var d = new Date();
        var j;
        for(j=0; j<10; j++){
            console.log(d);
        }

        var i=0;
        i++;

        if(confirm("Do you want to stop the clock?")){
            break;
        } else {
            continue;
        }
    } while(i!=0)
}

