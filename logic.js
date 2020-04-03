



//Variables 

//Final password
var completedPass = []
//>=8 & <=128 chars (user input)
var passwordLenght = [];
//chars to choose from (all available chars in the random password)
var charAvil = [];
// Number of times out for loop will run
var countChar = [];
// holds all of the different arrays of chars
var passwordGeneratingCriteria = {};



// generate a password
function passWord() {

// promt user to choose the lenght of the password
    var passwordLenght = prompt("Pick a number between 8 and 128");
// reasigning passwordlenght to passwordGeneratingCriteria    
    passwordGeneratingCriteria = passwordLenght;
// consoling passwordLenght (user's choice)    
    console.log("User Pass Length: " + passwordLenght)
// for the function to run password has to be between 8 and 128 chars or the function will not run
    if (passwordLenght >= 8 && passwordLenght <= 128) {

// asking the user if they want a number
        var numberLet = confirm("Do you want a number?");
// if user wants numbers then push to array charAvil (charAvil === the array that will hoold all the chars user whises to have in the password)
        if (numberLet === true) {
            // numbers that will be pushed to array if user wants numbers
            charAvil = "0123456789";
        }


// asking the user if they want a lower case letter
        var lowerLet = confirm("Do you want a lower case letter?");
// if user wants lower case then push to array charAvil (charAvil === the array that will hoold all the chars user whises to have in the password)
        if (lowerLet === true) {
// adding char charAvil + the lettes back to charAvail (addings lower leters to the array)
            charAvil = charAvil + "abcdefghijklmnopqrstuvwxyz";
        }

// Same as top two
        var specLet = confirm("Do you want a special character?");

        if (specLet === true) {
            charAvil = charAvil + "~!@#$%^&*?\|,_-";
        }

// same as top two
        var upperLet = confirm("Do you want uppercase letters")

        if (upperLet === true) {
            charAvil = charAvil + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }



        // converting passwordGeneratingCriteria to an integer (countChar)
        var countChar = parseInt(passwordGeneratingCriteria); // 10 || https://www.w3schools.com/jsref/jsref_parseint.asp


        // starting loop that will run as many times as passwordLength
        // for loop get a random char every loop ans stores it to completedPass
        for (var i = 0; i < countChar; i++) {
 
            // https://www.w3schools.com/js/js_random.asp
            var random = Math.floor(Math.random() * charAvil.length);

            // reasigning number of all available chars in the random password to tester
            tester = charAvil[random];
            // each loop, store the random char to completed pass (users final password)
            completedPass += tester;

        }
        // I want you to put this to the page, because this is consoling the completed password
        console.log(completedPass);
        // Display password generated in text area
        document.getElementById("password").innerHTML = completedPass;

    } 
}


// button clik that fires off function
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passWord);


