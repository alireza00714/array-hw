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

//solution 3
let duplicateRemover = function (arr) {
  let unique = [];
  arr.forEach(item => {
    if (!unique.includes(item)) {
      unique.push(item)
    }
  });
  return unique
};

console.log(duplicateRemover([1, 1, 4, 5, 3, 5, 3, 9, 1, 8, 3]));

//solution 4
let numberFinder = function (text) {
  number = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") continue;
    if (typeof +text[i] == "number" && isNaN(+text[i]) == false) {
      number.push(+text[i]);
    } else continue;
  }
  return number;
};

//solution 5
let flat = [];
let arrayFlatter = function (arr) {
  for (let item of arr) {
    if (Array.isArray(item) == true) arrayFlatter(item);
    else {
      flat.push(item);
      continue;
    }
  }
  return flat;
};
