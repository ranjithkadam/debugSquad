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
function wordAnalyzer(paragraph) {
   let split = paragraph.split(" ");
   console.log("Words: " + split);
   console.log("Word Count: " + split.length);
   let length = paragraph.replaceAll(" ", '')
   console.log("Character count: " + length.length);

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
}

let paragraph = "JavaScript is a powerful programming language used for web development";
//wordAnalyzer(paragraph);

// ==================================================================================================================

// #### 6. Chat Censorship Tool
// • Goal: Detect and replace banned words in a sentence with asterisks or other
// censoring characters.
// • Example: "This movie is stupid" → "This movie is *****"
// • Concepts Used: replaceAll(), split(), arrays for banned words
// • Difficulty: Medium
// Explanation:
// 1. Create an array of banned words.
// 2. Iterate through the array of banned words.
// 3. For each banned word, use replaceAll() to replace it with a string of asterisks of the
// same length.

function censorship() {
   let bannedWords = ["blood", "froud", "goast", "hacker", "bad", "stupid"];
   result = "";
   let split = sentance.split(" ");
   for (let i = 0; i < split.length; i++) {
      for (j = 0; j < bannedWords.length; j++) {
         if (bannedWords[j] == split[i]) {
            var found = split[i];
            for (let i = 0; i < found.length; i++)
               result += found[i].replace(found[i], "*");
         }
      }
   }
   console.log(sentance.replaceAll(found, result));
}
let sentance = "This movie is frou so goast dont reccomend";

//censorship();

// ==================================================================================================================

// #### 7. Palindromic Sentence Checker
// • Goal: Check if a sentence is a palindrome, ignoring spaces and punctuation.
// • Example: "Was it a car or a cat I saw" → Palindrome ✅
// • Concepts Used: toLowerCase(), replace(), split(), reverse(), join()
// • Difficulty: Medium
// Explanation:
// 1. toLowerCase(): Converts the sentence to lowercase.
// 2. replace(/[^a-z0-9]/g, ''): Removes all non-alphanumeric characters.
// 3. split(''): Splits the sentence into an array of characters.
// 4. reverse(): Reverses the array of characters.
// 5. join(''): Joins the characters back into a string.
// 6. Compare the original cleaned sentence with the reversed sentence.

