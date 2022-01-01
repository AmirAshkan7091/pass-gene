let generateBtn = document.querySelector("#generate");
// gnerate the password
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    let retValr = "";
    let retValChar = "";
    let retValSpecChar = "";
    let retValLowCas = "";
    let retValUppCas = "";
    let retValFars = "";
    let result = "";

    let criterias = {
        numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        chars: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ",", "|", "]", "[", "{", "}", "/", "?", ">", "<", ".", "'", ";", ":"],
        specialChars: ["œ", "∑", "®", "†", "¥", "ø", "π", "“", "«", "å", "ß", "∂", "ƒ", "©", "˙", "∆", "˚", "¬", "…", "æ", "≈", "ç", "√", "µ", "≤", "≥", "÷"],
        lowerCase: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"],
        upperCase: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"],
        arabicAlphabet: ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "ج", "چ", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و"]
    }
    let numbers = criterias.numeric;
    console.log("adada" + " " + numbers);
    let charecters = criterias.chars;
    let specialCharecters = criterias.specialChars;
    let lower = criterias.lowerCase;
    let upper = criterias.upperCase;
    let farsi = criterias.arabicAlphabet;

    let numberBtwMaxMin = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    let passLength = parseInt(prompt("choose your password lenghth between 8 and 24"));

    if ((numberBtwMaxMin.indexOf(passLength) >= 0) && passLength !== null) {

        let userOptions = {
            choosingNumbers: confirm("do you like your password include numbers ?"),
            choosingChars: confirm("do you like your password include characters like(!,@,*,%,...) ?"),
            choosingSpecialChars: confirm("do you like your password include special secret charecters like (œ,ç,π,∂,...) ?"),
            choosingLowerCase: confirm("do you like your password include lowercase ?"),
            choosingUpperCase: confirm("do you like your password include uppercase ?"),
            choosingarabicAlphabet: confirm("do you like your password include arabicAlphabet ?")
        }

        let confirmNumeric = userOptions.choosingNumbers;
        let confirmChars = userOptions.choosingChars;
        let confirmSpecialChars = userOptions.choosingSpecialChars;
        let confirmCLowerase = userOptions.choosingLowerCase;
        let confirmUpperCase = userOptions.choosingUpperCase;
        let confirmArabicAlphabet = userOptions.choosingarabicAlphabet;



        for (let i = 0; i < (passLength / 2); i++) {

            if (confirmNumeric === true) {
                console.log(confirmNumeric);
                retValr += numbers[Math.floor(Math.random() * numbers.length)];
                console.log(retValr);
            }
            if (confirmChars === true) {
                console.log(confirmChars);
                retValChar += charecters[Math.floor(Math.random() * charecters.length)];
                console.log(retValChar);
            }
            if (confirmSpecialChars === true) {
                console.log(confirmSpecialChars);
                retValSpecChar += specialCharecters[Math.floor(Math.random() * specialCharecters.length)];
                console.log(retValSpecChar);
            }
            if (confirmCLowerase === true) {
                console.log(confirmCLowerase);
                retValLowCas += lower[Math.floor(Math.random() * lower.length)];
                console.log(retValLowCas);
            }
            if (confirmUpperCase === true) {
                console.log(confirmUpperCase);
                retValUppCas += upper[Math.floor(Math.random() * upper.length)];
                console.log(retValUppCas);
            }
            if (confirmArabicAlphabet === true) {
                console.log(confirmArabicAlphabet);
                retValFars += farsi[Math.floor(Math.random() * farsi.length)];
                console.log(retValFars);
            }


        }

    } else {
        alert("the app got canseled or the number was not between 8 and 24");
    }
    let answer = retValr + retValChar + retValSpecChar + retValLowCas + retValUppCas + retValFars;
    result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');

    return result;
}

// Write password to the #password input
function writePassword() {

    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;


}