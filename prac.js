// #variables
var name = "teja reddy", firstname = "teja", lastname = "reddy";
name = "reddy";
console.log(name + " " + firstname); // teja reddy teja

var id;
var myId = null;
console.log(id); // undefined
console.log(myId); // null
console.log(Number.MAX_VALUE);

var name; console.log(name);

// A letter (A-Z or a-z)
// A dollar sign ($)
// Or an underscore (_)


// # Arithmetic

var x = 5;
console.log(x--); // 5
console.log(x); //4

var x = 5;
console.log(--x); //4
console.log(x); //4

var x = 100 + 50 * 3;
console.log(x);


// # Data Types primitive : numbers, strings , boolean ,biginit, symbol , undefined
// # non primitive : object ,Array, null , Map, set , weekmap,date
// # function is non data structure

var car;
console.log(typeof car); // undefined

var carNull = null;
var carArray = [];
var myString = "";
console.log(typeof carNull);// object
console.log(typeof (carNull)); // object
console.log(typeof carArray); //object
console.log(typeof myString); //string
const myFunc = () => 10;

console.log(typeof myFunc);// function

// #object

var firstName = "Teja", lastName = "Reddy";
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var newPerson = person.fullName;

console.log(person.fullName());// John Doe
console.log(newPerson()); // Teja Reddy

// #string and methods

var myString = "abcdefgc";
console.log(myString.length); // 7
console.log(myString.indexOf("b"))// 1
console.log(myString.indexOf("z"))//-1
console.log(myString.lastIndexOf("b"))// 1
console.log(myString.indexOf("c", 1)); // 2 second parameter is where the search should start
console.log(myString.search("c")); //2
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).
console.log(myString.slice(2, 3));//c  // can take negative numbers 
console.log(myString.substring(2, 3));//c  //same like splice but cant take negative number 
console.log(myString.slice(2));// cdefgc
console.log(myString.substr(2, 3));//cde  // second arg is length
console.log(myString.replace("c", "C")); //abCdefgc  /// replace only first occurance and case sensitive
console.log(myString.split(""));// ["a", "b", "c", "d", "e", "f", "g", "c"]
console.log(myString.charAt(1));//b
var str = "       Hello World!        ";
console.log(str.trim()); // Hello World! // removes both left and right side


//# Numbers

var x = 100 / "A";
console.log(x);// NAN
console.log(isNaN(x));// true
console.log(typeof NaN);//number
var myNumber = 32;
console.log(myNumber.toString()); // 10
console.log(Number("100a"));// NAN
console.log(Number("100"));//100
console.log(parseFloat("100.10"));// 100.1
console.log(parseInt("10.10"));//10

//# Arrays

var newArr = ["10", 10, 23, "Teja"];
console.log(newArr.length);// 4

newArr.forEach((val, index) => {
    console.log(index + " " + val);
}) // 0 10 , 1 10 , 2 23 , 3 Teja
newArr.push(11);
console.log(newArr);//["10", 10, 23, "Teja", 11]

var newObjArray = new Array();
console.log(newObjArray);//[]
console.log(Array.isArray(newArr));// true
console.log(newArr instanceof Array);//true

console.log(newArr.toString()); //10,10,23,Teja,11
console.log(newArr.join("|")); //10|10|23|Teja|11 
console.log(newArr.pop()); // 11
console.log(newArr); //["10", 10, 23, "Teja"]
console.log(newArr.shift())// 10
console.log(newArr.splice(2, 2, 30, 50));//["Teja"]
console.log(newArr);//[10, 23, 30, 50]
console.log(newArr.slice(2));//[30, 50]
console.log(newArr);//[10, 23, 30, 50]
console.log(newArr.slice(2, 3))//30

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());//["Apple", "Banana", "Mango", "Orange"]
console.log(fruits.reverse());//["Orange", "Mango", "Banana", "Apple"]
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort((a, b) => a - b)); //[1, 5, 10, 25, 40, 100]
// // /If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.
var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

console.log(cars.sort((a, b) => a.year - b.year));
cars.sort(function (a, b) {
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});

var newFruits = fruits.map((a) => a + " Fruit");
console.log(newFruits);
console.log(newFruits);["Orange Fruit", "Mango Fruit", "Banana Fruit", "Apple Fruit"];

var newPoints = points.filter((x) => x % 2===0);
console.log(points);
console.log(newPoints);
console.log(newPoints.every((x)=> x >1)); //true


// #errors

var name={
    firstName:"Teja"
}

try{
    var test = name.lastnameCheck.toLowerCase() ;
    console.log(test);
}catch(e){
   console.log(e);  // TypeError: Cannot read property 'toLowerCase' of undefined
}
finally{
    console.log("complete");
}

// #Scope

function myFunction() {
   carName = "Volvo";
    // code here CAN use carName
  }
  myFunction(); // skip this will throw an error 
  console.log(carName); // volvo

  hositVal=20;
  function myHositFunction() {
    console.log(hositVal);
     // code here CAN use carName
   }
myHositFunction();


// #let and const


function myFunctionWithLet(){
    let myNameLet="teja";
}

myFunctionWithLet();
//console.log(myNameLet); // my let or var not defined

let myx= 2;
//let myx=3; // can't recreate same variable name

console.log(myx); // error already been declared

var myy =2;
var myy=3;

console.log(myy);
// # this 

function myFuncThis(){
    console.log(this);
}
console.log(this); // Window Object 
myFuncThis(); // window object

myFunctThisArrow=()=>{
    console.log(this);
}

myFunctThisArrow(); // Window Object

const myContFunctThisArrow=()=>{
    console.log(this);
}

myContFunctThisArrow();// Window Object 

const myThisObject={
    name:this
}

console.log(myThisObject); //window object

const myContThisObject={
    name:this,
    getName:function(){
        return name;
    }
}

console.log(myContThisObject.getName()); // object object

const myConstThisObject={
    name:this,
    getName:function(){
        return this.name;
    }
}

console.log(myConstThisObject.getName()); // Window object 

const myConstArrowThisObject={
    name:"Teja",
    getName:()=>{
        return this.name;
    }
}

console.log(myConstArrowThisObject.getName()); //[object Object]

const myConstWithoutArrowThisObject={
    name:"TejaReddy",
    getName:function(){
        return this.name;
    }
}
console.log(myConstWithoutArrowThisObject.getName()); //TejaReddy


//JSON

let newEmp ={
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }

    console.log(newEmp.toString()); // [object object]

    console.log(JSON.stringify(newEmp));

    console.log(JSON.parse((JSON.stringify(newEmp)).replace("firstName","name")));

    let newMyEmp={
    employees:[
      {firstName:"John", lastName:"Doe"},
      {firstName:"Anna", lastName:"Smith"},
      {firstName:"Peter", lastName:"Jones"}
    ]
    }

    newMyEmp.employees.map((x)=>console.log(x));

    //forms
    console.log(document.forms['myForm']['fname'].value);


    //Advanced JS

var newObjectJs= new Object();
console.log(newObjectJs); //{}

newObjectJs={
    name:"Teja",
    age:30
}
console.log(newObjectJs); // {name: "Teja", age: 30}

var againNewObjectJs=Object.assign({},newObjectJs); // Object.assign({}) -->{}
console.log(againNewObjectJs);// {name: "Teja", age: 30}

newObjectJs.name="vinod";
console.log(newObjectJs);//{name: "vinod", age: 30}
console.log(againNewObjectJs);//{name: "Teja", age: 30}

var newAgainNewObjectJs=newObjectJs;
console.log(newAgainNewObjectJs);//{name: "vinod", age: 30}
newObjectJs.name="ram";
console.log(newAgainNewObjectJs); //{name: "ram", age: 30}

var person = {fname:"John", lname:"Doe", age:25};
