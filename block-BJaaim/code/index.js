// This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.
let showbtn = document.querySelector(".show")
 class Question {
     constructor(title,options, correctAns){
        this.title = title,
        this.options = options,
        this.correctAns = correctAns     
     };
     isCorrect(answer){
            return answer===this.options[this.correctAns]      
     };
    getCorrectAnswer(){
        return this.options[this.indexOfCorrectAns]
    };
    
 }

class Quiz { 
    constructor(root,list=[]){
        this.activeIndex =  0 
   

        this.root=root
        this.allQuestion = list
        this.count = 0
    }
    updateScore(){
        this.count = this.count + 1
        }
     nextQuestion(){
            this.activeIndex =  this.activeIndex + 1
            this.createU();               
     };
    add( title,options,correctAns){
        let question1 = new Question( title,options,correctAns)
        this.allQuestion.push(question1)
        return this.allQuestion.length
    }

    

    createU(){
         this.root.innerHTML = ""
         // all the questions store in this.allQuestions
        let active = this.allQuestion[this.activeIndex]
        let form = document.createElement("form")

        // question one by one
        let p = document.createElement('p')
        p.innerText= `Q-${active.title}`

        // first option
        let Option_1 = document.createElement("div")
        let input1 = document.createElement('input')
        input1.type = 'radio'
        input1.name = "radio"
        input1.id = "option-1"
        input1.value = active.options[0]
        let label1 = document.createElement('label')
        label1.for="option-1"
        label1.innerText =  active.options[0]
        Option_1.append(input1,label1)
      
        // second option
        let Option_2 = document.createElement("div")
        let input2 = document.createElement('input')
        input2.type = 'radio'
        input2.name = "radio"
        input2.id = "option-2"
        input2.value = active.options[1]
        let label2 = document.createElement('label')
        label2.for="option-2"
        label2.innerText =   active.options[1]
        Option_2.append(input2,label2)
      
      // Third Option
        let Option_3 = document.createElement("div")
        let input3 = document.createElement('input')
        input3.type = 'radio'
        input3.name = "radio"
        input3.id = "option-3"
        input3.value = active.options[2]
        let label3 = document.createElement('label')
        label3.for="option-3"
        label3.innerText = active.options[2]
        Option_3.append(input3,label3)
     
    // fourth Option
        let Option_4 = document.createElement("div")
        let input4 = document.createElement('input')
        input4.type = 'radio'
        input4.name = "radio"
        input4.id = "option-4"
        input4.value = active.options[3]
        let label4 = document.createElement('label')
        label4.for="option-4"
        label4.innerText = active.options[3] 
        Option_4.append(input4,label4)

    // paradiv
  let paraDiv = document.createElement("div")
        paraDiv.classList = "paraDiv"
        let p2= document.createElement("small") 
        let p3= document.createElement("strong")
        let p4 = document.createElement("p")
        paraDiv.append(p3,p2,p4)


    // Submit and Next button
        let divBtn = document.createElement("div")
        divBtn.classList = "divBtn"


        let subButton = document.createElement('button')
        subButton.type="submit"
        subButton.innerText="Submit"
        subButton.classList = "btn"

        form.addEventListener("submit",handleSubmit)
        // handle submit button
          function handleSubmit(event){
              event.preventDefault();
              let radio = document.querySelectorAll("input")
              radio.forEach((input)=>{
                if(input.checked){
                  p2.innerText = `Submitted- ${input.value}(  ${active.isCorrect(input.value)})`
                  p3.innerText = `Correct- ${active.options[active.correctAns]}` 
                  if(active.isCorrect(input.value)){
                    alert(true)
                  }
                          }
                       })
          }
    
  



        let nextBtn = document.createElement('button')
        nextBtn.innerText = "Next >>"
        nextBtn.classList = "btn"
        nextBtn.addEventListener("click",(event)=>{
            event.preventDefault();
            if(this.activeIndex===ques1.length-1){
              nextBtn.style.display = "none"
            }else{
                this.nextQuestion();
            }
        })
        divBtn.append(subButton,nextBtn)

        form.append(p,Option_1,Option_2,Option_3,Option_4,paraDiv,divBtn)
        this.root.append(form)
    }
}

let quiz = new Quiz(document.querySelector("section"))
ques1.forEach((elm)=>{
quiz.add(
    elm.title,
    elm.options,
    elm.correctAns
    )
})
quiz.createU()

showbtn.addEventListener("click",()=>{
    alert(quiz.score)
    // console.log( quiz.updateScore()) 
})