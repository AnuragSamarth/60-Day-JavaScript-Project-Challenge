let arr = [
    {songName: "Jale 2", url: "./songs/Jale 2.mp3",img:"./images/jale.jpg"},
    {songName: "Pehle Bhi main", url: "./songs/Pehle Bhe Main.mp3", img: "./images/animal.jpg"},
    {songName: "Ram Siya Ram", url: "./songs/Ram Siya Ram.mp3", img:"./images/ram.jpg"},
    {songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg"}
]

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
document.querySelector("#all-songs").innerHTML = clutter;