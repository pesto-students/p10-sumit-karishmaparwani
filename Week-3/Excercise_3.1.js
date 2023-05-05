function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        console.log(args)
        const key = args.toString();

        if (cache.has(key)) {
            console.log(cache.get(key))
            return cache.get(key);
        }


        cache.set(key, fn(...args))
        console.log("hello",cache.get(key))
        return cache.get(key);
    }
}

function add(a, b) {
    return a + b;
}

function time(fn) {
    console.time() ;
    fn();
    console.timeEnd();       
};
//then calling...
const memoizeAdd = memoize(add);
// timeit(memoizeAdd(100));
time(() => memoizeAdd(100, 100)); // 200
time(() => memoizeAdd(100)); // 100
time(() => memoizeAdd(100, 200)); // 300
time(() => memoizeAdd(100, 100)); //returns 200 without function call✨
time(() => memoizeAdd(100, 100, 200, 300)); //able to take n number of arguments