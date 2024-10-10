// Palidrome Number
// An integer is a palidron when it reads the same forward and backward

// input: x = 121 ---->>> Output: true
// input: x = 10 ---->>> Output: false

const Palindrom = function (x) {
 return x === +x.toString().split("").reverse().join("");

}
console.log(Palindrom(121));



