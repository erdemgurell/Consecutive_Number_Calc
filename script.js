
function calculate(){
    const startNumber = parseInt(document.getElementById('startNumber').value);
    const count = parseInt(document.getElementById('count').value);
    const includeEdgeNumbers  = document.getElementById('includeEdgeNumbers').checked;
    const sumDigits  = document.getElementById('sumDigits').checked;

    if (sumDigits){
        calculateConsecutiveNumberDigits(startNumber,count,includeEdgeNumbers);
    } else{
        calculateConsecutiveNumbers(startNumber,count,includeEdgeNumbers)
    }

}

function calculateConsecutiveNumbers(startNumber,count,includeEdgeNumbers) {

    let result = 0;
    let printer = "";

    if (isNaN(startNumber) || isNaN(count) || count <= 0) {
        result = 'Please enter valid numbers';
    } else {
        const start = includeEdgeNumbers ? startNumber : startNumber + 1;
        const end = includeEdgeNumbers ? count + 1 : count;

        for (let i = start; i < end; i++) {
            result += i;
            if (i + 1 === end){
                printer += i
            } else {
                printer += i + " + ";
            }
        }

    }


    document.getElementById('result').textContent = result;
    document.getElementById('printer').textContent = printer;
}

function calculateConsecutiveNumberDigits(startNumber,count,includeEdgeNumbers) {

    let result = 0;
    let printer = "";
    let numAsStr = "";


    // Consecutive range
    const start = includeEdgeNumbers ? startNumber : startNumber + 1;
    const end = includeEdgeNumbers ? count + 1 : count;

    // add every number to the numAsStr variable
    for (let i = start; i < end; i++) {
        numAsStr += i;
    }

    

    // Convert the string to an array of characters and add numbers in numAsStr to the result
    for (let char of numAsStr) {
        result += parseInt(char, 10);
    }

    let numAsStrLength = numAsStr.length;
    for (let i = 0; i < numAsStrLength; i++) {
        if (i + 1 === numAsStrLength){
            printer += numAsStr[i]
        } else {
            printer += numAsStr[i] + " + ";
        }
    }


    document.getElementById('result').textContent = result;
    document.getElementById('printer').textContent = printer;

}
