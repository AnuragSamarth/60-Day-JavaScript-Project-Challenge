const day = document.querySelector(".days");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".second");


const targetDate = new Date("2025-01-01T00:00:00");

// console.log(date);
function updateCountdown(){
    const currentDate = new Date();
    // console.log(currentDate)
    const timeDifference = targetDate - currentDate;
    console.log(timeDifference);
    const days = Math.floor(timeDifference/(1000 * 60 * 60 * 24))

    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    day.innerHTML = `${days}d`;
    hour.innerHTML = `${hours}h`;
    minute.innerHTML = `${minutes}m`;
    second.innerHTML = `${seconds}s`    
   setTimeout(updateCountdown,1000);
}

updateCountdown()
