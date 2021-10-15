// Exercise 1
let greetings = (name) => "hello " + name;

// Exercise 2
// var obj1 = { a: 1, b: 2 };
// var obj2 = { a: 2, c: 3, d: 4 };
// var obj3 = Object.assign(obj1, obj2);

// let obj3 = Object.assign({}, obj1, obj2); // solution?????

// var obj11 = { a: 1, b: 2, c: 3, d: 4 };
// var a = obj11.a;
// var b = obj11.b;
// var c = obj11.c;
// var d = obj11.d;

// let { a, b, c, d } = obj11; // solution

// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// var obj111 = { a: a, b: b, c: c, d: d };

// let obj111 = { a, b, c, d }; // solution

// Exercise 3
function isGreaterProm(a, b) {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve("greater");
    } else {
      reject(new Error("smaller"));
    }
  });
}

isGreaterProm(1, 2)
  .then((result) => console.log(`Resolved: ${result}`))
  .catch((error) => console.log(`Rejected: ${error}`));