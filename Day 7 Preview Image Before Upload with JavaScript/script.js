let output = document.querySelector("#output");


            // 1st Method 
// const loadFile = (event)=>{
//     output.src = URL.createObjectURL(event.target.files[0])
//     console.log(output.src);

//     output.onload = function(){
//         URL.revokeObjectURL(output.src);
//     }
// }

                                      //  OR
                        

                        // 2nd Method 
const loadFile = (event) =>{
        const imageFile = event.target.files[0];   
    // console.log(imageFile);    // // This line of code will store the selected image file properties in the variable.

    if(imageFile){
        const reader = new FileReader();
        
        // Convert the image file to a string.
       reader.readAsDataURL(imageFile);

       reader.addEventListener('load', ()=>{

        // Set the src value through reader.result which holds the base64 string representation of the image.
        output.setAttribute('src', reader.result);
        // console.log(reader.result);
        // console.log(output);
       })
    }
};