interface  User {
  id?: number;
  username: string;
  password: string;
  age: number;
  bff?: User;
  friends?: User[];
}

const myObj: User = { 
  username: 'bob',
  password: '1234',
  age: 42
};

const user: User[] = [];
user.push(myObj);
