// class  => property + method 
// instance or object  => new ClassName() 
// inhertance => childClass inherit or extend  parentClass
// implement => class implement interface 
// abstractClass

interface person{
    name:string,
    haveJob(jobnmame:string):boolean
    canWalk(haveLegs:boolean):boolean
}

abstract class Car{
    public model:string = "";
    public make:number = 0;
    constructor(){};

    abstract hasEngine(model:string,HP:number):number;

    private calculateEninePower(power:number):number{
        return  power *2;
    }
}

// access Modefier => public , private, protected 


class Student implements person{
    public name:string;
    protected age:number;
    private level:string="";
    constructor(name:string, age:number, level:string) {
        this.name = name;
        this.age = age
    }
    isMale(type:string):boolean{
        return type.toLowerCase() == "male";
    }
    schoolDept():string{
        let className:string = "";
        switch (this.level) {
            case "A1":
                    className = "A1-1";
                break;
            case "L2":
                    className = "L2-1";
                break;
        
            default:
                className = "no CLass name for this Level";
                break;
        }

        return className;
    }
    haveJob(jobnmame: string): boolean {
        return false;
    }
    canWalk(haveLegs: boolean): boolean {
        return true;
    }
    details():string{
        return `My name is ${this.name} with age ${this.age} years and iam in level ${this.level}`
    }
    // getter and setter
    get studentLevel():string{
        return this.level;
    }
    set studentLevel(lev:string){
        this.level = lev;
    }
}

class Childeren extends Student {
    public familyName:string;
    constructor(name:string, age:number, level:string, familyName:string){
        super(name, age, level);
        this.familyName = familyName;
    }
    checkProberties(){
        this.age = 26;
        return this.schoolDept();
    }
    isMale(type: string): boolean {
        return false;
    }
    details(): string {
        return `${super.details()} and my familyName is ${this.familyName}`
    }
}

// let std1:Student = new Student();   //  in case no constructor or Default one
let std2:Student = new Student("Ali",18, "L2");
// std2.level = "L4";  // can't access private proberty
std2.isMale("Male")
std2.schoolDept();
std2.studentLevel;
std2.studentLevel = "A3";

let child1:Childeren = new Childeren("namxer",23,"L1","Tom");
child1.checkProberties();
child1.details()


// abstract class Shape{
//     // public length:number;
//     // protected width:number
//     // constructor(length:number,width:number){
//     //         this.length = length;
//     //         this.width = width;
//     // }

//     private static count: number = 0;
//     // parametes property
//     constructor(public length:number, protected width:number){};

//     abstract getArea(length:number,width:number):number;

//     increaseCounter():number{
//         Shape.count ++;
//         return Shape.count;
//     }

//     static getCount(){
//         return this.count;
//     }
//     printDetails():string {
//         return `shape length is ${this.length} and width ${this.width} 
//                 and number of created shapes is ${Shape.count++} or increeae one ${this.increaseCounter()}`
//     }
// }

// Shape.getCount();

// class Square extends Shape{
//     getArea(length: number, width: number): number {
//         return length * width;
//     }
// }
// let sq1:Square = new Square(25,25);
// let sq1:Shape = new Shape(25,25);  // cannot create instance from abstract clase

let x= 25; // implictiy number type
// x= "mohemd";

// generic 
function unknownValue <t> (value:t) : t { 
    return value;
}
unknownValue<number>(2);
unknownValue(25);
unknownValue<string>("ali");
unknownValue<boolean>(true);

function with2Values <q,x> (val1:q,val2:x):[q,x]{
    return [val1,val2]
}
with2Values<number,string>(25,"abc")
with2Values<number,number>(23,14)
with2Values<boolean,number>(true,14)
with2Values<object,number[]>({name:"ali",type:true},[14,121])

class animal <t = number>{
    public value:t="" as t;
    printValue():t{
        return this.value
    }
}
let an1:animal<string> = new animal<string>();
an1.value = "as";
an1.printValue();
let an2:animal = new animal();
an2.value = 12312;


function getLength <t extends {length:number}> (val:t):number{
    return val.length;
}
// getLength(242);
// getLength(true);
getLength("xada");
getLength([1,2,3]);
getLength({length:12,width:13});