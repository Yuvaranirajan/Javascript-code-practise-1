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
