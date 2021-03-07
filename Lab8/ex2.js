let gretter = (myArray, counter) => {
    const greetText = 'Hello';
    for (const element of myArray){
        console.log(`${greetText} ${element}`);
    }
}

gretter(['Randy Savage','Rick Flair','Hulk Hogan'], 3);