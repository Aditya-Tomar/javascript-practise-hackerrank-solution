function diagonalDifference(arr) {
    // Write your code here
    
    let iterator_1 = 0;
    let iterator_2 = 0;
    let diagonal_sum = 0;
    let difference = 0;
    let sum_1 = 0, sum_2 = 0;
    
    for(iterator_1 = 0; iterator_1 < arr[0].length; iterator_1++){
        diagonal_sum += arr[iterator_1][iterator_1];
    }
    
    sum_1 = diagonal_sum;
    diagonal_sum = 0;
    
    for(iterator_1 = arr[0].length-1; iterator_1 >= 0; iterator_1--){
        diagonal_sum += arr[iterator_2][iterator_1];
        iterator_2++;
    }
    
    sum_2 = diagonal_sum;
    
    difference = Math.abs(sum_1 - sum_2);
    
    return difference;
}
