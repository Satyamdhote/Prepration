// These are some of the most powerful JavaScript one liners that will save your time and boost your productivity.

// 1. Reverse a String

const reversedString = str => str.split('').reverse().join('');
reversedString("Hello World"); // dlroW olleH

// 2. Title Case a String

const titleCase = sentence => sentence.replace(/\b\w/g, char => char.toUpperCase());
titleCase("hello world"); // Hello World
 //////////////OR///////////
 let str = "hello world";
    var arr = str.split(" ");

    var newArr = arr.map((s) => {
        return s.charAt(0).toUpperCase()+ s.slice(1);
    })
    console.log(newArr.join(" "));


// 3. Swap Values Between Variables

[a, b] = [b, a];


// 4. Convert a Number to a Boolean

const isTruthy = num => !!num;
isTruthy(0) // False


// 5. Get Unique Values from an Array

const uniqueArray = arr => [...new Set(arr)];
uniqueArray([5,5,2,2,2,4,2]) // [ 5, 2, 4 ]


// 6. Truncate a String

const truncateString = (str, maxLength) => (str.length > maxLength) ? `${str.slice(0, maxLength)}...` : str;
truncateString("Hello World", 8); // Hello Wo...


// 7. Deep Clone an Object

const deepClone = obj => JSON.parse(JSON.stringify(obj));

const obj1 = { name: "John", age: 40};
const obj2 = deepClone(obj1);
obj2.age = 20;
console.log(obj1.age); // 40

//This method works for most objects, but it has some limitations. Objects with circular references or functions cannot be converted to JSON, so this method will not work for those types of objects.


// 8. Find the Last Occurrence in an Array

const lastIndexOf = (arr, item) => arr.lastIndexOf(item);
lastIndexOf([5, 5, 4 , 2 , 3 , 4], 5) // 1


// 9. Merge Arrays

const mergeArrays = (...arrays) => [].concat(...arrays);
mergeArrays([5, 5, 4], [2 , 3 , 4]) // [5, 5, 4, 2, 3, 4]


// 10. Find Longest Word in a Sentence

const longestWord = sentence => sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
longestWord("The quick brown fox jumped over the lazy dog") // jumped


// 11. Generate a Range of Numbers

const range = (start, end) => [...Array(end - start + 1)].map((_, i) => i + start);
range(5, 15); // [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


// 12. Check if Object is Empty

const isEmptyObject = obj => Object.keys(obj).length === 0;
isEmptyObject({}) // true
isEmptyObject({ name: 'John' }) // false


// 13. Calculate Average of Numbers

const average = arr => arr.reduce((acc, num) => acc + num, 0) / arr.length;
average([1, 2, 3, 4, 5, 6, 7, 8, 9]) // 5


// 14. Convert Object to Query Parameters

const objectToQueryParams = obj => Object.entries(obj).map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');
objectToQueryParams({ page: 2, limit: 10 }) // page=2&limit=10


// 15. Calculate Factorial of a Number

const factorial = num => num <= 1 ? 1 : num * factorial(num - 1);
factorial(4) // 24


// 16. Count Vowels in a String

const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
countVowels('The quick brown fox jumps over the lazy dog') // 11


// 17. Check for a Valid Email

const isValidEmail = email => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
isValidEmail("example@email.com") // true
isValidEmail("example") // false


// 18. Remove Whitespace from a String

const removeWhitespace = str => str.replace(/\s/g, '');
removeWhitespace("H el l o") // Hello


// 19. Check for Leap Year

const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
isLeapYear(2023) // false
isLeapYear(2004) // true


// 20. Generate a random string of specified length

const generateRandomString = length => [...Array(length)].map(() => Math.random().toString(36)[2]).join('')
generateRandomString(8) // 4hq4zm7y


// 21. Copy content to the clipboard

const copyToClipboard = (content) => navigator.clipboard.writeText(content)
copyToClipboard("Hello World")


// 22. Get Current Time in HH:MM:SS format

const currentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
currentTime() // 19:52:21


// 23. Check if a number is even or odd

const isEven = num => num % 2 === 0
isEven(1) // false
isEven(2) // true


// 24. Detect if it is dark mode

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode) // false


// 25. Scroll to the top of the page

const goToTop = () => window.scrollTo(0, 0)
goToTop()


// 26. Check for a Valid Date

const isValidDate = date => date instanceof Date && !isNaN(date);
isValidDate(new Date("This is not date.")) // false
isValidDate(new Date("08-10-2023")) // true


// 27. Generate Range of Dates

const generateDateRange = (startDate, endDate) => Array.from({ length: (endDate - startDate) / (24 * 60 * 60 * 1000) + 1 }, (_, index) => new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000));
generateDateRange(new Date("2023-09-31"), new Date("2023-10-08")) // [Sun Oct 01 2023 05:30:00 GMT+0530 (India Standard Time), Mon Oct 02 2023 05:30:00 GMT+0530 (India Standard Time), Tue Oct 03 2023 05:30:00 GMT+0530 (India Standard Time), Wed Oct 04 2023 05:30:00 GMT+0530 (India Standard Time), Thu Oct 05 2023 05:30:00 GMT+0530 (India Standard Time), Fri Oct 06 2023 05:30:00 GMT+0530 (India Standard Time), Sat Oct 07 2023 05:30:00 GMT+0530 (India Standard Time), Sun Oct 08 2023 05:30:00 GMT+0530 (India Standard Time)]


// 28. Calculate the interval between two dates

const dayDiff = (d1, d2) => Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000)
dayDiff(new Date("2023-10-08"), new Date("1999-04-31")) // 8926


// 29. Find the day of the year in which the date falls

const dayInYear = (d) => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
dayInYear(new Date('2023/10/08'))// 281


// 30. Check for Array Equality

const areArraysEqual = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
areArraysEqual([1, 2, 3], [4, 5, 6]) // false
areArraysEqual([1, 2, 3], [1, 2, 3]) // true