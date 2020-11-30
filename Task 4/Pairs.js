function pairs(k, arr) {
    
    let map = new Map();
    let pairCount = 0;
    
    for( let index in arr){
        map.set(arr[index], arr[index]);
    }
    
    for( let index in arr){
        if( map.has(arr[index] - k) ){
            pairCount++;
        }
        if ( map.has(Number(arr[index]) + Number(k) )){
            pairCount++;
        }
    }
    
    return pairCount/2;
}
