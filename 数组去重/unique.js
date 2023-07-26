let a = { a: 1 };
let b = { a: 1 };
let c = { b: 2 };
let nums = [a, b, c];
let arr = [1, 2, 2, 2, 2, 3, 3, 4];
let res = Array.from(new Set(arr));

function unique(arr) {
  return arr.filter((item, index) => {
    console.log(
      index,
      item,
      arr.findIndex((j) => j === item)
    );
    return index === arr.findIndex((j) => j === item);
  });
}
console.log(unique(nums));
