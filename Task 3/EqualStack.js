function equalStacks(h1, h2, h3) {
    // Write your code here
    // 30 test cases wala code

    function countElement( value, Arr ){
        let count = 0;
        for(let element of Arr){
            if( value === element ){
                count++;
                break;
            }
        }
        return count;
    }

    function solve( smallestArr, firstArr, secondArr ){
        let count = 0;
        let outputElement = 0;
        for( let value1 of smallestArr ){
            count = 0;
            count += countElement( value1, firstArr );
            count += countElement (value1, secondArr );
            
            if( count === 2){
                outputElement = value1;
                break;
            }
        }
        return outputElement;
    }    


    function elementSum( arr ){
        let outputArr = [];
        let flag = true;
        for( let value of arr.reverse()){
            if(flag){
                outputArr.push( value );
                flag = false;
            }
            else{
               outputArr.push( value + outputArr[outputArr.length-1] );
            }
        }
        return outputArr;
    }


    function compare( largestArr, firstArr, secondArr ){
        if(firstArr.length >= secondArr.length){
            return solve(secondArr, largestArr, firstArr);
        }
        else{
            return solve(firstArr, largestArr, secondArr);
        }
    }

    let firstArray = [];
    let secondArray = [];
    let thirdArray = [];
    
    firstArray = elementSum( h1 );
    secondArray = elementSum( h2 );
    thirdArray = elementSum( h3 );
    
    //console.log(firstArray,secondArray, thirdArray);
    firstArray.reverse();
    secondArray.reverse(); 
    thirdArray.reverse();

    if( firstArray.length >= secondArray.length && firstArray.length >= thirdArray.length ){
        return compare(firstArray, secondArray, thirdArray);
    } 
    else if( secondArray.length >= firstArray.length && secondArray.length >= thirdArray.length){
        return compare(secondArray, thirdArray, firstArray);
    }
    else{
        return compare(thirdArray, secondArray, firstArray);
    }
}