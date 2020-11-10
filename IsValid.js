function isValid(s) {
    
    let iterator_1 = 0;
    let count_1 = 0, count_2 = 0;
    let element_diff = 0;
    let distinct_element = new Set();
    let frequency_arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    
    for( let char in s){
        //console.log(s[char], s[char].charCodeAt(0));
        frequency_arr[s[char].charCodeAt(0) - 97]++;
    }
    
    //console.log(frequency_arr);
    
    distinct_element = new Set(frequency_arr);
    distinct_element.delete(0);

    //console.log(distinct_element.size);
    //console.log(distinct_element);
    
    
    if(distinct_element.size == 1){
        return "YES";
    }
    else if( distinct_element.size > 2){
        return "NO";
    }
    else{
        for(let value of distinct_element){
            count_1 = count_2;
            count_2 = 0;
            for( iterator_1 = 0; iterator_1 < 26; iterator_1++){
                if(frequency_arr[iterator_1] == value)
                    count_2++;
            }
            element_diff -= value;
            element_diff = Math.abs(element_diff);
        }
    
        if(count_1 > 1 && count_2 == 1 || count_1 == 1 && count_2 > 1 && (element_diff == 1)){
            return "YES";
        }
        else{    
            return "NO";
        }
    }   
}