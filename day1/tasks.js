;
var object1 = { name: 'John' };
console.log(object1.name);
var object2 = { username: 'John', email: "email" };
;
var Colors_hexa = { red: '#FF0000', green: '#00FF00', blue: '#0000FF' };
console.log(Colors_hexa.red);
var oject4 = { name: "doaa", email: "d123@gmail.com" };
console.log(oject4);
var objec5 = { name: "doaa", email: "mail" };
console.log(objec5);
var color = "red";
var color2 = "blue";
var string = "doaa";
// var ss:StringOnly=null; //error
// 9- Create a class Carx with properties make (string) and 
// model (string). Add a method getDescription 
// that returns a string like "This is a Toyota Corolla."
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.getDescription = function () {
        return "This is a ".concat(this.make, " ").concat(this.model);
    };
    return Car;
}());
var car1 = new Car('Toyota', 'Corolla');
console.log(car1.getDescription());
var message = {
    printNow: function (mesg) {
        console.log("Hello" + mesg);
    }
};
message.printNow("doaa");
