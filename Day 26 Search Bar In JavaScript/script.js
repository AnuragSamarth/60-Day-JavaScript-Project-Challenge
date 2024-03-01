const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-card-container]");
const searchUser = document.querySelector("[data-search]");

let users = [];


fetchUserData();

async function fetchUserData(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    // console.log(data);
    users = data.map(user =>{
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = user.name;
        body.textContent = user.email;
        userCardContainer.append(card);
        return {name: user.name, email: user.email, element: card}
    })
}

searchUser.addEventListener('input', (e)=>{
     const inputValue = e.target.value.toLowerCase();
    //  console.log(users);
    users.forEach(user =>{
        const isVisible = user.name.toLowerCase().includes(inputValue) || user.email.toLowerCase().includes(inputValue);
        // console.log(isVisible);
        user.element.classList.toggle('hide',!isVisible);
    })
})


