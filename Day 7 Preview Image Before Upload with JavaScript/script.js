const loadFile = (event)=>{
    let output = document.querySelector("#output");
    output.src = URL.createObjectURL(event.target.files[0])
    console.log(output.src);

    output.onload = function(){
        URL.revokeObjectURL(output.src);
    }
}