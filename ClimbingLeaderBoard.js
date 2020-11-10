function climbingLeaderboard(scores, alice) {

    let ranks_index;
    let alice_index = 0;
    let iterator = 0;
    let last_index=0;
    
    let ranks = [];
    let results = [];
    
    
    ranks.push(scores[0]);
    
    for( iterator = 1; iterator < scores.length; iterator += 1){
        if( ranks[last_index] != scores[iterator] ){
            ranks.push( scores[iterator] );
            last_index+=1;
        }    
    }
    
    ranks_index = ranks.length-1;
    
    for(alice_index = 0; alice_index < alice.length ; alice_index += 1){
        
        if( alice[alice_index] == ranks[ranks_index]){
            results.push(ranks_index+1);
            ranks_index--;
            
            if(ranks_index < 0)
                ranks_index = 0;
        }
        else if( alice[alice_index] < ranks[ranks_index]){
            results.push(ranks_index+2);
        }
        else{
            
            if(ranks_index < 0)
                ranks_index = 0;
                
            if(alice[alice_index] > ranks[ranks_index] && ranks_index != 0){
                alice_index-=1;
                ranks_index-=1;
            }
            
            if( alice[alice_index] > ranks[ranks_index] && ranks_index == 0 ){
                results.push(1);
            }
        }
    }
    return results;
}
