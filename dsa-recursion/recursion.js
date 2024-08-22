/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (nums.length === idx) return 1;

  return nums[idx] * sum(nums, idx+1);
  
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx= 0, longest) {
  if (words.length === idx) {return longest};
  longest = Math.max(words[idx].length, longest)
  return longest(words, ind+1, longest)


}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, everyOther = '') {
if (!everyOther){
  everyOther = []
}
if (str.length === idx){return everyOther.join('')}

if (idx % 2 ===0){
  everyOther += str[id]
  return everyOther(str, idx+1, everyOther)
}
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {

  leftIndex = idx
  rightIndex = str.length-1-idx
  if (rightIndex <= leftIndex){return true}
  if (str[rightIndex] !== str[leftIndex]){return false}

  return isPalindrome(str, inx+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx = arr.length){return -1}

  if (arr[idx] === val){ return idx}
  else{
    return ( findIndex(arr, val, idx+1))
  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reverse ='') {
  if (str.length === idx){return reverse}

  lastIndex = str.length-1-idx
  reverse += str[lastIndex]
  return revString(str, idx+1, reverse)


}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
