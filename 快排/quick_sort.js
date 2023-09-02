function quick_sort(arr) {
    if (arr.length <= 1) return arr;
  
    let temp = arr.splice(Math.floor(arr.length / 2), 1)[0];
  
    let left = [], right = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < temp) left.push(arr[i]);
        else right.push(arr[i]);
    }
  
    return [...quick_sort(left), temp, ...quick_sort(right)];
  } 
  
  let arr = [2, 3, 34, 54,5, 45,6, 23, 23];
  console.log(quick_sort(arr))