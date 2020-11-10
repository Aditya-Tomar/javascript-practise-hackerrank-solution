function encryption(s) {

    let iterator_1 = 0, iterator_2 = 0;
    let s_length = 0;
    let row = 0, column = 0;
    let s_copy = '';
    let encrypted_string = '';
    
    for(iterator_1 = 0; iterator_1 < s.length; iterator_1++){
        if(s[iterator_1] != ' '){
            s_length++;
            s_copy += s[iterator_1];
        }   
    }
    
    row = Math.floor(Math.sqrt(s_length));
    
    if(row != Math.sqrt(s_length))
        column = row + 1;
    else
        column = row;
    
    while( column * row < s_length)
        row++;
    
    for(iterator_1 = 0; iterator_1 < column; iterator_1++){
        for(iterator_2 = iterator_1; iterator_2 < s_length; iterator_2+= column){
        
            encrypted_string += s_copy[iterator_2];
        }
        /*   iterator_2 = 0;c = iterator_1;
            while(iterator_2 < row && c < s_length){
            
            encrypted_string += s_copy[c];
            c+=column;
            iterator_2++;
            }*/
        encrypted_string += ' ';
    }
    return encrypted_string;
}
