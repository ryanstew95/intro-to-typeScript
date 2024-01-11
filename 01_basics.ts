let username: string | number | boolean = 'Alice';
// never use any as the type
username = 42;
username = true;

let numbers: (number | string)[] = [];
numbers.push(42);
numbers.push('hello');
// numbers.push(true);

const myVar = numbers.pop();