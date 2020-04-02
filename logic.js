



//Variables 
var passWordGeneratingCharacters;
var passwordGeneratingCriteria = [];
var wantsLowerCaseLetter;




function passWord() {

    

    var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //console.log(lowerCaseLetters)
    //Spcial Characters 
    var specChars = ['!', '?', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '~', '`'];
   // console.log(specChars)
    //Numbers
    var numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // console.log(numChars)
    var upperCaseLetters = (String.prototype.toUpperCase.apply(lowerCaseLetters).split(","));
    
    
    var passwordLenght = prompt("Pick a number between 8 and 128");
    console.log("User Pass Length: " + passwordLenght)

    if (passwordLenght >= 8 && passwordLenght <= 128) {


        var numberLet = confirm("Do you want a number?");
        
        if (numberLet === true) {
            passwordGeneratingCriteria.push(numChars)
        }
        else{
            
        }


        var lowerLet = confirm("Do you want a lower case letter?");
        
        if (lowerLet === true) {
            
            passwordGeneratingCriteria.push(lowerCaseLetters)
        }
        else {
    
        }

        var specLet = confirm("Do you want a special character?");
        
        if (specLet === true) {
        passwordGeneratingCriteria.push(specChars)
        }
        else {
            
        }

        var upperLet = confirm("Do you want uppercase letters")
            
            if (upperLet === true) {
                passwordGeneratingCriteria.push(upperCaseLetters);
            }
            else {
                console.log("Your password will not incluse uppercase letters?");
            }
           
        // ***************for loop over our array (passworeGeneratingCriteria) using math.random
            // loop over  the array ONLY the amount of times the user 

            
            // loop through "passwordLength" === to the amount of chars the user enters in when we prompt them
            for (var i = 0; i < passwordLenght.length; i++) { 

                // Get random Value from our array with all the chars the user accepted
                var random = (Math.floor(Math.random() * passwordGeneratingCriteria.length));

                // pass the random var ^^ into the array
                passwordGeneratingCriteria[random];
                // array that holds user char choices
                // each loop, take the random char, store it in a varialbel
                completedPass =+ passwordGeneratingCriteria; // each loop, completedPass = passGenCri

            }
            // console.log that completed password
            // "completedPass" is the variable that will hold our random pass after the password generated the password
            //parseInt(Random Char)
            console.log(completedPass);
            
            
            
            

    } else { // if it doesnt meet requirements
        alert("Didn't meet requirements")
        
        
    }
    
}


    
var generateBtn = document.querySelector("#generate");

    generateBtn.addEventListener("click", passWord);


  


//     var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = passwordGeneratingCriteria();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
















    

















