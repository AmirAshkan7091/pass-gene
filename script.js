// gnerate the password
function generatePassword() {
    let retVal;
    let criterias = {
        numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        // chars: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ",", "|", "]", "[", "{", "}", "/", "?", ">", "<", ".", "'", ";", ":"],
        // specialChars: ["œ", "∑", "®", "†", "¥", "ø", "π", "“", "«", "å", "ß", "∂", "ƒ", "©", "˙", "∆", "˚", "¬", "…", "æ", "≈", "ç", "√", "µ", "≤", "≥", "÷"],
        // lowerCase: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"],
        // upperCase: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"],
        // arabicAlphabet: ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "ج", "چ", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و"]
    }
    let numbers = criterias.numeric;
    // let charecters = criterias.chars;
    // let specialCharecters = criterias.specialCharecters;
    // let lower = criterias.lowerCase;
    // let upper = criterias.upperCase;
    // let farsi = criterias.arabicAlphabet;

    let numberBtwMaxMin = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    //---prompts

    let choosingPassLength = parseInt(prompt("choose your password lenghth between 8 and 24"));
    console.log(choosingPassLength);



    if ((numberBtwMaxMin.indexOf(choosingPassLength) >= 0) && choosingPassLength !== null) {

        let randomNumeric = Math.floor(Math.random() * numbers.length);
        console.log(randomNumeric);
        // let randomChars = criterias.chars[Math.floor(Math.random() * choosingPassLength)];
        // let randomspecialChars = criterias.specialChars[Math.floor(Math.random() * criterias.specialChars.length)];
        // let randomlowerLcase = criterias.lowerCase[Math.floor(Math.random() * criterias.lowerCase.length)];
        // let randomupperCase = criterias.upperCase[Math.floor(Math.random() * criterias.upperCase.length)];
        // let randomarabicAlphabet = criterias.arabicAlphabet[Math.floor(Math.random() * criterias.arabicAlphabet.length)];


        let userOptions = {
            choosingNumbers: confirm("do you like your password include numbers ?")
                // choosingChars: confirm("do you like your password include characters like(!,@,*,%,...) ?"),
                // choosingSpecialChars: confirm("do you like your password include special secret charecters like (œ,ç,π,∂,...) ?"),
                // choosingLowerCase: confirm("do you like your password include lowercase ?"),
                // choosingUpperCase: confirm("do you like your password include uppercase ?"),
                // choosingarabicAlphabet: confirm("do you like your password include arabicAlphabet ?")
        }

        if (userOptions.choosingNumbers === true) {

            for (let i = 0, n = numbers.choosingPassLength; i < choosingPassLength; i++) {
                console.log(retVal += numbers.charAt(Math.floor(Math.random() * n)));
                retVal += numbers.charAt(Math.floor(Math.random() * n));
            }
        }

        return retVal;

    } else {
        alert("the app got canseled or the number was not between 8 and 24");
    }



}


console.log(generatePassword());
console.log(password);
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);