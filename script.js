let generateBtn = document.querySelector("#generate");

// create some variebles to fill them up at the right time
let retValr = "";
let newPass = "";
let arrayChar = []

// a object of arrays that inculde six different characters
let criterias = {
    numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    chars: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ",", "|", "]", "[", "{", "}", "/", "?", ">", "<", ".", "'", ";", ":"],
    specialChars: ["œ", "∑", "®", "†", "¥", "ø", "π", "“", "«", "å", "ß", "∂", "ƒ", "©", "˙", "∆", "˚", "¬", "…", "æ", "≈", "ç", "√", "µ", "≤", "≥", "÷"],
    lowerCase: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"],
    upperCase: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"],
    arabicAlphabet: ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "ج", "چ", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و"]
}

// put the objects in specific variables
let numbers = criterias.numeric;
let charecters = criterias.chars;
let specialCharecters = criterias.specialChars;
let lower = criterias.lowerCase;
let upper = criterias.upperCase;
let farsi = criterias.arabicAlphabet;

function generatePassword() {

    let result = "";

    // create an object with six keys, that select the checkboxes in html
    let userOptions = {
        choosingNumbers: document.querySelector(`input[name="numb"]:checked`),
        choosingChars: document.querySelector(`input[name="char"]:checked`),
        choosingSpecialChars: document.querySelector(`input[name="spechar"]:checked`),
        choosingLowerCase: document.querySelector(`input[name="lower"]:checked`),
        choosingUpperCase: document.querySelector(`input[name="upper"]:checked`),
        choosingarabicAlphabet: document.querySelector(`input[name="farsi"]:checked`)
    }

    // put the objects in specific variables
    let confirmNumeric = userOptions.choosingNumbers;
    let confirmChars = userOptions.choosingChars;
    let confirmSpecialChars = userOptions.choosingSpecialChars;
    let confirmCLowerase = userOptions.choosingLowerCase;
    let confirmUpperCase = userOptions.choosingUpperCase;
    let confirmArabicAlphabet = userOptions.choosingarabicAlphabet;

    // create a variable to get the radios checkboxes values and use it as a pass length
    let inputElements = document.querySelector('#exampleRadios:checked').value;
    let passLength = parseInt(inputElements);

    // IF statements for getting the prefrences that user choosed and gather them in one array
    if (confirmNumeric !== null) {

        arrayChar.push(numbers);
    }
    if (confirmChars !== null) {
        arrayChar.push(charecters);
    }
    if (confirmSpecialChars !== null) {
        arrayChar.push(specialCharecters);
    }
    if (confirmCLowerase !== null) {
        arrayChar.push(lower);
    }
    if (confirmUpperCase !== null) {
        arrayChar.push(upper);
    }
    if (confirmArabicAlphabet !== null) {
        arrayChar.push(farsi);
    }

    // put For statement here to generate the chosen perfrences in pass length time
    for (let i = 0; i < passLength; i++) {

        let one = Math.floor((Math.random() * arrayChar.length - 1) + 1)
        let two = Math.floor((Math.random() * arrayChar[one].length - 1) + 1)

        retValr = result += arrayChar[one][two];

        newPass = retValr.split('').sort(function() { return 0.5 - Math.random() }).join('');


    }
    return newPass;

}

// Write password to the #password input
function writePassword() {

    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// gnerate the password
generateBtn.addEventListener("click", writePassword);