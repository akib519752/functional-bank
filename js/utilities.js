function getInputFieldValueById(inputFieldId) {
    const inputFiled = document.getElementById(inputFieldId);
    const inputFieldValueString = inputFiled.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFiled.value = '';
    return inputFieldValue;
}


function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;

}

function setTextElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}
