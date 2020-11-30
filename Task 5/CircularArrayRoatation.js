function circularArrayRotation(a, k, queries) {

    let resultArray = [];
    let element = 0;
    let temp;
    
    
    for( let index2 = 0; index2 < k; index2++ ){
        element = a[0];
        a[0] = a[a.length-1];
        
        for( let index1 = 1; index1 < a.length; index1++ ){
            temp = a[index1];
            a[index1] = element;
            element = temp;
        }    
    } 
    for( let index of queries ){
        resultArray.push( a[index] );
    }
    return resultArray;
}


function circularArrayRotation(a, k, queries) {

    let resultArray = [];
    let element = 0;
    let tempArray = [];
    let array = [];
    
    let temp = 0;
    
    for(let index = 0; index < a.length-1; index++){
        tempArray.push( a[(k-1) + index ] );
    }
    //console.log(tempArray);
    for( let index = 0; index < k-1; index++){
        tempArray.push( a[index]);
    }
    //console.log(tempArray);
    //tempArray = [];
    
/*    
    for( let index2 = 0; index2 < k; index2++ ){
        element = a[0];
        a[0] = a[a.length-1];
        
        for( let index1 = 1; index1 < a.length; index1++ ){
            temp = a[index1];
            a[index1] = element;
            element = temp;
        }    
    } 
  
    for( let value of queries ){
        resultArray.push( a[value] );
    }
    */
    
    for( let index of queries ){
        
        resultArray.push( tempArray[index] );
    }
    //return resultArray;
    
    return resultArray;
}