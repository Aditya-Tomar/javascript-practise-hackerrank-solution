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

    let iterator_row = 0;
    let iterator_column = 0;
    let iterator_arr = 0;
    let min_cost = 10000000000;
    let temp_arr = [];
    let cost=0;
    
    for(iterator_arr = 0; iterator_arr < arr.length; iterator_arr += 1){
    
    temp_arr = arr[iterator_arr];
    cost=0;
  
        for(iterator_row = 0; iterator_row < s.length; iterator_row += 1){
            
            for(iterator_column = 0; iterator_column < s.length; iterator_column += 1 ){
                    if(temp_arr[iterator_row][iterator_column] > s[iterator_row][iterator_column]){
                        cost += temp_arr[iterator_row][iterator_column] - s[iterator_row][iterator_column];
                    }
                    else{
                        cost += s[iterator_row][iterator_column] - temp_arr[iterator_row][iterator_column];
                    }  
            }
        }
        if(min_cost > cost)
            min_cost = cost;
    }
    
return min_cost;
}