# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
}
```
- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
    description (){
        alert(`The square is ${this.width} x ${this.height}`)
    }
}
```
- Create a method inside the class named `calcArea` that will return the area of the square.
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
    description (){
        alert(`The square is ${this.width} x ${this.height}`)
    };
    calcArea (){
        return this.width * this.height
    }

}
```
- Create a `area` getter method using which we can get the area of the square.
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
    description (){
        alert(`The square is ${this.width} x ${this.height}`)
    };
    calcArea (){
        return this.width * this.height
    }
    get area (){
         return this.width * this.height
    }

}
```
- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`.
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
    description (){
        alert(`The square is ${this.width} x ${this.height}`)
    };
    calcArea (){
        return this.width * this.height
    }
    get area (){
         return this.width * this.height
    }
    set area (area){
 let side =  Math.sqrt(area)
 this.width = side
 this.height = side
    }
}
```
- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
    description (){
        alert(`The square is ${this.width} x ${this.height}`)
    };
    calcArea (){
        return this.width * this.height
    };
    get area (){
         return this.width * this.height
    };
    set area (area){
 let side =  Math.sqrt(area)
 this.width = side
 this.height = side
    };
    static isEqual(square1,square2){
return square1.area===square2.area
    }

}
```
- Create two instance of the `Square` class
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
    description (){
        alert(`The square is ${this.width} x ${this.height}`)
    };
    calcArea (){
        return this.width * this.height
    };
    get area (){
         return this.width * this.height
    };
    set area (area){
 let side =  Math.sqrt(area)
 this.width = side
 this.height = side
    };
    static isEqual(square1,square2){
return square1.area===square2.area
    }

}

//two instance of the `Square` class
let squr1 = new Square(10)
let squr2 = new Square(4)
```
- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
    description (){
        alert(`The square is ${this.width} x ${this.height}`)
    };
    calcArea (){
        return this.width * this.height
    };
    get area (){
         return this.width * this.height
    };
    set area (area){
 let side =  Math.sqrt(area)
 this.width = side
 this.height = side
    };
    static isEqual(square1,square2){
return square1.area===square2.area
    }

}

//two instance of the `Square` class
let squr1 = new Square(10)
let squr2 = new Square(4)

// check the area property on one square one more than 4 times
sqr1.area
100

sqr1.area
100

sqr1.area
100

sqr1.area
100
```
- Check the `isEqual` method and pass the two instance you created above.
```js
class Square {
    constructor(side){
this.width = side,
this.height = side
    }
    description (){
        alert(`The square is ${this.width} x ${this.height}`)
    };
    calcArea (){
        return this.width * this.height
    };
    get area (){
         return this.width * this.height
    };
    set area (area){
 let side =  Math.sqrt(area)
 this.width = side
 this.height = side
    };
    static isEqual(square1,square2){
return square1.area===square2.area
    }

}
//two instance of the `Square` class
let squr1 = new Square(10)
let squr2 = new Square(4)

// check the area property on one square one more than 4 times
sqr1.area
100

sqr1.area
100

sqr1.area
100

sqr1.area
100

// Check the `isEqual` method and pass the two instance you created above
Square.isEqual(sqr1,sqr2)
```
## User Class

- Create a `User` class that accepts `firstName` and `lastName` property
```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
}
```
- Create a getter method named `fullName` that will return the full name of the person.
```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
    get fullName (){
        return this.firstName +this.lastName
    }
}
```
- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`
```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
    get fullName (){
        return this.firstName + this.lastName
    }
    set fullName (fullname){
        if(fullname.length>5){
            let store = fullname.split(' ')
            this.firstName = store[0],
            this.lastName = store[1]
        } else if(fullname.length<5){
alert(`Full name should be more than 5 characters`)
        } else {
           alert(`Invalid input`) 
        }
    }
}
```
- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
    get fullName (){
        return this.firstName + this.lastName
    };
    set fullName (fullname){
        if(fullname.length>5){
            let store = fullname.split(' ')
            this.firstName = store[0],
            this.lastName = store[1]
        } else if(fullname.length<5){
alert(`Full name should be more than 5 characters`)
        } else {
           alert(`Invalid input`) 
        }
    };
    nameContains (str){
        return typeof str=== 'string'
    }
}
```
- Create two instance of the `User` class
```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
    get fullName (){
        return this.firstName + this.lastName
    };
    set fullName (fullname){
        if(fullname.length>5){
            let store = fullname.split(' ')
            this.firstName = store[0],
            this.lastName = store[1]
        } else if(fullname.length<5){
alert(`Full name should be more than 5 characters`)
        } else {
           alert(`Invalid input`) 
        }
    };
    nameContains (str){
        return typeof str=== 'string'
    }
}

// two instance of the `User` class
let user1 = new User("love","kush")
let user2 = new User("Narendra","modi")
```
- Check by using the `fullName` setter method with name bigger than 5 characters.
 ```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
    get fullName (){
        return this.firstName + this.lastName
    };
    set fullName (fullname){
        if(fullname.length>5){
            let store = fullname.split(' ')
            this.firstName = store[0],
            this.lastName = store[1]
        } else if(fullname.length<5){
alert(`Full name should be more than 5 characters`)
        } else {
           alert(`Invalid input`) 
        }
    };
    nameContains (str){
        return typeof str=== 'string'
    }
}

// two instance of `User` class 
let user1 = new User("love","kush")
let user2 = new User("Narendra","modi")

// setter method with name bigger than 5 characters
user1.fullName = 'Arya stark' 
```
- Check by using the `fullName` setter method with name less than 5 characters.
```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
    get fullName (){
        return this.firstName + this.lastName
    };
    set fullName (fullname){
        if(fullname.length>5){
            let store = fullname.split(' ')
            this.firstName = store[0],
            this.lastName = store[1]
        } else if(fullname.length<5){
alert(`Full name should be more than 5 characters`)
        } else {
           alert(`Invalid input`) 
        }
    };
    nameContains (str){
        return typeof str=== 'string'
    }
}

// two instance of `User` class 
let user1 = new User("love","kush")
let user2 = new User("Narendra","modi")


// setter method with name bigger than 5 characters
user1.fullName = 'Arya stark'
'Arya stark'

// setter method with name less than 5 characters
user2.fullName = 'Arya'
alert(`Full name should be more than 5 characters`)
```
- Check the `fullName` using getter
```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
    get fullName (){
        return `${this.firstName} ${this.lastName}`
    };
    set fullName (fullname){
        if(fullname.length>5){
            let store = fullname.split(' ')
            this.firstName = store[0],
            this.lastName = store[1]
        } else if(fullname.length<5){
alert(`Full name should be more than 5 characters`)
        } else {
           alert(`Invalid input`) 
        }
    };
    nameContains (str){
        return typeof str=== 'string'
    }
}


// two instance of `User` class 
let user1 = new User("love","kush")
let user2 = new User("Narendra","modi")


// setter method with name bigger than 5 characters
user1.fullName = 'Arya stark'
'Arya stark'

// setter method with name less than 5 characters
user2.fullName = 'Arya'
alert(`Full name should be more than 5 characters`)

// `fullName` using getter
user1.fullName
'Arya stark'

```
- Check the `nameContains` method
```js
class User {
    constructor(firstName,lastName){
this.firstName = firstName,
this.lastName = lastName
    }
    get fullName (){
        return this.firstName + this.lastName
    };
    set fullName (fullname){
        if(fullname.length>5){
            let store = fullname.split(' ')
            this.firstName = store[0],
            this.lastName = store[1]
        } else if(fullname.length<5){
alert(`Full name should be more than 5 characters`)
        } else {
           alert(`Invalid input`) 
        }
    };
    nameContains (str){
        return typeof str=== 'string'
    }
}

// two instance of `User` class
let user1 = new User("love","kush")
let user2 = new User("Narendra","modi")


// setter method with name bigger than 5 characters
user1.fullName = 'Arya stark'
'Arya stark'

// setter method with name less than 5 characters
user2.fullName = 'Arya'
alert(`Full name should be more than 5 characters`)

// `fullName` using getter
user1.fullName
'Arya stark'

// nameContaines method
user1.nameContain("bran")
true
```