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
    return   correctAnswerIndex
}

// Organise Using Object
let quiz = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
        if(index===1){
            return  true
          } else {
              return false
          }
    },
    getCorrectAnswer (){
        return 1
    }
}

//Use a function to create object
function CreateQuizQuestion (title,options){
    let obj = {}
    obj.title =  title,
    obj.options = options,
    obj.correctAnswerIndex = 1
    obj.isAnswerCorrect= function (index){
        if(index==1){
            return true
        }else{
            return false
        }
    }
    obj.getCorrectAnswer = function (){
    return  1
    }
    return obj
     }
    
    let question1 = CreateQuizQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'])

   

    // Convert the function to use `this` keyword
    function CreateQuizQuestion (title,options){
        let obj = {}
        obj.title =  title,
        obj.options = options,
        obj.correctAnswerIndex = 1
        obj.isAnswerCorrect= function (index){
            if(index===correctAnswerIndex){
                return true
            }else{
                return false
            }
        }
        obj.getCorrectAnswer = function (){
        return  this.correctAnswerIndex
        }
        return obj
         }
        
        let question1 = CreateQuizQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'])

         //test
    console.group(question1.title)
    console.log(question1.options)
    console.log(question1.isAnswerCorrect(3))
    console.log(question1.isAnswerCorrect(0))
    console.log(question1.isAnswerCorrect(1))
    console.log(question1.getCorrectAnswer)
    console.groupEnd()