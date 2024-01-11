export interface Dog {
  breed: string;
  name: string;
}

interface  User {
  id?: number;
  username: string;
  password: string;
  age: number;
  bff?: User;
  friends?: User[];
  pet?: Dog;
}

const myObj: User = { 
  username: 'bob',
  password: '1234',
  age: 42
};

const user: User[] = [];
user.push(myObj);
