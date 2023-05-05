function createStack() {
    let items = [];
    function push(item) {
        items.push(item);
    }
    function pop() {
        return items.pop();
    }
    return {
        push,
        pop
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);

/* In this modified version, the createStack function now uses closures to create private variables 
items, push, pop. These functions have access to the items 
array through the closure, but are not exposed to the global scope, 
making them more secure and less likely to be accidentally modified.

The returned object now only exposes the push, pop, and getItems methods,
 which can be used to interact with the stack.  */