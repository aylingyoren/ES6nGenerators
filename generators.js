// Exercise 2
let getCountdownIterator = function* () {
    for (let i = 9; i > 0; i--) yield i;
};
console.log([...getCountdownIterator()]);
  
// Exercise 3-4
let todoList = {
todoItems: [],
addItem(description) {
    this.todoItems.push({ description, done: false });
    return this;
},
crossOutItem(index) {
    if (index < this.todoItems.length) {
        this.todoItems[index].done = true;
    }
    return this;
},
};

todoList.addItem("task 1").addItem("task 2").crossOutItem(0);

let iterableTodoList = Object.assign({}, todoList);

iterableTodoList[Symbol.iterator] = function () {
    return this.todoItems[Symbol.iterator]();
};

for (let item of iterableTodoList) {
    console.log(item);
}

// Exercise 5
function* fib() {
    [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let gen = fib(0);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Exercise 6
const filterFunc = (factor) => (n) => n % factor === 0;

function* filter(iterable, filterFunction) {
    while (true) {
        let next = iterable.next();
        if (filterFunction(next.value)) {
            yield next.value;
        }
    }
}

let filterGen = filter(fib(), filterFunc(2));

console.log(filterGen.next());
console.log(filterGen.next());
console.log(filterGen.next());
console.log(filterGen.next());

// Exercise 7
// function* sequence(start, step) {
//   let value = start;
//   while (true) {
//     value += step;
//     yield value;
//   }
// }

function* sequence(start, step = 1) {
    while (start) {
        yield start;
        start += step;
    }
}
var generator01 = sequence(10, 3);
var generator02 = sequence(7, 1);

console.log(generator01.next().value); // 10
console.log(generator01.next().value); // 13
console.log(generator02.next().value); // 7
console.log(generator01.next().value); // 16
console.log(generator02.next().value); // 8
