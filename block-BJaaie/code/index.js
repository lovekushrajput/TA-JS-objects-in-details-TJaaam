
//  PSEDUCLASSICAL PATTERN

// Animal
// function CreateAnimal(location,numberOfLegs) {
//     this.location = location,
//     this.numberOfLegs = numberOfLegs
// }

//  CreateAnimal.prototype = {
//     eat: function (){
//         console.log(`I live in ${this.location} and I can eat`)
//         return
//     },
//      changeLocation: function(newLocation){
//  this.location = newLocation;
// return this.location
//     },
//    summary: function(){
//         return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
//     }
// }
// let animal = new CreateAnimal ("dharamshala",4)

// //dog
// function CreateDog(location,numberOfLegs,name,color){
//     CreateAnimal.apply(this,[location,numberOfLegs]);
//     this.name = name,
//     this.color = color
// }

// CreateDog.prototype = {
//     bark: function(){
//         alert( `I am ${this.name} and I can bark 🐶`)
//     },
//     changeName: function (newName){
//       this.name = newName;
//       return
//     },
//     changeColor: function (newColor){
//         this.color = newColor;
//         return
//     },
//     summary: function (){
//         return `I am ${this.name} and I am of ${this.color} color. I can also bark`
//     }
// }
// Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype)
// let dog = new CreateDog ("khaniyara",4,"dodo","white")

// // cat
// function CreateCat(location,numberOfLegs,name,colorOfEyes){
//     CreateDog.apply(this,[location,numberOfLegs]);
//     this.name = name,
//     this.colorOfEyes = colorOfEyes
// }

// CreateCat.prototype={
//     meow: function(){
//         alert( `I am ${this.name} and I can do mewo meow 😹`)
//     },
//     changeName: function (newName){
//       this.name = newName;
//       return
//     },
//     changeColorOfEyes: function (newColor){
//         this.colorOfEyes = newColor;
//         return
//     },
//     summary: function (){
//         return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
//     }
// }

// Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype)
// let cat = new CreateCat("rath",4,"sweety","brown")





// CLASS PATTERN


// Animal
class CreateAnimal {
    constructor(location,numberOfLegs){
        this.location = location,
        this.numberOfLegs = numberOfLegs
    };
    eat (){
        console.log(`I live in ${this.location} and I can eat`)
    };
     changeLocation (newLocation) {
 this.location = newLocation;
return this.location
    };
   summary () {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }
}

let animal = new CreateAnimal("Dharamshala",4)
console.group("Animal")
console.log(animal.location)
console.log(animal.numberOfLegs)
console.log(animal.eat(),`logging message`)
console.log(animal.changeLocation("New York"),`"changelocation"`)
console.log(animal.location)
console.log(animal.summary())
console.groupEnd()


// dog

class CreateDog extends CreateAnimal{
    constructor(location,numberOfLegs,name,color){
        super(location,numberOfLegs)
        this.name = name,
        this.color= color
    };
    bark (){
        alert( `I am ${this.name} and I can bark 🐶`)
    };
    changeName (newName){
        this.name = newName
        return this.name
    };
    changeColor (newColor){
        this.color = newColor;
        return this.color
    };
    summary (){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}


let dog= new CreateDog("America",4,"pochi","white")
console.group("Dog")
console.log(dog.name)
console.log(dog.color)
console.log(dog.location)
console.log(dog.numberOfLegs)
console.log(dog.summary())
console.log(dog.eat(),`"logging message"`)
console.log(dog.changeLocation("Delhi"),`"changelocation"`)
console.log(dog.changeColor("Brown"),`changeColor`)
console.log(dog.changeName("jacky"),`changeName`)
console.log(dog.location)
console.log(dog.summary())
console.groupEnd()


// cat
class CreateCat extends CreateAnimal{
    constructor(location,numberOfLegs,name,colorOfEyes){
        super(location,numberOfLegs);
        this.name=name,
        this.colorOfEyes =colorOfEyes
    };
    meow (){
        alert( `I am ${this.name} and I can do mewo meow 😹`)
    };
    changeName  (newName){
      this.name = newName;
      return   this.name
    };
    changeColorOfEyes  (newColor){
        this.colorOfEyes = newColor;
        return  this.colorOfEyes
    };
    summary  (){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }

}

let cat = new CreateCat("haryana",4,"sweety","black")
console.group("Cat")
console.log(cat.name)
console.log(cat.location)
console.log(cat.numberOfLegs)
console.log(cat.summary())
console.log(cat.eat(),`"logging message"`)
console.log(cat.changeLocation("Goa"),`"changelocation"`)
console.log(cat.changeColorOfEyes("Brown"),`changeEyeColor`)
console.log(cat.changeName("Catty"),`changeName`)
console.log(cat.location)
console.log(cat.meow())
console.log(cat.summary())
console.groupEnd()
