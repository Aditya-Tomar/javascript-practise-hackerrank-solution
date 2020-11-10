function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let index = 0;
    let appleCounter = 0;
    let orangeCounter = 0;
    let startPosition = s;
    let endPosition = t;
    
    for(index = 0; index < apples.length; index++){
        if( apples[index] >= 0 && a + apples[index] >= startPosition && a + apples[index] <= endPosition ){
            appleCounter++;
        }
    }
    
    for(index = 0; index < oranges.length; index++){
        if( oranges[index] < 0 && b + oranges[index] <= endPosition && b + oranges[index] >= startPosition ){
            orangeCounter++;
        }
    }
    
    console.log(appleCounter);
    console.log(orangeCounter);
}
