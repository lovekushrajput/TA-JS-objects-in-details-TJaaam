//  Using function to create object

// function CreateProjects(name,id,noOfProjects = 0){
//     let project = {}
//     project.name = name,
//     project.id = id,
//     project.noOfProjects = noOfProjects,
//     function getProjects (){
//         return noOfProjects
//     };
//     project.changeName= function (newName){
//         let store = project.name
//         project.name=newName
//        return store
//     };
//     project.incrementProject= function (value=1){
//         project.noOfProjects =  project.noOfProjects + value
//         return   project.noOfProjects
//     };
//     project.decrementProject= function(value=1){
//         project.noOfProjects = project.noOfProjects - value
//         return  project.noOfProjects
//     };
//     return  project
// }






//  Using Object.create (prototypal pattern)

// let projectMethod = {
//     getProjects: function (){
//         return noOfProjects
//     },
//     changeName: function (newName){
//         let store = this.name
//         this.name=newName
//        return store
//     },
//     incrementProject: function (value=1){
//         this.noOfProjects =  this.noOfProjects + value
//         return   this.noOfProjects
//     },
//     decrementProject: function(value=1){
//         this.noOfProjects = this.noOfProjects - value
//         return  this.noOfProjects
//     }
// }

// function createProject(name,id,noOfProjects = 0){
//     let project = Object.create(projectMethod)
//         project.name = name,
//         project.id = id,
//         project.noOfProjects = noOfProjects
//         return project
// }





// Using Pseudoclassical Way

// function CreateProjects(name,id,noOfProjects = 0){
//         this.name = name,
//         this.id = id,
//         this.noOfProjects = noOfProjects
// }

// CreateProjects.prototype = {
//     getProjects: function (){
//         return noOfProjects
//     },
//     changeName: function (newName){
//         let store = this.name
//         this.name=newName
//        return store
//     },
//     incrementProject: function (value=1) {
//         this.noOfProjects =  this.noOfProjects + value
//         return   this.noOfProjects
//     },
//     decrementProject: function (value=1) {
//         this.noOfProjects = this.noOfProjects - value
//         return  this.noOfProjects
//     }
// }





//  Using Class
class CreateProjects {
    constructor (name,id,noOfProjects = 0){
        this.name = name,
        this.id = id,
        this.noOfProjects = noOfProjects
    }
    getProjects (){
        return noOfProjects
    };
    changeName(newName){
        let store = this.name
        this.name=newName
       return store
    };
    incrementProject  (value=1) {
        this.noOfProjects =  this.noOfProjects + value
        return   this.noOfProjects
    };
    decrementProject(value=1) {
        this.noOfProjects = this.noOfProjects - value
        return  this.noOfProjects
    }
}


//test
let firstProject = new CreateProjects("Arya",1,5)
console.group(firstProject.name)
console.log(firstProject.id,"id")
console.log(firstProject.noOfProjects,"noofProjects")
console.log(firstProject.changeName("love"))
console.log(firstProject.incrementProject(122))
console.log(firstProject.changeName("kush"))
console.log(firstProject.decrementProject(4))
console.groupEnd();

let secondProject = new CreateProjects("peter",3,9)
console.group(secondProject.name)
console.log(secondProject.id,"id")
console.log(secondProject.noOfProjects,"noofProjects")
console.log(secondProject.changeName("john"))
console.log(secondProject.incrementProject(122))
console.log(secondProject.changeName("bran"))
console.log(secondProject.decrementProject(4))
console.groupEnd();
