function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

const sleep = (time, fn) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, time)
  })
}

let step = () => {
  Promise.resolve()
    .then(() => {
      return sleep(3000, red);
    })
    .then(() => {
      return sleep(2000, green);
    })
    .then(() => {
      return sleep(1000, yellow);
    })
    .then(() => {
      step();
    })
}

step();