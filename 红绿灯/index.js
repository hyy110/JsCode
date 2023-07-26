function cout(light) {
  if (light === "red") console.log("red");
  else if (light === "green") console.log("green");
  else console.log("blue");
}

function task(light, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cout(light);
      resolve();
    }, delay);
  });
}

async function play() {
  await task("red", 3000);
  await task("green", 1000);
  await task("yellow", 2000);

  play();
}

play();
