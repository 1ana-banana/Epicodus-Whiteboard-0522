// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.
// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.
// Input: "Jasmine Ann Jones"           // Output: "Jasmine%20Ann%20Jones"

//psuedo code:
// create a function that passes in a string(url)
// split(" ")

function replaceSpace(url){
  const arrUrl = url.split(" ");
  return function(){
    return arrUrl.join("%20")
  }
}

const newUrl = replaceSpace("Jasmine Ann Jones");
newUrl();


// Recursion Version: WIP


// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]
// Output: [7, 9, "hi", 12, 53]

var deduper = function duplicateremover(array) {
  var len = array.length,
      out = [],
      obj = {},
      i;
  for (i = 0; i < len; i ++) {
    if (!obj[array[i]]) {
        obj[array[i]] = {};
        out.push(array[i]);
    }
  }
  return out;
}

console.log(deduper([7, 9, "hi", 12, "hi" , 7, 53]))



// function duplicateArr(arr){
//   let newArr = [];
//   let sortArr = arr.sort((a,b) => a-b);
//   for (i = 0; i < sortArr.length; i++){
//     if (sortArr[i] === sortArr[i + 1] && sortArr[i] !== sortArr[i - 1]){
//       newArr.push(sortArr[i])
//     }
//   }
//   return newArr.length === 0 ? null:newArr;

//   // if (newArr.length === 0){
//   //return null
//   //}
//   //else return newArr
// }

console.log(duplicateArr(arr));

var result = []

function deDupe(arr) {
  if (arr === []) {
    return result;
  }

  if (arr.length === 1 ) {
    result.push (arr[0]);
    return result;
  }
  if (arr.length === 2 && arr[0] !== arr[1]) {
    arr.map (elt => result.push(elt)).sort();
    return result;
  }
  if (arr.length === 2 && arr[0] === arr[1]) {
    return result;
  }

  //recursive 
  let a = arr.sort();
  if (a[0] === a[1]) {
    return deDupe(a.slice(2));
  } else {
    result.push(a[0]);
    return deDupe(a.slice(1));
  }
}

console.log(deDupe([7, 9, "hi", 12, "hi", 7, 53]));



function toUniqueArray(a){
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
      if (newArr.indexOf(a[i]) === -1) {
          newArr.push(a[i]);
      }
  }
return newArr;
}

var colors = ["red","red","green","green","green"];
toUniqueArray(colors);

var newArr = [];
function toUniqueArray(a, i = 0){
  if(i > a.length){
    return newArr
  }
  if (newArr.indexOf(a[i]) === -1) {
    newArr.push(a[i]);
    i++
    return toUniqueArray(a, i)
  }
}



//Question 3

var compress= function(string){
  let chars = string.split("");
  let res = "";
  for(let i=0;i<chars.length;i++){
      let count = 1;           
      let char = chars[i];      
      while(i<chars.length-1 && chars[i] == chars[i+1]){
        count++;                
        i++;                  
      }
      res += char + count;       
  }
  return res;
}

console.log(compress('aaabccdddda'))

// //Question 4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

var isitunique = function uniquecheck(str) {
  for (let i = 0; i < str.length; i++)
    for (let j = i + 1; j < str.length; j++)
      if (str[i] == str [j])
        return false;
  return true;
}

console.log(isitunique("copyright"))


// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:
// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [9, 2, 7, 12];
bubbleSort(numbers);
console.log(numbers);



function bblSort(arr){
     
  for(var i = 0; i < arr.length; i++){
      
    // Last i elements are already in place  
    for(var j = 0; j < ( arr.length - i -1 ); j++){
        
      // Checking if the item at present iteration 
      // is greater than the next iteration
      if(arr[j] > arr[j+1]){
          
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  // Print the sorted array
  console.log(arr);
 }
   
 var arr = [234, 43, 55, 63,  5, 6, 235, 547];


 // javascript program for recursive
// implementation of Bubble sort
 
// A function to implement
// bubble sort
function bubbleSort(arr, n)
{
 
    // Base case
    if (n == 1)
        return;
  
    // One pass of bubble
    // sort. After this pass,
    // the largest element
    // is moved (or bubbled)
    // to end.
     
    for (var i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1])
        {
         
            // swap arr[i], arr[i+1]
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
  
    // Largest element is fixed,
    // recur for remaining array
    bubbleSort(arr, n - 1);
}
  
// Driver code
 
    var arr = [64, 34, 25, 12, 22, 11, 90 ]
    bubbleSort(arr, arr.length);
    document.write("Sorted array : " + "<br>");
    for(var i = 0; i < arr.length; i++) {
    document.write(arr[i] + " ");
    }
     
    // This code is contributed by bunnyram19.
