interface Container<T> { // T is short for type
  name: string;
  contents: T;
};

const stringContainer: Container<string> = {
  name: 'string container',
  contents: 'hello world'
}

const booleanContainer: Container<boolean> = {
name: 'boolean container',
contents: true
}