

 //Prototypal pattern
// let questionMethod = {
//     isAnswerCorrect: function (index){
//         return index===this.correctAnswerIndex
//     },
//     getCorrectAnswer: function (){
//         return  this.options[this.correctAnswerIndex]
//     }
// }


// function createQuestion(title,options,correctAnswerIndex){
//     let question = Object.create(question)
//     question.title = title,
//     question.options=options,
//     question.correctAnswerIndex = correctAnswerIndex
//     return question
// }


//Pseduclassical pattern
//  function CreateQuestion(title,options,correctAnswerIndex){
//     this.title = title,
//     this.options=options,
//     this.correctAnswerIndex = correctAnswerIndex
// }

//     CreateQuestion.prototype = {
//         isAnswerCorrect: function (index){
//                     return index===this.correctAnswerIndex
//                 },
//                 getCorrectAnswer: function (){
//                     return  this.options[this.correctAnswerIndex]
//                 }
//     }
 

// class
class question {
    constructor(title,options,correctAnswerIndex){
        this.title = title,
        this.options=options,
        this.correctAnswerIndex = correctAnswerIndex
    }
    isAnswerCorrect(index){
        return index===this.correctAnswerIndex
    }
    getCorrectAnswer (){
        return  this.options[this.correctAnswerIndex]
    }
}


let questionFirst = new question('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
 console.group(questionFirst.title)
 console.log(questionFirst.options)
 console.log(questionFirst.isAnswerCorrect(0))
 console.log(questionFirst.isAnswerCorrect(2))
 console.log(questionFirst.isAnswerCorrect(1))
 console.log(questionFirst.getCorrectAnswer())
 console.groupEnd

 let questionSecond = new question('Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2)
 console.group(questionSecond.title)
 console.log(questionSecond.options)
 console.log(questionSecond.isAnswerCorrect(0))
 console.log(questionSecond.isAnswerCorrect(2))
 console.log(questionSecond.isAnswerCorrect(1))
 console.log(questionSecond.getCorrectAnswer())
 console.groupEnd