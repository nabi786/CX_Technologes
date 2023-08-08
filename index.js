// Solve all the following questions with the best possible approach. If you finish early,
// try to optimize your algorithm. There is no language or syntax restriction, do it in any
// language you feel comfortable. Please do not use any built-in functions like sort,
// reverse, etc. Try to complete it in under 1 hour.

// Q No1:
// Write a function that will take an array as input, sort, and return the array in descending
// order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].

const test1_fun = (array) => {
  var n = array.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        // Swap the elements
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

// Example usage
var inputArray = [920, 3, 2, 7, 4, 6, 9, 70];
var result = test1_fun(inputArray);
console.log(`this the result of first question ${result} `);

// Q#2: Write a function that will take a string as input, check and return if it is palindrome or
// not. For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false.
const checkString = (str) => {
  var emptyStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      emptyStr += str[i];
    } else if (str[i] >= "A" && str[i] <= "Z") {
      emptyStr += str[i].toLowerCase();
    }
  }

  var length = emptyStr.length;
  for (var i = 0; i < Math.floor(length / 2); i++) {
    if (emptyStr[i] !== emptyStr[length - 1 - i]) {
      return false;
    }
  }
  return true;
};

var str = "radar";
var result = checkString(str);

console.log(`this is resut Question2 :  ${result}`);

// ========================================
//
//
//        TEST 3
//
// ====================================

// Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
// because 11 and 19 are the largest numbers.

const test3_sumNumber = (arr) => {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two numbers");
  }

  let largest1 = arr[0];
  let largest2 = arr[1];

  if (largest1 < largest2) {
    [largest1, largest2] = [largest2, largest1];
  }

  for (let i = 2; i < arr.length; i++) {
    const num = arr[i];

    if (num > largest1) {
      largest2 = largest1;
      largest1 = num;
    } else if (num > largest2) {
      largest2 = num;
    }
  }

  return largest1 + largest2;
};

// Example usage
const inputArray3 = [3, 100, 7, 1, 5, 11, 19, 20];
const result3 = test3_sumNumber(inputArray3);
console.log(`Question3 result is: ${result3}`);

// ========================================
//
//
//        TEST 4
//
// ====================================
// Q#4: Write a function that will take an array as input and return an array with every missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8]

const test4_getMissionNums = (arr) => {
  const maxElement = Math.max(...arr);
  const missingElements = [];

  for (let i = 0; i <= maxElement; i++) {
    if (!arr.includes(i)) {
      missingElements.push(i);
    }
  }

  return missingElements;
};

const inputArray4 = [3, 4, 9, 1, 7, 3, 2, 6];
const get_missing = test4_getMissionNums(inputArray4);
console.log(`test4 get MIssion Nums: ${get_missing}`);

// ========================================
//
//
//        TEST 5
//
// ====================================
// Q#5: Write a function that will take an array of numbers and return the number most repeated
// in the array with how many times it was repeated. For example, if the array is
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.

const find_repeated_num = (arr) => {
  const frequencyMap = {};

  for (const num of arr) {
    if (frequencyMap[num] === undefined) {
      frequencyMap[num] = 1;
    } else {
      frequencyMap[num]++;
    }
  }

  let mostRepeatedNumber = null;
  let maxFrequency = 0;

  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      mostRepeatedNumber = num;
      maxFrequency = frequencyMap[num];
    }
  }

  return {
    number: mostRepeatedNumber,
    frequency: maxFrequency,
  };
};

const inputArray5 = [
  4, 3, 5, 6, 4, 5, 7, 9, 5, 2, 4, 6, 3, 5, 4, 6, 3, 4, 8, 5, 1, 5,
];
const result5 = find_repeated_num(inputArray5);
console.log(`${result5.number} is repeated ${result5.frequency} times.`);

// ========================================
//
//
//        TEST 6
//
// ====================================
// Q#6: Write a function that will take an array as input, it will rotate the array to the right 1 time
// and return the rotated array. Rotation of the array means that each element is shifted right
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]
const rotate_arry_fun = (arr) => {
  const rotatedArray = [];
  const lastIndex = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    const newIndex = (i + 1) % arr.length;
    rotatedArray[newIndex] = arr[i];
  }

  return rotatedArray;
};

var result_6 = [3,3,4,7,5,4,9];
result_6 = rotate_arry_fun(result_6);
console.log(`Ans of 6th Q: ${result_6}`); 
