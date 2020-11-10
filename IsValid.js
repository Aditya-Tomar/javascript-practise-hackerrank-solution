function isValid(s) {
    
    let index1 = 0;
    let count1 = 0, count2 = 0;
    let elementDiff = 0;
    let distinctElementSet = new Set();
    let frequencyArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    
    for( let char in s){
        //console.log(s[char], s[char].charCodeAt(0));
        frequencyArr[s[char].charCodeAt(0) - 97]++;
    }

    distinctElementSet = new Set(frequencyArr);
    distinctElementSet.delete(0);
    
    if(distinctElementSet.size == 1){
        return "YES";
    }
    else if( distinctElementSet.size > 2){
        return "NO";
    }
    else{
        for(let value of distinctElementSet){
            
            count1 = count2;
            count2 = 0;
            for( index1 = 0; index1_ < 26; index1++){
                if(frequencyArr[index1] == value)
                    count2++;
            }
            elementDiff -= value;
            elementDiff = Math.abs(elementDiff);
        }
    
        if(count1 > 1 && count2 == 1 || count1 == 1 && count2 > 1 && (elementDiff == 1)){
            return "YES";
        }
        else{    
            return "NO";
        }
    }   
}