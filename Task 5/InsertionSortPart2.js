function insertionSort2(n, arr) {

    let previousIndex = 0;
    let presentIndex = 0;
    let temp = 0;
    
    for( let index in arr ){
        presentIndex = index;
        previousIndex = presentIndex-1;
        
        while( previousIndex >= 0 && arr[ previousIndex ] > arr[ presentIndex ] ){            
            temp = arr[ presentIndex ];
            arr[ presentIndex ] = arr[ previousIndex ];
            arr[ previousIndex ] = temp;
            previousIndex -= 1;
            presentIndex -= 1;
        }
        if( index > 0){
            console.log(...arr);
        }
    }
}