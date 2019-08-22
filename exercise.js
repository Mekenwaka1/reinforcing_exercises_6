const arr1 = [
  "hi",
  "marbles",
  "mittens",
  "bye",
  "lorem",
  "ipsum",
  "to",
  "a",
  "hippocampus"
];

const longestConsecutive = (arr, k) => {
  let longestString = "";
  if (k < 0 || arr.length == 0 || k > arr.length) {
    return longestString;
  }

  arr.forEach((string, index) => {
    let currentStr = arr.slice(index, index + k).join("");
    if (currentStr.length > longestString.length) {
      longestString = currentStr;
    }
  });

  return longestString;
};

console.log(longestConsecutive(arr1, 3));
