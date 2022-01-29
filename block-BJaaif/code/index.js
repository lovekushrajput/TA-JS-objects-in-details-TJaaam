/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  // add code here
  let obj = {}
  obj.name = name
  obj.age = age
  return obj
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  // add code here
  greet (){
    console.log(`hello`)
  }
};
function createPerson (){
  let obj = Object.create(personStore)
  return obj
}

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  // add code here
  let obj = Object.create(personFromPersonStoreMethod)
  obj.name = name,
  obj.age = age
  return obj
}

let personFromPersonStoreMethod = {
  greet (){
    console.log(`hello`)
  },
  introduce(){
    console.log(`Hi, my name is ${this.name}`)
  }
}
var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// add code here
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  // add code here
}

PersonConstructor.prototype = {
  greet (){
    console.log(`hello`)
  }
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  let obj = Object.create(personFromConstructorMethod)
  // add code here
  obj.name = name,
  obj.age = age
  return obj
}

let personFromConstructorMethod = {
  greet (){
    console.log(`hello`)
  }
}


var mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor() {
    // add code here
  }

  // add code here
  greet (){
    console.log(`hello`)
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// add code here
class DeveloperClass {
  constructor(name,age) {
    this.name = name,
    this.age =age
  };
  introduce(){
    console.log(`Hello World, my name is ${this.name}`)
  }
  }
// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore= userFactory("Arya",100)
console.group("Arya")
console.log(adminFunctionStore.name)
console.log(adminFunctionStore.score)
adminFunctionStore.sayType()
console.groupEnd()
 /* Put code here */;

function adminFactory(name, score) {
  // Put code here
  let user = Object.create( adminFactoryMethod);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}
let adminFactoryMethod = {
  sayType: function () {
    console.log('I am a Admin');
  },
  sharePublicMessage: function () {
    console.log(`Welcome ` + this.type);
  }
}
/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
