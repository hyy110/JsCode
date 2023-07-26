function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function() {
  console.log("running")
}

function Student(name, age) {
  //借用构造函数实现属性继承
  Person.call(this, name, age)
};

Student.prototype = new Person('hyy', 18);

let stu = new Student('hyy1', 18);
stu.running();
console.log(stu.name)

//调用父类构造函数，解决不能继承属性的问题
//缺点：调用父类两次，所有子类实例事实上拥有两份父类的属性