// Your code goes here
const rapid = (str) => {
    let newString = '';
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
            newString += char.toUpperCase();
        }
    }
    
    return newString;
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
