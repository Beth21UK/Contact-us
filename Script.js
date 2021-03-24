//dom code
document.addEventListener('DOMContentLoaded', function() {
    // create a var for the button
    var button = document.getElementById("buttonID");
     //add click listener to define action when clicked
    button.addEventListener('click', function(){
      // extract text from contact form
      var name = document.getElementById("nameID").innerHTML;
      var email = document.getElementById("emailID").innerHTML;
      // create var to reference the message paragraph
      var messageBox = document.getElementById("messageID");
      // if content not null then display 'submitted' message
   if (name == null || name == '' ||email == null || email == ''){
    messageBox.innerText = 'submitted';
    messageBox.style.color = 'black';
   }
    // else - error message
    else {
      messageBox.innerText = 'error';
      messageBox.style.color = 'red';
    }
   
    });
    
  });