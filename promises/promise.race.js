Promise.MyRace = function(promises) {
  return new Promise((resolve, reject) => {
    if (promises === null || typeof promises[Symbol.iterator] !== "function") {
      throw new Error(`${promises} is not a iterator`);
    }

    for (let promise of promises) {
      Promise.resolve(promise).then(resolve, reject);
    }
  })
}

let p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve(1)
  },100)
})
let p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject(2)
  })
})
let p3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(3)
  })
})

Promise.myRace([p1,p2,p3]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})