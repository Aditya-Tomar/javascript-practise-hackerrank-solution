function gradingStudents(grades) {
    // Write your code here
    let outputArray = [];
    let nextDigit= 0;
    
    for(let element of grades){
        if( element < 38){
            outputArray.push(element);
        }
        else if( element === 100){
            outputArray.push(element);
        }
        else{
            nextDigit = 5 * (Math.floor(element/5)+1);
            outputArray.push( nextDigit - element < 3 ? nextDigit : element );
        }
    }
    return outputArray;
}