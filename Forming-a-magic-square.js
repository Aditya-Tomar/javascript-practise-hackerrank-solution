// Solved quickly

function formingMagicSquare(s) {
    
    let arr = [
            [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
            [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
            [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
            [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
            [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
            [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
            [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
            [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
            ];

    let rowIndex = 0;
    let columnIndex = 0;
    let arrayIndex = 0;
    let minCost = 10000000000;
    let tempArray = [];
    let cost = 0;
    
    for(arrayIndex = 0; arrayIndex < arr.length; arrayIndex += 1){
    
    tempArray = arr[arrayIndex];
    cost=0;
  
        for(rowIndex = 0; rowIndex < s.length; rowIndex += 1){
            
            for(columnIndex = 0; columnIndex < s.length; columnIndex += 1 ){
                    if(tempArray[rowIndex][columnIndex] > s[rowIndex][columnIndex]){
                        cost += tempArray[rowIndex][columnIndex] - s[rowIndex][columnIndex];
                    }
                    else{
                        cost += s[rowIndex][columnIndex] - tempArray[rowIndex][columnIndex];
                    }  
            }
        }
        if(minCost > cost)
            minCost = cost;
    }
    
return minCost;
}