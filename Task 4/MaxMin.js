function maxMin(k, arr) {
    
    let min = Infinity;
    let frequencyArray = [];
    let outputResult = 0;
    let lastElement = 0;
    
    for( let index in arr){
        arr[index] = Number(arr[index]);
    }
    
    arr.sort(function(a, b) {
        return a - b;
    });
    
    for( let index in arr.reverse() ){
        index = Number(index);
        k = Number(k);
        
        if( index + k-1 < arr.length ){
            if( arr[index] - arr[index+k-1] < min ){
                frequencyArray.push(index);
                min = arr[index] - arr[index + k-1];
                console.log(min);
            }
        }
    }
    lastElement = frequencyArray[frequencyArray.length-1];
    outputResult  = arr[lastElement] - arr[lastElement + k-1];
    return outputResult;
}
