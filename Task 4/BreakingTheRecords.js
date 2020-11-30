function breakingRecords(scores) {

    let minCount = -1;
    let maxCount = -1;
    let min = Infinity;
    let max = -Infinity;
    
    for( let index in scores ){
        if( scores[index] > max ){
            max = scores[index];
            maxCount++;
        }
        if( scores[index] < min ){
            min = scores[index];
            minCount++;
        } 
    }
    return [maxCount, minCount];
}


