//Lowercase
let lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  console.log(lowerCaseLetters)
//Spcial Characters 
let specChars = ['!','?','@','#','$','%','^','&','*','(',')','<','>','~','`'];
  console.log(specChars)
//Numbers
let numChars = ['0','1','2','3','4','5','6','7','8','9'];
  console.log(numChars)
//Upper case - https://stackoverflow.com/questions/29719329/convert-array-into-upper-case
let upperCaseLetters = String.prototype.toUpperCase.apply(lowerCaseLetters).split(",");
  console.log(upperCaseLetters)

//Variables 
let passwordLenght;
let passWordGeneratingCharacters;
let passwordGeneratingCriteria = [];
let wantsLowerCaseLetter;

//User options - alerts
let userChoises = confirm("Want lowercase letters?")

  if (wantsLowerCaseLetter) {
    let joinedlowerCaseLetters = lowerCaseLetters.join('');
    passwordGeneratingCriteria.push(joinedlowerCaseLetters);
    alert("Your password will include lowercase letters");
  }
  else{
    alert("Your password will not have lowercase letters");
  }

let wantsUpperCaseLetter = confirm("Include uppercase letters?")

  if (wantsUpperCaseLetter) {
    let joinedUpperCaseLetters = upperCaseLetters.join('');
    passwordGeneratingCriteria.push(joinedUpperCaseLetters);
    alert("Your password will incluse lowercase letters");
  }
  else{
    alert("Your password will not incluse uppercase letters");
  }

  let wantsSpecChars= confirm("Include special characters?")

  if (wantsSpecChars) {
    let joinedSpecChars = specChars.join('');
    passwordGeneratingCriteria.push(joinedSpecChars);
    alert("Your password will incluse special characters");
  }
  else{
    alert("Your password will not incluse special characters");
  } 


  let wantsNumbers= confirm("Include numbers?")

  if (wantsNumbers) {
    let joinedNumChars = numChars.join('');
    passwordGeneratingCriteria.push(joinedNumChars);
    alert("Your password will incluse numbers");
  }
  else{
    alert("Your password will not incluse numbers");
  }

if (!wantsLowerCaseLetter && !wantsUpperCaseLetter && !wantsSpecChars && !wantsNumbers) {
  alert("Must choose at least one character to generate password");
}  
