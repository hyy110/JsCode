function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function() {
  console.log("running")
}

function Student() {};
Student.prototype = new Person('hyy', 18);

let stu = new Student();
stu.running();
console.log(stu.name)

// 缺点：属性未继承，需要new Person('hyy', 18)给属性赋值