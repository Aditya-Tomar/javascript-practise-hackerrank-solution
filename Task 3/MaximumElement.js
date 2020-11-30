function processData(input) {
    //Enter your code here
    
    let index, value;
    let maxNumber = [0];
    let stack = [];
    
    let [, ...queries] = input.split('\n');
    
    for( let element of queries){
        if( element[0] === '1'){
            [index, value] = element.split(' ');
                    
            if( Number(value) >= maxNumber[maxNumber.length-1] ){
                maxNumber.push(Number(value));
            }
            stack.push(Number(value));
        }
        else if(element[0] === '2'){
            if( maxNumber[maxNumber.length-1] === stack[stack.length-1]){
                maxNumber.pop();
                stack.pop();
            }
            else{
                stack.pop();
            }
        }
        else{
            console.log(maxNumber[maxNumber.length-1]);
        }
    }
} 