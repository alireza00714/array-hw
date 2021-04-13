"strict mode";

let arr = ["a", "b", "c", "d"];

// solution 1
let deleteByIndex = function (arr, index) {
  arr.splice(index, 1);
  return arr;
};

