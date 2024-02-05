"use strict";
// this keyword

console.log(this);
 
function greet(){
    console.log(this);
}
window.greet();
greet();

const obj={
    name:"yuva",
    x:function(){
        console.log(this);
    }
};
obj.x();

// call , apply , bind function

let person={
    firstname:"yuva",
    lastname:"Rani"
};
let person2={
    firstname:"Abdul",
    lastname:"kalam",
    name:function (){
        console.log(this.firstname,this.lastname);
    }
};
function fullname(h,he){
    console.log(this.firstname,this.lastname,h,he);
}
function name(){
    console.log(this.firstname,this.lastname);
}
 // call function
name.call(person);

// apply function
fullname.apply(person,["hi","hello"]);

// bind function
let info=name.bind(person2);
info();
