class EventEmitter {
  constructor() {
    this.store = {};
  }

  on(name, fn) {
    if (this.store[name]) this.store[name].push(fn);
    else this.store[name] = [fn];
  }

  once(name, fn) {
    let Fn = () => {
      fn();
      this.off(name, fn);
    };
    this.on(name, Fn);
  }

  off(name, fn) {
    let tasks = this.store[name];
    if (tasks) {
      const index = tasks.indexOf(fn);
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  }

  emit(name, ...args) {
    if (this.store[name]) {
      let tasks = this.store[name].slice();
      for (let fn of tasks) {
        fn(args);
      }
    }
  }
}

class Notifier {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    this.observerList.push(obj);
  }

  remove(obj) {
    let index = this.observerList.indexOf(obj);
    if (index >= 0) {
      this.observerList.splice(index, 1);
    }
  }

  notify() {
    this.observerList.forEach((item) => {
      item.update();
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(this.name, "收到");
  }
}
