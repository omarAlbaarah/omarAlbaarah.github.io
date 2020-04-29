// Q6:
var count = {
    counter: 0,
    Add: function() {
        return this.counter +=1;
    },
    Reset: function() {
        return this.counter = 0;
    }
};
document.writeln("counter= " + count.counter);
document.writeln("calling add method from counter= " + count.Add());
document.writeln("calling add method from counter= " + count.Add());
document.writeln("reset counter= " + count.Reset());

// Q7:
// Counter is the free parameter
// Free parameter it’s the parameter that its not defined in the function and not from its argument.

// Q8:
var count = {
        counter: 0,
        Add: function() {
            return this.counter +=1;
        },
        Reset: function() {
            return this.counter = 0;
        },
    MakeAdder: function(x){
        return this.counter +=x;
    }
    };
    
    document.writeln("counter= " + count.counter);
    document.writeln("calling makeAdder method from counter= " + count.MakeAdder(5));
    document.writeln("calling makeAdder method from counter= " + count.MakeAdder(5));
    document.writeln("calling makeAdder method from counter= " + count.MakeAdder(5));
    document.writeln("reset counter= " + count.Reset());
    document.writeln("calling makeAdder method from counter= " + count.MakeAdder(7));
    document.writeln("calling makeAdder method from counter= " + count.MakeAdder(7));
    document.writeln("calling makeAdder method from counter= " + count.MakeAdder(7));
    


    

//Q9:
//Add all the code inside window.onload function

//Q10:
const Employee = (function() {
    let name= ""; //private data
    let age=""; //private data
    let salary= "";  //private data
    let Address,
    function setName(newName) { //private inner function
        name= newName;
    }
    function getName() {
        return name;
    }
    function setAge(newAge) {
        age = newAge;
    }
    function getAge() {
        return age;
    }
    function setSalary(newSalary) {
        salary = newSalary;
    }
    function getSalary() {
        return salary;
    }
    function increaseSalary(percentage) {
        setSalary(getSalary() + ((getSalary() * percentage) / 100));
    }
    function increamentAge(inc) {
        setAge(getAge() + inc);
    }
    function setAddress(newAddress) {
        Address = newAddress;
    }
    function getAddress() {
        return Address;
    }
    return {
        myAddress:Address,
        setAddress: setAddress,
        getAddress: getAddress,
        setName: setName,
        setAge:setAge,
        setSalary:setSalary,
        increaseSalary:increaseSalary,
        increamentAge:increamentAge
    }
    })();

// Q11:
// Define Module for Address:
  const Address = (function() {
        let  state = "";
        let city = "";
        let zipCode = "";
        return {
            setState: (newstate) => this.state = newstate,
            setCity: (newCity) => this.city = newCity,
            setZipCode: (newZipCode) => this.zipCode = newZipCode,
            getState: ()=> this.state,
            getCity: ()=> this.city,
            getZipCode: ()=> this.zipCode 
        }
        })();

// i did add the address to employee function



