function climbingLeaderboard(scores, alice) {

    let ranksIndex;
    let aliceIndex = 0;
    let index = 0;
    let lastIndex=0;
    
    let ranks = [];
    let results = [];
    
    
    ranks.push(scores[0]);
    
    for( index = 1; index < scores.length; index += 1){
        if( ranks[lastIndex] != scores[index] ){
            ranks.push( scores[index] );
            lastIndex+=1;
        }    
    }
    
    ranksIndex = ranks.length-1;
    
    for(aliceIndex = 0; aliceIndex < alice.length ; aliceIndex += 1){
        
        if( ranksIndex < 0 ){
            ranksIndex = 0;
        }
        
        if( alice[aliceIndex] == ranks[ranksIndex]){
            results.push(ranksIndex+1);
            ranksIndex--;
        }
        else if( alice[aliceIndex] < ranks[ranksIndex]){
            results.push(ranksIndex+2);
        }
        else{
            
            if(alice[aliceIndex] > ranks[ranksIndex] && ranksIndex != 0){
                aliceIndex-=1;
                if( ranksIndex < 0 ){
                    ranksIndex = 0;
                }
                else{
                    ranksIndex-=1;
                }
            }
                
            if( alice[aliceIndex] > ranks[ranksIndex] && ranksIndex == 0 ){
                results.push(1);
            }
        }
    }
    return results;
}
