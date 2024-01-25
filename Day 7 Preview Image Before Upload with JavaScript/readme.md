In this project I used two different approuch / Method to display preview image.

1st Method
When the event is fire then (event.target.files[0]) will be point out the image file properties.
URL.createObjectURL will convert the image file path into a URL.
And this URL will store the output.src property.




2nd Method
When the event is fire then (event.target.files[0]) will be point out the image file properties and store them in imageFile variable.

 `const reader = new FileReader();`
This line of code creates a new `FileReader` object, which is a built-in JavaScript object that can read the contents of a file. The `reader` variable will hold a reference to this new object.


`reader.readAsDataURL(imageFile);`
This line of code uses the readAsDataURL method of the FileReader object to read the contents of the file referenced by the imageFile variable. This method reads the file as a base64-encoded data URL.


`reader.addEventListener('load', ()=>{`
This line of code adds an event listener to the `reader` object. The event listener is for the `load` event, which is fired when the reading operation is successfully completed. When this event is fired, the function specified in the second argument will be executed. In this case, the function is an arrow function with an empty parameter list (`()=>{}`).


`output.setAttribute('src', reader.result);`
This line of code sets the src attribute of the output element to the base64-encoded data URL representing the image file. This allows the output element to display the image.
