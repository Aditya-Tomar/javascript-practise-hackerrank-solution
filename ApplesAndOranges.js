function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let iterator = 0;
    let apple_counter = 0;
    let orange_counter = 0;
    let start_position = s;
    let end_position = t;
    
    for(iterator = 0; iterator < apples.length; iterator++){
        if( apples[iterator] >= 0){
            if( a + apples[iterator] >= start_position && a + apples[iterator] <= end_position)
                apple_counter++;
        }
    }
    
    for(iterator = 0; iterator < oranges.length; iterator++){
        if( oranges[iterator] < 0 ){
            if(b + oranges[iterator] <= end_position && b + oranges[iterator] >= start_position)
                orange_counter++;
        }
    }
    
    console.log(apple_counter);
    console.log(orange_counter);
}
