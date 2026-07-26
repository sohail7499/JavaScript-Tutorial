const promisesOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async tast is complete");
    resolve();
  }, 1000);
});

promisesOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyne tast 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asyne 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "SohailKhan", emial: "khan@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promisesFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "sohail", password: "123456789" });
    } else {
      reject("ERROR: Somthing went wroung ");
    }
  }, 1000);
});

promisesFour
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });
