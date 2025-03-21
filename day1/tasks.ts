// 1- Create an interface User with properties name (string) and age (number)
// . and it is required not optional 
//    required create an object with only the name property.
// -----------------------------------------------------------------------
interface User{
    name:string,
    age:number
}

interface UserWithNameOnly extends Pick<User, 'name'>{};

var object1 : UserWithNameOnly = {name:'John'};
console.log(object1.name);

// 2- Create an interface Profile with optional properties username (string) and email (string).
//    required create an object with both properties.


interface Profile{
    username?:string,
    email?:string
}

var object2: Required<Profile> = {username:'John', email:"email"}

// or 
interface ProfileRequired extends Required<Profile> {};


// 3- Use Record to create an object where keys are "red", "green", and "blue", and values are their corresponding hex color codes (strings). 
//    Test by accessing the red key.
//record==>use when have fixed keys
type Colors = Record<"red"|"green"|"blue", string>;
var Colors_hexa:Colors = {red:'#FF0000', green:'#00FF00', blue:'#0000FF'};
console.log(Colors_hexa.red);


// 4- Create an interface Person with properties name (string), age (number), and email (string).
//    create a new type with only the name and email properties.
//    Test by creating an object with these properties.
// --------------------------------------------------------------------

interface Person{
    name:string,
    age:number,
    email:string
}
type NameMail= Pick<Person, 'name'|'email'>;
var oject4:NameMail={name:"doaa",email:"d123@gmail.com"};
console.log(oject4);


// 5- Use the same Person interface from the previous question.
//    create a new type without the age property.
//    Test by creating an object with only name and email.
// ----------------------------------------------------------------------

type withoutAge=Omit<Person,'age'>;
var objec5:withoutAge={name:"doaa",email:"mail"};
console.log(objec5);


// 6- Create a union type Colors = "red" | "green" | "blue" | "yellow".
//   create a new type without "yellow".
//   Test by assigning a value of the new type.

  type Colorss="red"|"green"|"yellow"| "blue";
  type ColorswithoutYellow=Exclude<Colorss,"yellow">;
    var color:ColorswithoutYellow="red";

//     // it likes
//  type Letters = "A" | "B" | "C";
// type LettersWithoutB = Exclude<Letters, "B">; // "A" | "C"


// 7- Use the same Colors union type from the previous question.
//    create a new type with only "red" and "blue".
//    Test by assigning a value of the new type.

type RedBlue=Extract<Colorss,"red"|"blue">;
var color2:RedBlue="blue";

// its likes :
// type Letters = "A" | "B" | "C";
// type OnlyAorB = Extract<Letters, "A" | "B" | "Z">; // "A" | "B"

// 8- Create a union type MaybeString = string | null | undefined.
//    create a new type without null or undefined.
//    Test by assigning a value of the new type.

type MayBeString =string |null|undefined;
type StringOnly=NonNullable<MayBeString>;
var string:StringOnly="doaa";
// var ss:StringOnly=null; //error

// 9- Create a class Carx with properties make (string) and 
// model (string). Add a method getDescription 
// that returns a string like "This is a Toyota Corolla."

class Car{
    make:string
    model:string
    constructor(make:string ,model:string)
    {
        this.make=make;
        this.model=model;
    }
     getDescription():string{
        return `This is a ${this.make} ${this.model}`;
     }
}
var car1=new Car('Toyota','Corolla');
console.log(car1.getDescription());

// create interface with function 

interface printMessage{
  printNow(mesg:string):void;
}

var message:printMessage={
    printNow(mesg:string){
        console.log("Hello"+mesg);
    }
}

message.printNow("doaa");