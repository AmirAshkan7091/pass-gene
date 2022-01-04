let generateBtn = document.querySelector("#generate");
// gnerate the password

// var checkedValue = null;

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    let retValr = "";
    let retValChar = "";
    let retValSpecChar = "";
    let retValLowCas = "";
    let retValUppCas = "";
    let retValFars = "";
    let result = "";
    let newPass = "";

    let criterias = {
        numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        chars: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ",", "|", "]", "[", "{", "}", "/", "?", ">", "<", ".", "'", ";", ":"],
        specialChars: ["œ", "∑", "®", "†", "¥", "ø", "π", "“", "«", "å", "ß", "∂", "ƒ", "©", "˙", "∆", "˚", "¬", "…", "æ", "≈", "ç", "√", "µ", "≤", "≥", "÷"],
        lowerCase: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"],
        upperCase: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"],
        arabicAlphabet: ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "ج", "چ", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و"]
    }

    let numbers = criterias.numeric;
    let charecters = criterias.chars;
    let specialCharecters = criterias.specialChars;
    let lower = criterias.lowerCase;
    let upper = criterias.upperCase;
    let farsi = criterias.arabicAlphabet;

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

    let inputElements = document.querySelector('#exampleRadios:checked').value;
    let passLength = parseInt(inputElements);

    for (let i = 0; i < passLength; i++) {

        console.log(parseInt("pass toolesh" + " " + inputElements));

        if (confirmNumeric === true) {
            console.log("boolean avali" + " " + confirmNumeric);
            retValr += numbers[Math.floor(Math.random() * numbers.length)];
            console.log("retvalr" + " " + retValr);
            console.log("toole" + " " + numbers.length);
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

    let answer = retValr + retValChar + retValSpecChar + retValLowCas + retValUppCas + retValFars;
    console.log(answer);
    if (passLength === 8) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 8) + (result.length > 8 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 10) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 10) + (result.length > 10 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 12) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 12) + (result.length > 12 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 14) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 14) + (result.length > 14 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 16) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 16) + (result.length > 16 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 18) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 18) + (result.length > 18 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 20) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 20) + (result.length > 20 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 22) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 22) + (result.length > 22 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 24) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 24) + (result.length > 24 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 26) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 26) + (result.length > 26 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 28) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 28) + (result.length > 28 ? "" : "");;
        console.log(newPass);
    }
    if (passLength === 30) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 30) + (result.length > 30 ? "" : "");;
        console.log(newPass);
    }
    return newPass;

}

// Write password to the #password input
function writePassword() {

    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
}