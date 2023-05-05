const vowelCount = function (param) {
    let vowelCountMap = new Map();

    if (typeof param === "string") {
        let vowelsPresent = param.match(/[aeiou]/gi);
        for (let i = 0; i < vowelsPresent.length; i++) {
            if (vowelCountMap.has(vowelsPresent[i])) {
                vowelCountMap.set(vowelsPresent[i], vowelCountMap.get(vowelsPresent[i]) + 1);
             } else {
                vowelCountMap.set(vowelsPresent[i], 1);
            }
        }
    }
    else {
        console.log("Please provide string")
    }

    return vowelCountMap;
}
console.log(vowelCount("Karishma"));