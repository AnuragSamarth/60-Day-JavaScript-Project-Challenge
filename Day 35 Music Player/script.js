let arr = [
    {songName: "Jale 2", url: "./songs/Jale 2.mp3",img:"./images/jale.jpg"},
    {songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg"},
    {songName: "Ram Siya Ram", url: "./songs/Ram Siya Ram.mp3", img:"./images/ram.jpg"},
    {songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg"}
]

const allSongs = document.querySelector("#all-songs");
let poster = document.querySelector("#left")

let audio = new Audio()

let selectedSong = 0

function mainFunction(){
let clutter = ''
arr.forEach(function(elem,index){
    clutter += `
    <div class="song-card" id=${index}>
    <div class="part1">
      <img src="${elem.img}" alt="" />
      <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
  </div>
    `;
})
allSongs.innerHTML = clutter;
audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})` 
}
mainFunction();

allSongs.addEventListener("click", function(dets){
        selectedSong = dets.target.id;
        mainFunction()
        audio.play()
})