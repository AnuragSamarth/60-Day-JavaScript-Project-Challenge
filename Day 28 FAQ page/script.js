const icons = document.querySelectorAll(".icon-line");
const answer = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

// console.log(questions);

questions.forEach(currentItem => {
    currentItem.addEventListener('click' , (e)=>{
      if(currentItem.classList.contains('active')){
        currentItem.classList.remove("active");
      } else{
        let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');

        getAlreadyAddedActiveClasses.forEach(currElem => {
            currElem.classList.remove('active');
        });

        currentItem.classList.add('active');
      }
    })
})


// let answerDiv = elem.parentElement.parentElement.nextElementSibling;

// for(let i =0;i<icons.length;i++){
//     let e = icons[i];
//     console.log(e);
//     // console.log(answerDiv);
//     e.addEventListener('click', (e)=>{
//        answer[i].style.display = 'none';
//     })
// }

