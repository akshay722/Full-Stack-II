var obj=new Object();

function Car(obj){
    obj.getBrand=function(){
        console.log("The manufacturer is: "+this.brand);
    }
    obj.getModel=function(){
        console.log("The model is: "+this.model);
    }

    return obj;
}

var tesla=new Car({brand: 'tesla', model: 'S'});
tesla.getBrand();
tesla.getModel();

var camero=new Car({brand: 'Chevy', model: 'Camero'});
camero.getBrand();
camero.getModel();