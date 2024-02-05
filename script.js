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

// call, apply, bind function

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

// currying function using bind and closure
// using closure
function multiply(x){
   return function mul(y){
        console.log(x*y);
    }
}
let mulcall=multiply(3);
mulcall(2);

let mulcall1=multiply(5);
mulcall1(2);

// using bind
function add(a,b){
 console.log(a+b);
}
let addcall=add.bind(this,3,9);
addcall();

// prototype
let prototp={
   x:10,
   y:"hi"
};

let a={
    __proto__:prototp,
    z:5,
}
console.log(a.x);
console.log(a.z);
prototp.y="hello";
console.log(a.y);
console.log(prototp.y);