// 1- Create a class BankAccount with:
// A private property balance (number).
// A public method deposit that adds to the balance.
// A public method getBalance that returns the balance.
// Test the class by depositing some money and retrieving the balance.
// -------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = 0;
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (deposit) {
        this.balance += deposit;
    };
    BankAccount.prototype.getBalance = function () {
        return "balance is ".concat(this.balance);
    };
    return BankAccount;
}());
var obj = new BankAccount(200);
obj.deposit(20);
console.log("task1===>" + obj.getBalance());
// 2- Create a class Animal with:
// A protected property name (string).
// A protected method makeSound that logs a sound.
// Create a subclass Dog that extends Animal and overrides the makeSound method to log "Woof!".
// Test the Dog class.
// ----------------------------------------
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("logs a sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("dog sound 🐕‍🦺");
    };
    return Dog;
}(Animal));
var obj2 = new Dog("dogy");
console.log("task2");
obj2.makeSound();
// 3- Create a class Person with:
// A readonly property id (number).
// A constructor that initializes id.
// Try to modify the id property after initialization and observe the error.
// --------------------------------------------------------------------------
var Person = /** @class */ (function () {
    function Person(id) {
        this.id = 0;
        this.id = id;
    }
    return Person;
}());
var p = new Person(12);
// p.id=0;  error can not assign
// 4- Refactor the Person class to use parameter properties
// for name (string) and age (number) in the constructor.
var RefactorPerson = /** @class */ (function () {
    function RefactorPerson(id, name, age) {
        this.id = 0;
        this.id = id;
    }
    return RefactorPerson;
}());
var obj4 = new RefactorPerson(11, "ali", 23);
//  5- Create a class MathUtils with:
// A static property PI (number) set to 3.14.
// A static method calculateCircumference that takes
// a radius (number) and returns the circumference (2 * PI * radius).
// Test the static method.
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.calculateCircumference = function (radius) {
        return 2 * MathUtils.PI * radius;
    };
    MathUtils.PI = 3.14;
    return MathUtils;
}());
console.log(MathUtils.calculateCircumference(22));
// 6- Create an abstract class Shape with:
// An abstract method calculateArea that returns a number.
// Create a subclass Circle that implements calculateArea
// using the formula PI * radius^2.
// Test the Circle class.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.calculateArea = function (radius) {
        return MathUtils.PI * radius * radius;
    };
    return Circle;
}(Shape));
var obj6 = new Circle();
console.log("task6--> " + obj6.calculateArea(5));
// 7- Create a class Temperature with:
// A private property _celsius (number).
// A getter celsius that returns _celsius.
// A setter celsius that sets _celsius but throws
//  an error if the value is below -273.15 (absolute zero).
// Test the getter and setter.
var Temperature = /** @class */ (function () {
    function Temperature() {
        this._celsius = 0;
    }
    Temperature.prototype.set = function (celsius) {
        if (celsius < -273.15)
            throw new Error("value is below -273.15 (absolute zero). enter vaild value");
        else {
            this._celsius = celsius;
            console.log("value updated" + celsius);
        }
    };
    Temperature.prototype.get = function () {
        return this._celsius;
    };
    return Temperature;
}());
var obj7 = new Temperature();
obj7.set(-220);
console.log("task7--> " + obj7.get());
//  obj7.set(-620); error
console.log("task7--> " + obj7.get());
//  8- Create a class Employee with:
// A readonly property id (number).
// A private property salary (number).
// A protected property department (string).
// A constructor that initializes all properties using parameter properties.
// A public method getDetails that returns a string with all details.
// Create a subclass Manager that extends
//  Employee and adds a private property teamSize (number).
//  Override getDetails to include teamSize.
// Test the Manager class.
var Employee = /** @class */ (function () {
    function Employee(id, salary, department) {
        this.id = id;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.getDetails = function () {
        return "employee id=".concat(this.id, " ,salary =").concat(this.salary, " \n       department =").concat(this.department, " ");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, salary, department, teamSize) {
        var _this = _super.call(this, id, salary, department) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), " \n        teamSize =").concat(this.teamSize, " ");
    };
    return Manager;
}(Employee));
var obj8 = new Manager(123, 33333, "IT", 43);
console.log(obj8.getDetails());
// 9- Create a generic class Box that can store any type of value. Add methods:
// setValue to set the value.
// getValue to get the value.
// Test the class with different types (e.g., string, number).
var Box = /** @class */ (function () {
    function Box(val) {
        this.val = val;
    }
    Box.prototype.setValue = function (val) {
        this.val = val;
    };
    Box.prototype.getValue = function () {
        return this.val;
    };
    return Box;
}());
var ob19 = new Box(22);
var ob29 = new Box("sttt");
var ob39 = new Box({ "key": 12 });
// 10- Write a generic function identity that takes an argument of any type and returns the same value.
//  Test it with a number, string, and boolean.
function printagine(value) {
    return value;
}
console.log("10- Write a generic function identity");
console.log(printagine("dddd"));
console.log(printagine(12));
console.log(printagine(true));
// 11- Write a generic function printLength that takes an
//  argument with a length property (e.g., string, array) and prints its length.
// Use a constraint to ensure the argument has a length property.
function printLength(value) {
    return value.length;
}
// printLength(true);
printLength("doaa");
console.log("task11--->" + printLength([1, 2, 3]));
