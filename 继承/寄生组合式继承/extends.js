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

function inherit(Subtype, Supertype) {
  Subtype.prototype = Object.create(Supertype.prototype);
  Subtype.prototype.constructor = Subtype;
}
// Student.prototype = new Person('hyy', 18);
inherit(Student, Person)

let stu = new Student('hyy1', 18);
stu.running();
console.log(stu.name)
