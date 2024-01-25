const files = document.querySelector('#file-input');
const displayImg = document.querySelector('.preview');


files.addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
 var files = event.target.files;   //store the FileList object in the files object
  
  if(files.length > 0){ 
     for(const imgFiles of files){
         const reader = new FileReader();
          reader.readAsDataURL(imgFiles);

          reader.addEventListener('load' , ()=>{
           displayImg.innerHTML = `   
           <img src='${reader.result}'>
           `;
          })
     }
  }
}
