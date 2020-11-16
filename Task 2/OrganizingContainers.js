function organizingContainers(container) {
    
    let sortPossible = true;
    let rowArr = [];
    let columnArr = [];
    let rowSum = 0, columnSum = 0;
    
    for(let rowIndex = 0; rowIndex < container[0].length; rowIndex++){
        rowSum = 0;
        for(let columnIndex = 0; columnIndex < container[0].length; columnIndex++){
            rowSum += container[rowIndex][columnIndex];
        }
        rowArr.push(rowSum);
    }
    
    for(let columnIndex = 0; columnIndex < container[0].length; columnIndex++){
        columnSum = 0;
        for(let rowIndex = 0; rowIndex < container[0].length; rowIndex++){
            columnSum += container[rowIndex][columnIndex];
        }
        columnArr.push(columnSum);
    }

    rowArr.sort();
    columnArr.sort();
    
    for(let index = 0; index < rowArr.length; index++){
        if( rowArr[index] !== columnArr[index]){
            sortPossible = false;
            break;
        }
    }
    
    if( sortPossible ){
        return 'Possible';
    }
    else{
        return 'Impossible';
    }
}