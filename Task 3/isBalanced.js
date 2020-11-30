function isBalanced(s) {

    let inputArray = s.split('\n');
    let stack = [];
    //console.log(bracketFrequency);
    
    for( let element1 of inputArray ){
        for( let element2 of element1){
            if( element2 === ')' && stack[stack.length-1] === '(' || element2 === ']' && stack[stack.length-1] === '[' || element2 === '}' && stack[stack.length-1] === '{'){
                stack.pop();
            }
            else{
                stack.push(element2);
            }
        }
    }
    
    return stack.length === 0 ? 'YES' : 'NO';
}