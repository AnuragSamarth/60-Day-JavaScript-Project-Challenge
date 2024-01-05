const dropdownClick = document.querySelector(".Dropdown-click");
// const dropdownMenu = document.querySelector(".Dropdown-menu");

dropdownClick.addEventListener("click", function(toggle){
    
    // toggle.addEventListener("click",(e)=>{
          toggle.preventDefault();

        const dropdownMenu = this.nextElementSibling;

        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    })
