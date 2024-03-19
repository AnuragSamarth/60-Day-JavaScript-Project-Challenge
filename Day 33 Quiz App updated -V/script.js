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
        id:2,
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
        id:3,
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
        id:4,
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
        id:5,
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
        id:6,
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
        id:7,
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
        id:8,
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
        id:9,
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
        id:10,
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

const generateOptions = ()=>{
    let search = data.filter((elem)=> elem.id === 6)
    // console.log(search)
    let newArrData = [];
    search.forEach((elem)=>{
        newArrData = elem.incorrect_answers
    })
    // console.log(newArrData)
    
    // 1st method to create and insert HTML element into specific element using clutter
    // let clutter = '';
//     newArrData.forEach((elem)=>{
//       clutter += `
//       <div class="option">
//       <p>${elem}</p>
//   </div>
//       `
//     })
//     quizOptions.innerHTML = clutter;


//   2nd method to create and insert HTML element into specific element using map method
   return (quizOptions.innerHTML = newArrData.map(elem =>{
       return `
       <div class="option">
             <p>${elem}</p>
        </div>
       `
   }).join(''))
}
generateOptions();
