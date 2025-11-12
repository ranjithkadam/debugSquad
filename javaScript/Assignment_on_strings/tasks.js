// #### 1. Username Formatter
// • Goal: Convert a full name into a clean, standardized username. This involves removing
// leading/trailing spaces, converting the name to lowercase, and replacing spaces with
// underscores.
// • Example: " John Doe " → "john_doe"
// • Concepts Used: trim(), toLowerCase(), replace(), split(), join()
// • Difficulty: Easy
// Explanation:
// 1. trim(): Removes whitespace from both ends of a string.
// 2. toLowerCase(): Converts the string to lowercase.
// 3. split(' '): Splits the string into an array of words, using space as the delimiter.
// 4. join('_'): Joins the array elements back into a string, using underscore as the separator.


function userName(name) {
   let trimName = name.trim();
   let lowerName = trimName.toLowerCase();
   let splitName = lowerName.split(" ");
   let joinName = splitName.join("_")

   console.log(joinName);
}
// userName(" John Doe rk");

// ==================================================================================================================

// #### 2. Email Validator & Extractor
// • Goal: Validate the basic structure of an email address and extract the username and
// domain parts.
// • Example: "vamsi@gmail.com" → Valid ✅ | Username: "vamsi", Domain: "gmail.com"
// • Concepts Used: includes(), endsWith(), split(), slice()
// • Difficulty: Medium
// Explanation:
// 1. includes('@'): Checks if the email contains the "@" symbol.
// 2. endsWith('.com'): Checks if the email ends with ".com" (can be extended for other
// domains).
// 3. split('@'): Splits the email into two parts at the "@" symbol.
// 4. slice(): Can be used to extract specific parts of the username or domain if needed.

function emailId(mail) {
   let split = mail.split("@");
   let slice = mail.slice();
   if (mail.includes("@") == true && mail.endsWith(".com") == true && mail.includes(" ") == false) {
      console.log("Verified");
   }
   else {
      console.log("Invalid Email")
   }
   console.log("Username:" + split.slice("")[0]);
   console.log("Domain:" + split.slice("")[1]);
}
//emailId("vamsi@gmail.com");

// ==================================================================================================================

// #### 3. Title Case Converter
// • Goal: Convert any sentence into title case, where the first letter of each word is
// capitalized.
// • Example: "learn javascript in 30 days" → "Learn Javascript In 30 Days"
// • Concepts Used: split(), map(), charAt(), toUpperCase(), slice()
// • Difficulty: Medium
// Explanation:
// 1. split(' '): Splits the sentence into an array of words.
// 2. map(): Iterates over each word in the array.
// 3. charAt(0).toUpperCase(): Converts the first character of the word to uppercase.
// 4. slice(1): Extracts the rest of the word (from the second character onwards).
// 5. Concatenate the uppercase first letter with the rest of the word.
// 6. join(' '): Joins the words back into a sentence.

// let sentence = "learn javascript in 30 days";
// let letters = "";
// let split = sentence.split(" ");
// //console.log(sentence.charAt(2))
// //console.log(split[1]);
// // for (i = 0; i < split.length; i++) {

//    letters = split[1].charAt(0).toUpperCase();

//    //console.log(split.split("")[i]);
//    console.log(letters)
// // }

// ==================================================================================================================

// #### 4. Password Strength Checker
// • Goal: Check the validity of a password based on predefined rules, such as minimum
//          length, inclusion of a number, and inclusion of a special character.
// • Rules: Min 8 chars, must include number & special character.
// • Concepts Used: length, match(), includes(), toUpperCase(), toLowerCase()
// • Difficulty: Medium

// Explanation:
// 1. length: Checks if the password meets the minimum length requirement.
// 2. match(/[0-9]/): Uses a regular expression to check for the presence of at least one
// number.
// 3. match(/[^a-zA-Z0-9\s]/): Uses a regular expression to check for the presence of at
//     least one special character.
// 4. Return true if all conditions are met, false otherwise.

// let password = "Ranjith@2003";
// if (password.length >= 8) {
//    console.log(password.match(/[0-9]/)[0]);
//    console.log(password. match(/[^a-zA-Z0-9\s]/));
// }

// else {
//    console.log("The Password Must and should in 8 Letters");
// }

// ==================================================================================================================

// #### 5. URL Slug Generator
// • Goal: Create SEO-friendly URLs (slugs) from titles by converting them to lowercase,
// replacing spaces with hyphens, and removing any leading/trailing spaces.
// • Example: "Learn JavaScript in 30 Days" → "learn-javascript-in-30-days"
// • Concepts Used: trim(), toLowerCase(), replaceAll()
// • Difficulty: Easy
// Explanation:
// 1. trim(): Removes whitespace from both ends of the title.
// 2. toLowerCase(): Converts the title to lowercase.
// 3. replaceAll(' ', '-'): Replaces all spaces with hyphens.

function urlSlangGenerator(sentence) {
   let trim = sentence.trim("");
   let toLowerCase = trim.toLowerCase();
   let replaceAll = toLowerCase.replaceAll(" ", "-");
   console.log(replaceAll);
}
//urlSlangGenerator("Learn JavaScript in 30 Days");

// ==================================================================================================================

// #### 8. Word Counter & Analyzer
// • Goal: Analyze a paragraph of text and provide statistics such as word count, character
//         count (excluding spaces), and the longest word.
// • Word count
// • Character count (excluding spaces)
// • Longest word
// • Concepts Used: split(), length, filter(), replaceAll()
// • Difficulty: Medium

let paragraph = "JavaScript is a powerful programming language used for web development";
let split = paragraph.split(" ");
console.log("Words: " + split);
console.log("Word Count: " + split.length);
let length = paragraph.replaceAll(" ", '')
console.log("Character count: " + length.length);
// console.log(paragraph.split(" "));
max = 0;
let arrlength = paragraph.split(" ");
for (let i = 0; i < arrlength.length; i++) {
   let last = arrlength.slice("")[i].length;

   if (max < last) {
      max = last;
      word = arrlength.slice("")[i]
   }
}
console.log(" '" + word + "' is Lorgest Word, the length is: " + max);
// console.log("Longest word: " );

