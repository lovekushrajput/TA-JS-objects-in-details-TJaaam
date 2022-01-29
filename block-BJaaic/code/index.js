 let animalMethod = {
    eat: function (){
        console.log(`I live in ${this.location} and I can eat`)
        return
    },
     changeLocation: function(newLocation){
 this.location = newLocation;
return this.location
    },
   summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }
}

function createAnimal(location,numberOfLegs) {
    let animal = Object.create(animalMethod)
    animal.location = location;
    animal.numberOfLegs = numberOfLegs
    return animal
}
let animal = createAnimal("Dharamshala",4)
console.group("Animal")
console.log(animal.location)
console.log(animal.numberOfLegs)
console.log(animal.eat(),`logging message`)
console.log(animal.changeLocation("New York"),`"changelocation"`)
console.log(animal.location)
console.log(animal.summary())
console.groupEnd()
// Dog
let dogMethod = {
    bark: function(){
        alert( `I am ${this.name} and I can bark 🐶`)
    },
    changeName: function (newName){
      this.name = newName;
      return
    },
    changeColor: function (newColor){
        this.color = newColor;
        return
    },
    summary: function (){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}

function createDog(location,numberOfLegs,name,color){
    let dog = Object.create(dogMethod)
    dog.location=location,
    dog.numberOfLegs=numberOfLegs
    dog.name = name,
    dog.color = color
    return dog
}

Object.setPrototypeOf(dogMethod,animalMethod)
let dog = createDog("khaniyara",5,"lioo","brown")
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

//Cat
let catMethod = {
    meow: function(){
        alert( `I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName: function (newName){
      this.name = newName;
      return
    },
    changeColorOfEyes: function (newColor){
        this.colorOfEyes = newColor;
        return
    },
    summary: function (){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }

}



function createCat(location,numberOfLegs,name,color,colorOfEyes){
    let cat = Object.create(catMethod)
    cat.location=location,
    cat.numberOfLegs=numberOfLegs
    cat.name = name,
    cat.color = color,
    cat.colorOfEyes = colorOfEyes
    return cat
}
Object.setPrototypeOf(catMethod,dogMethod)
let cat = createCat("Rath",6,"kalii","white","red")
console.group("Cat")
console.log(cat.name)
console.log(cat.color)
console.log(cat.location)
console.log(cat.numberOfLegs)
console.log(cat.summary())
console.log(cat.eat(),`"logging message"`)
console.log(cat.changeLocation("Goa"),`"changelocation"`)
console.log(cat.changeColor("Black"),`changeColor`)
console.log(cat.changeColorOfEyes("Brown"),`changeEyeColor`)
console.log(cat.changeName("Catty"),`changeName`)
console.log(cat.location)
console.log(cat.summary())
console.groupEnd()