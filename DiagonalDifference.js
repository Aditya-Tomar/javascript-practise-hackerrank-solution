function diagonalDifference(arr) {
    // Write your code here
    
    
    let diagonalSum = 0;
    let difference = 0;
    let sum1 = 0, sum2 = 0;
    
    for(let index1 = 0; index1 < arr[0].length; index1++){
        diagonalSum += arr[index1][index1];
    }
    
    sum1 = diagonalSum;
    diagonalSum = 0;
    
    for(let index1 = arr[0].length-1, index2 = 0; index1 >= 0; index1--){
        diagonalSum += arr[index2][index1];
        index2++;
    }
    
    sum2 = diagonalSum;
    
    difference = Math.abs(sum1 - sum2);
    
    return difference;
}
