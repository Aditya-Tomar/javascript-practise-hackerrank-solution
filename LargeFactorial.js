function extraLongFactorials(n) {
    
    let result = 1n;
    
    while(n){
        result *= BigInt(n);
        n--;
    }
    result = String(result);
    console.log(result);
}