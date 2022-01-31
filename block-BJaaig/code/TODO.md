## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output / Hello John because of Implcit binding
console.log(user2.sayHello()); // output / Hello Arya because of Implcit binding
console.log(user.sayHello.call(user2)); // output / Hello Arya because of Explicit binding  and value of `this` will bound to user2 object 
console.log(user.sayHello.call(user2, 'Hey')); // output / Hey Arya because of Explicit binding  and value of `this` will bound to user2 object and `Hey` is the argument
console.log(user.sayHello.apply(user2, ['Hey'])); // output / Hey Arya because of Explicit binding  and value of `this` will bound to user2 object and `Hey` is the argument
console.log(typeof user.sayHello.bind(user2)); // output / function because bind does not call at the same time .it return new function that is why output is function
console.log(user.sayHello.bind(user2)()); // output / Hello Arya because we called the function same time.
console.log(userSayHello()); // output / Hello undefined because there is nothing onthe left side of fn call.  
console.log(typeof userSayHello.bind(user2)); //  output / function because bind does not call at the same time .it return new function that is why output is function
console.log(userSayHello.bind(user2)()); // output / Hello Arya because we called the function same time.
console.log(user3.sayHello()); //error/ because there is no function inside user3 object. 
console.log(userSayHello.apply(user3)); //  error / user3 is not defined because  there is no function inside user3
console.log(userSayHello.call(user3)); // error / user3 is not defined because there is not any function inside user3 .
console.log(typeof new MainUser()); // output / Object because we are using new keyword and new creates an object and return it
console.log(typeof new MainUser()); // output /  Object because we are using new keyword and new creates an object and return it
console.log(new MainUser().sayHello()); // output / error
console.log(new MainUser().sayHello.call(user2)); // output / Hello Arya becuase `this` bound to user2 object
console.log(new MainUser().sayHello.call(user)); // output / Hello Arya becuase `this` bound to user2 object
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output /  Welcome! John because of Explicit binding  and value of `this` will bound to user object and `Welcome!` is the argument
```