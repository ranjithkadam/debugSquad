// 1. start with (^):
let start= /^ranjith/;
// console.log(start.test("ranjithasd"));

//  2.end with ($)

let end=/abc$/;
// console.log(end.test("abc"));

//  3. single-middle character (.): it allows only one character(including special character).

let middle=/a.b/;
// console.log(middle.test("acb"));

//  4. zero or more -middle characters allows (*);

let multiMiddle=/go*gle/;
// console.log(multiMiddle.test("ggle"));

// 5. atleat one-middle character allows(+):

let oneOrMore=/go+gle/;
// console.log(oneOrMore.test("goooogle"));
// console.log(oneOrMore.test("ggle"));    //false

//  6. set of values [n-n];
let set1=/^[a-z]+_[0-9]+@+[a-z]+.+com+$/;
// console.log(set1.test("aww_3345@gmail.com"));

//  7. for digits shortcuts (%d)

let digits= /%d/;
// console.log(digits.test("1"));

// 8. {n}-> strickly size, {n,} atleast one from infinite, {n,m}-> starts from n to m

let s1=/{}/;
// console.log(s1.test("abc"));

username=/^[a-z]+[0-9]*_*$/;

console.log(username.test("abcssdsd123"));