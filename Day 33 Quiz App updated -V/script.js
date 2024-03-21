const data = [
    {
        id: 1,
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "On which computer hardware device is the BIOS chip located?",
        correct_answer: "Motherboard",
        incorrect_answers: [
            "Hard Disk Drive",
            "Central Processing Unit",
            "Motherboard",
            "Graphics Processing Unit"
        ]
    },
    {
        id: 2,
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "Whistler was the codename of this Microsoft Operating System.",
        correct_answer: "Windows XP",
        incorrect_answers: [
            "Windows 2000",
            "Windows 7",
            "Windows XP",
            "Windows 95"
        ]
    },
    {
        id: 3,
        type: "boolean",
        difficulty: "medium",
        category: "Science: Computers",
        question: "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
        correct_answer: "False",
        incorrect_answers: [
            "True",
            "False"
        ]
    },
    {
        id: 4,
        type: "boolean",
        difficulty: "medium",
        category: "Science: Computers",
        question: "AMD created the first consumer 64-bit processor.",
        correct_answer: "True",
        incorrect_answers: [
            "False",
            "True"
        ]
    },
    {
        id: 5,
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
        correct_answer: "Year",
        incorrect_answers: [
            "Four Years",
            "Two Years",
            "Eight Years",
            "Year"
        ]
    },
    {
        id: 6,
        type: "boolean",
        difficulty: "medium",
        category: "Science: Computers",
        question: "The first computer bug was formed by faulty wires.",
        correct_answer: "False",
        incorrect_answers: [
            "True",
            "False"
        ]
    },
    {
        id: 7,
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
        correct_answer: "C#",
        "incorrect_answers": [
            "Java",
            "C++",
            "Objective-C",
            "C#"
        ]
    },
    {
        id: 8,
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "What does &quot;LCD&quot; stand for?",
        correct_answer: "Liquid Crystal Display",
        incorrect_answers: [
            "Language Control Design",
            "Last Common Difference",
            "Long Continuous Design",
            "Liquid Crystal Display"
        ]
    },
    {
        id: 9,
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "What is the number of keys on a standard Windows Keyboard?",
        correct_answer: "104",
        incorrect_answers: [
            "64",
            "94",
            "76",
            "104"
        ]
    },
    {
        id: 10,
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
        correct_answer: "Clipper Chip",
        incorrect_answers: [
            "Enigma Machine",
            "Skipjack",
            "Nautilus",
            "Clipper Chip"
        ]
    }
]


const quizOptions = document.querySelector(".quiz-options")
const quizQuestion = document.querySelector(".quiz-question h3")
const nextBtn = document.querySelector(".btn");
const questionIndex = document.querySelector(".questions h5");
const scores = document.querySelector(".score h5"); 


let questionID = 0;
let score = 0;
const generateQuestionAndOptions = (id)=>{
    let search = data.filter((elem)=> elem.id === id)
    // console.log(search)
    
    let newArrData = [];
    search.forEach((elem)=>{
        newArrData = elem.incorrect_answers
        quizQuestion.innerHTML = ` <h3>${elem.question}</h3>`
    })
    
    // 1st method to create and insert HTML element into specific element using clutter
    let clutter = '';
    newArrData.forEach((elem)=>{
      clutter += `
      <div class="option">
     <p>${elem}</p>
  </div>
      `
    })
    quizOptions.innerHTML = clutter;

// //   2nd method to create and insert HTML element into specific element using map method
//    return (quizOptions.innerHTML = newArrData.map(elem =>{
//        return `
//        <div class="option">
//              <p>${elem}</p>
//         </div>
//        `
//    }).join('')
//    )
}
// generateQuestionAndOptions();


nextBtn.addEventListener('click', nextQuestion);

function nextQuestion(){
    questionID++;
    if(questionID <= 10){
    generateQuestionAndOptions(questionID);
    questionIndex.innerText = `Questions: ${questionID}/10` 
     }
     if(questionID == data.length){
        nextBtn.textContent = 'Finish';
     }
}
nextQuestion();


quizOptions.addEventListener('click', checkAnswer)

function checkAnswer(e){
   let clickedOption = e.target.innerText;
   let search = data.filter((elem)=> elem.id === questionID);   
   search.forEach((elem)=>{
    if(elem.correct_answer === clickedOption){
        console.log('right answer')
        score++;
        scores.innerText = `Score: ${score}`;
    }else{
        return
    }
   })
}