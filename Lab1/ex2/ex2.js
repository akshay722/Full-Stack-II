function helloWorlds(n){
    if(typeof n == 'number'){
        for(i=0; i<n; i++){
            console.log("Hello World!");
        }
    } else {
        console.log("Goodbye World")
    }
}

helloWorlds(5);

helloWorlds(false);

helloWorlds("hello");

helloWorlds(undefined);

helloWorlds(null);