let url = "http://pages/index/index?id=12&name=zhangsan&age=18";
let obj = {};
let str = url.split("?")[1].split("&");
for (let i = 0; i < str.length; i++) {
  let a = str[i].split("=");
  obj[a[0]] = a[1];
}

console.log(obj);
