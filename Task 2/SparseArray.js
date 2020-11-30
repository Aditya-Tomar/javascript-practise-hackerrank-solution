function matchingStrings(strings, queries) {

    const map = new Map();
    let outputArray = [];
    
    for(let index in strings){
        if(map.has( strings[index] )){
            map.set( strings[index], map.get(strings[index])+1 );
        }
        else{
            map.set( strings[index], 1 );
        }
    }
    
    for( let value of queries ){
        if( map.has(value) ){
            outputArray.push( map.get(value) );
        }
        else{
            outputArray.push(0);
        }
    }
    return outputArray;
}