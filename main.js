const button = document.getElementById("button-addon2");
button.addEventListener("click", function () {
    const INN = document.getElementById('inputINN').value; //Реєстраційний номер облікової картки платника податків
    INNvalidation(INN);
})
function INNvalidation(INN) {
    let INNarray = [...INN];
    const checkNumber = INNarray[INNarray.length - 1];
    const coefficientArray = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
    INNarray.pop();
    let sum = 0;
    for (let i = 0; i < coefficientArray.length; i++) {
        sum += (INNarray[i] * coefficientArray[i]);
    }
    let remainder = sum % 11;
    if (remainder === 10) {
        remainder = 0;
    }
    if (remainder == checkNumber && INN.length === 10) {
        let sex = "";
        INN[INN.length - 2] % 2 === 0 ? sex = "Human gender: Female" : sex = "Human gender: Male";
        document.getElementById('input__result').value = "Right INN number. " + sex;       
    } else {
        document.getElementById('input__result').value = "Error! Wrong INN number.";
    }
}
