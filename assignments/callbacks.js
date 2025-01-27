// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
return cb();
}

console.log(getLength(items, function(){
return items.length;
    })
  );

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

console.log(last(items, function(){
  return items[items.length -1];
}));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
console.log(sumNums(5, 2, function(x, y){
return x + y;
  })
);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

console.log(multiplyNums(5, 5, function(x, y){
  return x * y;
    })
  );

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

let cb = function (item, list) {
  if (list.includes(item)) {
    return true;
  }
  else{
    return false;
  }
};

console.log(cb('eggs', ['bacon', 'eggs', 'cheese']));

/* STRETCH PROBLEM */
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  /*found a different way to get rid of duplicates thats easier for me to understand*/
const array = [1, 1, 2, 2, 3, 3];

const uniqueArray = new Set(array);

const noDupps = [...uniqueArray];

console.log(noDupps);
