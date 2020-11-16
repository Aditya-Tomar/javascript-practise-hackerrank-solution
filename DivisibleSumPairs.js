function divisibleSumPairs(n, k, ar) {

    let sum = 0;
    let pairs = 0;

    for(let index1 = 0; index1 < ar.length; index1++){
        for(let index2 = index1+1 ; index2 < ar.length; index2++){
            
            sum = 0;
            sum += (ar[index1] + ar[index2]);
            
            if(sum % k === 0){
               pairs++;
            }
        } 
    }
    return pair;
}