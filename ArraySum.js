function simpleArraySum(ar) {
    
    let index = 0;
    let totalSum = 0;
    
    for(index = 0; index < ar.length; index++ ){
        totalSum += ar[index];
    }
    
return totalSum;
}