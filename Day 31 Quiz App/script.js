const quizArr = [
      {
        type: "multiple",
        difficulty: "medium",
        category: "Entertainment: Television",
        question:
          "In the TV series &quot;Person of Interest&quot;, who plays the character &quot;Harold Finch&quot;?",
        correct_answer: "Michael Emerson",
        incorrect_answers: [
          "Jim Caviezel",
          "Taraji P. Henson",
          "Kevin Chapman",
          "Michael Emerson"
        ],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Entertainment: Video Games",
        question:
          "In the Super Mario Bros. series, what game is the  &quot;Carrot&quot; power-up from?",
        correct_answer: "Super Mario Land 2: The 6 Golden Coins",
        incorrect_answers: [
          "Super Mario World",
          "Super Mario Land",
          "Super Mario 3D Land",
          "Super Mario Land 2: The 6 Golden Coins"
        ],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Sports",
        question: "Who won the 2011 Stanley Cup?",
        correct_answer: "Boston Bruins",
        incorrect_answers: [
          "Montreal Canadiens",
          "New York Rangers",
          "Toronto Maple Leafs",
          "Boston Bruins"
        ],
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Entertainment: Board Games",
        question:
          "The board game Go has more possible legal positions than the number of atoms in the visible universe.",
        correct_answer: "True",
        incorrect_answers: ["False","True"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Science &amp; Nature",
        question: "How old is the universe?",
        correct_answer: "13.8 Billion Years",
        incorrect_answers: [
          "4.5 Billion Years",
          "7.9 Billion Years",
          "16.2 Billion Years",
          "13.8 Billion Years"
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "General Knowledge",
        question: "What is the nickname of the US state of California?",
        correct_answer: "Golden State",
        incorrect_answers: ["Sunshine State", "Bay State", "Treasure State","Golden State"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "History",
        question:
          "The Panama Canal was finished under the administration of which U.S. president?",
        correct_answer: "Woodrow Wilson",
        incorrect_answers: [
          "Franklin Delano Roosevelt",
          "Herbert Hoover",
          "Theodore Roosevelt",
          "Woodrow Wilson"
        ],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Entertainment: Comics",
        question:
          "In the Hellboy universe, what was Abe Sapien&#039;s birth name?",
        correct_answer: "Langdon Everett Caul",
        incorrect_answers: ["Lord Baltimore", "Sir Edward Grey", "Landis Pope","Langdon Everett Caul"],
      },
      {
        type: "multiple",
        difficulty: "medium",
        category: "Entertainment: Music",
        question: "Which of these albums is a Wu-Tang Clan album?",
        correct_answer: "Iron Flag",
        incorrect_answers: [
          "Perfect Hair",
          "The Low End Theory",
          "Licensed to Ill",
          "Iron Flag"
        ],
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question:
          "What is the name of the process that sends one qubit of information using two bits of classical information?",
        correct_answer: "Quantum Teleportation",
        incorrect_answers: [
          "Super Dense Coding",
          "Quantum Entanglement",
          "Quantum Programming",
          "Quantum Teleportation"
        ],
      }
];

const questions = document.querySelector(".questions h2");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
const option = document.querySelectorAll(".option h5");
const options = document.querySelector(".options");
let score = 0;

window.addEventListener('load', ()=>{
    displayQuestions();
});
console.log(quizArr.length);

function displayQuestions(){
       questions.innerHTML = quizArr[0].question;
       for(let i=0; i<quizArr[0].incorrect_answers.length; i++){
         option[i].innerHTML = quizArr[0].incorrect_answers[uniqueRandomNumbers[i]]
       }
       quizArr.splice(quizArr[0],1);
      //  console.log(quizArr);
}


// This function is to swap the positions of options
function generateUniqueRandomNumbers(length, range) {
    const result = [];
    const numbers = range.slice();
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      result.push(numbers[randomIndex]);
      numbers.splice(randomIndex, 1);
    }  
    return result;
  }
const uniqueRandomNumbers = generateUniqueRandomNumbers(4, [0, 1,2,3]);

let currentQuestionIndex = 0;
nextButton.addEventListener('click', ()=>{
      currentQuestionIndex++;
      if(currentQuestionIndex < quizArr.length){
        questions.innerHTML = quizArr[currentQuestionIndex].question;
        for(let i=0; i<quizArr[currentQuestionIndex].incorrect_answers.length; i++){
          option[i].innerHTML = quizArr[currentQuestionIndex].incorrect_answers[uniqueRandomNumbers[i]]
        }
        // currentQuestionIndex++;
      }else{
        questions.innerHTML = 'All question have been answered!!!';
        options.innerHTML = `<h2 class='score'>Your total score: ${score}</h2>`
      }
      console.log(currentQuestionIndex);
})

prevButton.addEventListener('click', ()=>{
  console.log(currentQuestionIndex)
  currentQuestionIndex--;
  if(currentQuestionIndex <= quizArr.length){
    questions.innerHTML = quizArr[currentQuestionIndex].question;
    for(let i=0; i<quizArr[currentQuestionIndex].incorrect_answers.length; i++){
      option[i].innerHTML = quizArr[currentQuestionIndex].incorrect_answers[uniqueRandomNumbers[i]]
    }
      }else if(currentQuestionIndex < 0){
        currentQuestionIndex = 0;
      }
})

options.addEventListener('click', (e)=>{
  console.log(currentQuestionIndex);
     const answerValue = e.target.innerText;
     const correctAnswer = quizArr[currentQuestionIndex].correct_answer;
     console.log(correctAnswer);
     if(answerValue === correctAnswer){
      score += 1;
      alert('Right answer');
     }else{
      alert('wrong answer');
     }
})
