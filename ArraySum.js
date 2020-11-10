function simpleArraySum(ar) {
    
    let iterator=0;
    let total_sum = 0;
    
    for(iterator = 0; iterator < ar.length; iterator++ ){
        total_sum += ar[iterator];
    }
    
return total_sum;
}