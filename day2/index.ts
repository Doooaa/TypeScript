// Type Assertion (Trust without checking)  compile time!
let value: any = "Hello";
let length1: number = (value as string).length; // Forcing TypeScript to trust it's a string
console.log(length1); // 5


// Type Guard (Checks before using) runtime
function printLength1(value: unknown) {
    if (typeof value === "string") { // Type guard checking type at runtime
        console.log(value.length);
    } else {
        console.log("Not a string");
    }
}

printLength1("Hello"); // 5
printLength1(123); // Not a string

// 1- Create a class BankAccount with:
// A private property balance (number).
// A public method deposit that adds to the balance.
// A public method getBalance that returns the balance.
// Test the class by depositing some money and retrieving the balance.
// -------------------------------------------------------------------
class BankAccount {
  private balance: number = 0;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(deposit: number) {
    this.balance += deposit;
  }

  getBalance() {
    return `balance is ${this.balance}`;
  }
}

var obj = new BankAccount(200);
obj.deposit(20);
console.log("task1===>" + obj.getBalance());

// 2- Create a class Animal with:
// A protected property name (string).
// A protected method makeSound that logs a sound.
// Create a subclass Dog that extends Animal and overrides the makeSound method to log "Woof!".
// Test the Dog class.
// ----------------------------------------
class Animal {
  constructor(protected name: string) {}
  protected makeSound(): void {
    console.log("logs a sound");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  public makeSound(): void { //override m
    console.log("dog sound 🐕‍🦺");
  }
}
var obj2 = new Dog("dogy");
console.log("task2");
obj2.makeSound();

// 3- Create a class Person with:
// A readonly property id (number).
// A constructor that initializes id.
// Try to modify the id property after initialization and observe the error.
// --------------------------------------------------------------------------
class Person {
  readonly id: number = 0;
  constructor(id: number) {
    this.id = id;
  }
}

var p = new Person(12);
// p.id=0;  error can not assign

// 4- Refactor the Person class to use parameter properties
// for name (string) and age (number) in the constructor.

class RefactorPerson {
  readonly id: number = 0;
  constructor(id: number, name: string, age: number) {
    this.id = id;
  }
}
var obj4 = new RefactorPerson(11, "ali", 23);

//  5- Create a class MathUtils with:
// A static property PI (number) set to 3.14.
// A static method calculateCircumference that takes
// a radius (number) and returns the circumference (2 * PI * radius).
// Test the static method.
class MathUtils {
  static PI: number = 3.14;
  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}
console.log(MathUtils.calculateCircumference(22));

// 6- Create an abstract class Shape with:
// An abstract method calculateArea that returns a number.
// Create a subclass Circle that implements calculateArea
// using the formula PI * radius^2.
// Test the Circle class.

abstract class Shape {
  abstract calculateArea(l: number): number;
}

class Circle extends Shape {
  calculateArea(radius: number): number {
    return MathUtils.PI * radius * radius;
  }
}

var obj6: Circle = new Circle();

console.log("task6--> " + obj6.calculateArea(5));

// 7- Create a class Temperature with:
// A private property _celsius (number).
// A getter celsius that returns _celsius.
// A setter celsius that sets _celsius but throws
//  an error if the value is below -273.15 (absolute zero).
// Test the getter and setter.
class Temperature {
  private _celsius: number = 0;
  set(celsius: number) {
    if (celsius < -273.15)
      throw new Error(
        "value is below -273.15 (absolute zero). enter vaild value"
      );
    else {
      this._celsius = celsius;
      console.log("value updated" + celsius);
    }
  }
  get() {
    return this._celsius;
  }
}

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
class Employee {
  constructor(
    readonly id: number,
    private salary: number,
    protected department: string
  ) {}

  getDetails():string{ //parameter properties
    return `employee id=${this.id} ,salary =${this.salary} 
       department =${this.department} `;
  }
}

class Manager extends Employee{
    constructor(
         id: number,
         salary: number,
         department: string,
         private teamSize:number
      ) { 
        super(id,salary,department)
      }

      getDetails():string{
        return `${super.getDetails()} 
        teamSize =${this.teamSize} `;
      }

}

var obj8=new Manager(123,33333,"IT",43);
console.log(obj8.getDetails());


// 9- Create a generic class Box that can store any type of value. Add methods:
// setValue to set the value.
// getValue to get the value.
// Test the class with different types (e.g., string, number).

class Box<T> {
    private val: T; 

    constructor(val: T) {
        this.val = val;
    }

    setValue(val: T) {
        this.val = val; 
    }

    getValue(): T {
        return this.val; 
    }
}

var ob19=new Box(22);
var ob29=new Box("sttt");
var ob39=new Box({"key":12});

// 10- Write a generic function identity that takes an argument of any type and returns the same value.
//  Test it with a number, string, and boolean.

function printagine<T>(value:T):T
{
   return value;
}

console.log("10- Write a generic function identity")
console.log(printagine<string>("dddd"))
console.log(printagine<number>(12))
console.log(printagine<boolean>(true))


// 11- Write a generic function printLength that takes an
//  argument with a length property (e.g., string, array) and prints its length.
// Use a constraint to ensure the argument has a length property.

function printLength<T extends {length:number}>(value:T ):number
{
    return  value.length;
}
// printLength(true);
printLength("doaa");
console.log("task11--->"+ printLength([1,2,3]))
