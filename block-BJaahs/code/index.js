// Using without object
let title = 'Where is the capital of Jordan'
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi']
let correctAnswerIndex = 1
function isAnswerCorrect (index){
    if(index===correctAnswerIndex){
      return  true
    } else {
        return false
    }
}

function getCorrectAnswer (){
    return   options[correctAnswerIndex]
}

// Organise Using Object
let quiz = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
        if(index===quiz.correctAnswerIndex){
            return  true
          } else {
              return false
          }
    },
    getCorrectAnswer (){
        return  options[quiz.correctAnswerIndex]
    }
}

//Use a function to create object
function CreateQuizQuestion (title,options,correctAnswerIndex){
    let obj = {}
    obj.title =  title,
    obj.options = options,
    obj.correctAnswerIndex = correctAnswerIndex,
    obj.isAnswerCorrect= function (index){
        if(index===obj.correctAnswerIndex){
            return true
        }else{
            return false
        }
    }
    obj.getCorrectAnswer = function (){
    return options[quiz.correctAnswerIndex]
    }
    return obj
     }
    
    let question1 = CreateQuizQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)

   

    // Convert the function to use `this` keyword
    function CreateQuizQuestion (title,options,correctAnswerIndex){
        let obj = {}
        obj.title =  title,
        obj.options = options,
        obj.correctAnswerIndex = correctAnswerIndex,
        obj.isAnswerCorrect= function (index){
            if(index===this.correctAnswerIndex){
                return true
            }else{
                return false
            }
        }
        obj.getCorrectAnswer = function (){
        return  options[this.correctAnswerIndex]
        }
        return obj
         }
        
        let question1 = CreateQuizQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
        let question2 = CreateQuizQuestion('Where is the capital of India',['America', 'Haryana', 'Nepal', 'Delhi'],3)

         //test
    console.group(question1.title)
    console.log(question1.options)
    console.log(question1.isAnswerCorrect(3))
    console.log(question1.isAnswerCorrect(0))
    console.log(question1.isAnswerCorrect(1))
    console.log(question1.getCorrectAnswer)
    console.groupEnd()