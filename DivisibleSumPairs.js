function divisibleSumPairs(n, k, ar) {

    let iterator_1 = 0;
    let iterator_2 = 0;
    let sum = 0;
    let pair = 0;

    for(iterator_1 = 0; iterator_1 < ar.length; iterator_1++){
        for(iterator_2 = iterator_1+1 ; iterator_2 < ar.length; iterator_2++){
            
            sum = 0;
            sum += (ar[iterator_1] + ar[iterator_2]);
            
            if(sum % k == 0){
               pair++;
            }
        } 
    }
    return pair;
}