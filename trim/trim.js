function mytrim(str) {
  let i = 0, j = str.length - 1;
  while (str[i] == ' ' && i < str.length-1) 
    i ++;
  while (str[j] == ' ' && j > 0)
    j --;

  return str.slice(i, j+1);
}

console.log(mytrim("  123   "))