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
class Player extends Person{
 constructor(name,age,gender,sportsname){
    super(name,age,gender)
this.sportsname = sportsname
 };
 play(){
return `${this.name} is playing ${this.sportsname}`
 }
}

let player = new Player("Dhoni",48,"Male","Cricket")


class Cricketer extends Player {
    constructor( name,age,gender,sportsname,teamName){
        super(name,age,gender,sportsname)
   this.teamName = teamName
    };
    playCricket(){
   return `${this.name} is ${this.sportsname} of ${this.teamName}`
    }
   }

   let cricketer = new Cricketer("Virat kohli",34,"Male","Cricketer","India")

// Teacher   
class Teacher extends Person {
    constructor(name,age,gender,instituteName){
        super(name,age,gender)
   this.instituteName = instituteName
    };
    teach(){
   return `Mrs.${this.name} is  teaching in ${this.instituteName}`
    }
   }
let teacher = new Teacher("Rose",24,"Female","BBD University")

 // Artist
   class  Artist extends Person{
    constructor(name,age,gender,kind){
    super(name,age,gender)
   this.kind = kind
    };
    createArt(){
   return `${this.name} is an ${this.kind}`
    }
   }
let artist = new Artist("Manoj Bajpayee",43,"Male","Actor")