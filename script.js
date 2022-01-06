let generateBtn = document.querySelector("#generate");

function generatePassword() {

    // create some variebles to fill them up at the right time
    let retValr = "";
    let retValChar = "";
    let retValSpecChar = "";
    let retValLowCas = "";
    let retValUppCas = "";
    let retValFars = "";
    let result = "";
    let newPass = "";

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

    // put For statement here to generate the chosen perfrences in pass length time
    for (let i = 0; i < passLength; i++) {

        console.log(parseInt("pass toolesh" + " " + inputElements));

        if (confirmNumeric !== null) {
            console.log("boolean avali" + " " + confirmNumeric);
            retValr += numbers[Math.floor(Math.random() * numbers.length)];
            console.log("retvalr" + " " + retValr);
            console.log("toole" + " " + numbers.length);
        }
        if (confirmChars !== null) {
            console.log(confirmChars);
            retValChar += charecters[Math.floor(Math.random() * charecters.length)];
            console.log(retValChar);
        }
        if (confirmSpecialChars !== null) {
            console.log(confirmSpecialChars);
            retValSpecChar += specialCharecters[Math.floor(Math.random() * specialCharecters.length)];
            console.log(retValSpecChar);
        }
        if (confirmCLowerase !== null) {
            console.log(confirmCLowerase);
            retValLowCas += lower[Math.floor(Math.random() * lower.length)];
            console.log(retValLowCas);
        }
        if (confirmUpperCase !== null) {
            console.log(confirmUpperCase);
            retValUppCas += upper[Math.floor(Math.random() * upper.length)];
            console.log(retValUppCas);
        }
        if (confirmArabicAlphabet !== null) {
            console.log(confirmArabicAlphabet);
            retValFars += farsi[Math.floor(Math.random() * farsi.length)];
            console.log(retValFars);
        }
    }

    // put what ever the user checked together
    let answer = retValr + retValChar + retValSpecChar + retValLowCas + retValUppCas + retValFars;
    console.log("answer=" + " " + answer);

    // here beacuse of last step for loop goes to all statement and take pass length time of eache array here it is going to shufle the answer variable and just take the first pass length amount of it to show
    if (passLength === 8) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log("toole result=" + " " + result.length);
        console.log("result=" + " " + result);
        newPass = result.slice(0, 8) + (result.length > 8 ? "" : "");
        console.log("newpass=" + " " + newPass);
    }
    if (passLength === 10) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 10) + (result.length > 10 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 12) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 12) + (result.length > 12 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 14) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 14) + (result.length > 14 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 16) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 16) + (result.length > 16 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 18) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 18) + (result.length > 18 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 20) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 20) + (result.length > 20 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 22) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 22) + (result.length > 22 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 24) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 24) + (result.length > 24 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 26) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 26) + (result.length > 26 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 28) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 28) + (result.length > 28 ? "" : "");
        console.log(newPass);
    }
    if (passLength === 30) {

        result = answer.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(result.length);
        console.log(result);
        newPass = result.slice(0, 30) + (result.length > 30 ? "" : "");
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

// gnerate the password
generateBtn.addEventListener("click", writePassword);