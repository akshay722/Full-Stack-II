function displayAlert(){
    window.alert("Hi, This is an alert box.");
}

function displayPromt(){
    window.alert("Hi, This is a prompt box.");
}

function displayConfirm(){
    if (window.confirm("Do you really want to close the browser?")){
        window.close();
    } 
}