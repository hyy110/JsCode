async function asyncPool(limit, array, fn) {
  let task = [];
  let res = [];

  for (let a of array) {
    let p = Promise.resolve().then(() => fn(a));
    res.push(p);

    if (task.length >= limit) {
      await Promise.race(task);
    }

    task.push(p);
    p.finally(() => {
      task.splice(task.indexOf(p), 1);
    });
  }

  return Promise.all(res);
}
