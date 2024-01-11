const myFunc = (age: number): string | number => {
return age;
};

const returnVal = myFunc(42);

const returningPromise = (message: string): Promise<string> => {
  return new Promise((resolve) => {
    resolve(message);
  })
};

returningPromise('hello')
.then((data) => {})