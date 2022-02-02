class Person {
    constructor(name,age,gender){
        this.name = name,
        this.age = age,
        this.gender=gender
    }
    eat(){
        return `${this.name} is eating food`
    };
    sleep(){
        return `${this.name} is sleeping`
    };
    walk(){
        return `${this.name} is Walking`
    }
}

let person = new Person("Lovekush",18,"Male")


// Player
class Player {
 constructor(sportsname){
this.sportsname = sportsname
 };
 play(){
return `is playing ${this.sportsname}`
 }
}

let player = new Player(person)


class Cricketer {
    constructor(teamName){
   this.teamName = teamName
    };
    playCricket(){
   return `${this.teamName} is good team`
    }
   }

   let cricketer = new Cricketer(player)

// Teacher   
class Teacher {
    constructor(instituteName){
   this.instituteName = instituteName
    };
    teach(){
   return `is teaching in ${this.instituteName}`
    }
   }
let teacher = new Teacher(person)

 // Artist
   class  Artist {
    constructor(kind){
   this.kind = kind
    };
    createArt(){
   return `is a ${this.kind}`
    }
   }
let artist = new Artist(person)