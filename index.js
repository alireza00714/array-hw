"strict mode";

// solution 1
let deleteByIndex = function (arr, index) {
  arr.splice(index, 1);
  return arr;
};

//solution 2
let combine = function (arr, ...arrays) {
  for (let item1 of arrays) {
    for (let item2 of item1) {
      arr.push(item2);
    }
  }

  arr.sort((a, b) => a - b);

  return arr;
};

//solution 4
let numberFinder = function (text) {
  number = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") continue;
    if (typeof (+text[i]) == "number" && isNaN(+text[i]) == false) {
      number.push(+text[i]);
    } else continue;
  }
  return number;
};
