
const number = document.body.querySelectorAll(".number");

// callback

function increaseAndPrint(callback) {
  setTimeout(() => {
    (number[0].innerText)++;
    callback();
  }, 1000);
}

increaseAndPrint(() => {
  increaseAndPrint(() => {
    increaseAndPrint(() => {
      increaseAndPrint(() => {
        increaseAndPrint(() => {
          increaseAndPrint(() => {
            increaseAndPrint(() => {
              increaseAndPrint(() => {
                increaseAndPrint(() => {
                  increaseAndPrint(() => {
                    number[0].innerText += " DONE!";
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

// Promise
function returnAfterOneSec(param) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
}

function printData(data) {
  number[1].innerText = data;
  if (data == 10) number[1].innerText += " DONE!";
  return new Promise(resolve => {
    resolve(++data);
  });
}

function exec() {
  for (let i = 0, pending = Promise.resolve(1); i < 10 ; i++) {
    pending =
      pending
      .then(returnAfterOneSec)
      .then(printData);
  }
}

exec();

//async,await
function returnNextPromise(param) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(++param);
    }, 1000);
  });
}

async function f(){
  for (let i = 0, promise = Promise.resolve(0); i < 10; i++) {
    promise = promise.then(returnNextPromise);
    let result = await promise;
    number[2].innerText = result;
    if (i == 9) number[2].innerText += " DONE!";
  }
}

f();
