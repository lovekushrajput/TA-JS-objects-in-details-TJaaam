// This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.
 class Question {
     constructor(title,options, correctAns){
        this.title = title,
        this.options = options,
        this.correctAns = correctAns     
     };
     isCorrect(answer){
         if(answer===this.correctAns){
            return true
         }
         else if(answer > this.options.length-1){
            alert('Invalid input')
        }
         else if(answer!==this.correctAns){
             return false
         }
        
     };
    getCorrectAnswer(){
        return this.options[this.indexOfCorrectAns]
    };
    

    createU(){
        let form = document.createElement("form")
        let p = document.createElement('p')
        p.innerText= `Q-${this.title}`
let div1 = document.createElement("div")
        let input1 = document.createElement('input')
        input1.type = 'radio'
        input1.name = "radio"
        input1.value = this.options[0]
        let label1 = document.createElement('label')
        label1.for="input1"
        label1.innerText =  this.options[0]
        div1.append(input1,label1)
      
     let div2 = document.createElement("div")
        let input2 = document.createElement('input')
        input2.type = 'radio'
        input2.name = "radio"
        input2.value = this.options[1]
        let label2 = document.createElement('label')
        label2.for="input2"
        label2.innerText =   this.options[1]
div2.append(input2,label2)
      
      
        let div3 = document.createElement("div")
        let input3 = document.createElement('input')
        input3.type = 'radio'
        input3.name = "radio"
        input3.value = this.options[2]
        let label3 = document.createElement('label')
        label3.for="input3"
        label3.innerText = this.options[2]
div3.append(input3,label3)
     
    
let div4 = document.createElement("div")
        let input4 = document.createElement('input')
        input4.type = 'radio'
        input4.name = "radio"
        input4.value = this.options[3]
        let label4 = document.createElement('label')
        label4.for="input3"
        label4.innerText =this.options[3] 
        div4.append(input4,label4)

    
        let divBtn = document.createElement("div")
        divBtn.classList = "divBtn"
        let button = document.createElement('button')
        button.innerText="Submit"
        button.classList = "btn"
        let nextBtn = document.createElement('button')
        nextBtn.innerText = "Next >>"
        nextBtn.classList = "btn"
        // nextBtn.addEventListener("click",(event)=>{
        //     event.preventDefault();
        // })
        divBtn.append(button,nextBtn)
        let paraDiv = document.createElement("div")
        paraDiv.classList = "paraDiv"
        let p2= document.createElement("small") 
        let p3= document.createElement("strong")
        paraDiv.append(p3,p2)
        form.append(p,div1,div2,div3,div4,divBtn,paraDiv)
        return form
    }
 }

class Quiz { 
    constructor(root,list=[]){
        this.activeIndex =  0 
        this.score = 0

        this.root=root
        this.allQuestion = list
        this.count = 0
    };
    //  nextQuestion(){
    //      this.allQuestion.forEach((elm)=>{
    //          console.log()
    //      })
        //  if(this.count<ques1.length){
        //      let increase = this.count++
        //      ques1[increase].title,ques1[increase].options,ques1[increase]
        //  } else{
        //      return  `Total Score = ${this.score}`
        //  }  
    //  };
   
    add(){
        let increase = this.count++
        let question1 = new Question(ques1[increase].title,ques1[increase].options,ques1[increase].correctAns)
        this.allQuestion.push(question1)
        this.createUI();
        return this.allQuestion.length
    }
 
    createUI(){
    this.root.innerHTML = ""
    this.allQuestion.forEach((todo)=>{
    let ui = todo.createU()
    let subBtn = ui.querySelector("button")
    let correct = todo.correctAns
    let opt = todo.options
    let small = ui.querySelector("small")
    let strong = ui.querySelector("strong")
    subBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let radio = ui.querySelectorAll("input")
    radio.forEach((elm)=>{
    if(elm.checked){
      small.innerText = `Submitted-  ${elm.value}`
      strong.innerText = `Correct- ${opt[correct]}`
    console.log( correct )  
              }
           })
        })

        let nxt = ui.querySelector(".btn")
        nxt.addEventListener("click",(event)=>{
            event.preventDefault();
            console.log()
            //   this.updateScore();
        })
 
    this.root.append(ui)
    })
    }

    updateScore(){
       this.score = this.score ++
       return this.score
       }

   
}


// for(let i=0;i<ques1.length;i++){
//     ques1[i].
// }
// ques1.forEach((elm)=>{
//     let quiz = new Quiz(document.querySelector("section"))
// quiz.add(elm.title,elm.options,elm.correctAns)
// })
// qt1.add();
let quiz = new Quiz(document.querySelector("section"))
quiz.add()