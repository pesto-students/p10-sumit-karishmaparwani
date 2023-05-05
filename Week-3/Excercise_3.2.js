//Bind Example
function multiply(a,b){

    return this.a * this.b;
}

//Without bind
console.log(multiply(10,20)); // Here the output will be NaN; Why? Because this.a/b will search as global variable 

//With Bind
const result = multiply.bind({a:10,b:20}); //We are binding here. 

console.log(result()); // Output will be 200 

//Call Example

const callResult = multiply.call({a:4,b:5});

console.log(callResult);

//apply Example

var number = [8,5]

const applyResult = multiply.apply(number);


console.log(applyResult,"Apply result");