function createIncrement() {
    let count = 0;
  function increment() {
    count++;
    console.log(count);
  }

  let message = `Count is ${count}`;  //templet or string litrel
  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // What is logged?

/* 

-log() is called which logs the message "Count is 0" to the console. 
* This is because the message variable was initialized with the value of count when createIncrement() 
* was called, which was 0. It did not get updated when increment() was called. 
* Therefore, the final output will be "Count is 0".

*/