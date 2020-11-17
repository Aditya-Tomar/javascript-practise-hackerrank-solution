function miniMaxSum(arr) {

    let smallestElement = 9999999999;
    let largestElement = 0;
    let sum = 0;
    
    /*
    
    let sum = 0;
    arr.sort();
    
    for( let index in arr){
        sum += arr[index];
    }
    
    console.log(sum - arr[0], sum - arr[arr.length-1]);
    */
    
    for( let index in arr ){
        if ( arr[index] > largestElement ) {
            largestElement = arr[index];
        }
        
        if( arr[index] < smallestElement ){
            smallestElement = arr[index];
        }
        
        sum += arr[index];
    }
    
    console.log( sum - largestElement, sum - smallestElement);
}
