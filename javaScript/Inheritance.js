"use strict";
let person = {
     name: "",
     dateOfBirth :"",
     getName:function(){
         return name;
     },
     SetName:function(val){
         name = val;
    }
};

let personObj = Object.create(person);
personObj.SetName("john");
personObj.dateOfBirth = "1998-12-10";

console.log("The person's name is "+personObj.getName());
console.log("John was born on "+personObj.dateOfBirth);


let Employee = {
    salary: 0,
    hireDate: Date.now(),
    doJob: function(job){
        console.log("Q2: "+this.getName()+" is a "+job+" who earns $"+this.salary); 
    },
    __proto__: person
}
let empObj = Object.create(Employee);
empObj.SetName("Anna");
empObj.salary = 249995.50;
empObj.doJob("Programmer");


function PersonNew(Name, date) {
    this.name = Name;
    this.dateOfBirth = date;
}
PersonNew.prototype.toString = function() {
    console.log("Q3: name is: "+ this.name+" date of birth = "+[this.dateOfBirth.getFullYear(), (1+parseInt(this.dateOfBirth.getMonth())), this.dateOfBirth.getDate()].join('-'));
}
    
    let PersonNewObj = new PersonNew("Peter",new Date(1985, 10, 10));
    PersonNewObj.toString();



