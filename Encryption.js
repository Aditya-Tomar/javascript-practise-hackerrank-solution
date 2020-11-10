function encryption(s) {

    let index1 = 0, index2 = 0;
    let stringLength = 0;
    let row = 0, column = 0;
    let copyString = '';
    let encryptedString = '';
    
    for(index1 = 0; index1 < s.length; index1++){
        if(s[index1] != ' '){
            stringLength++;
            copyString += s[index1];
        }   
    }
    
    row = Math.floor(Math.sqrt(stringLength));
    
    if( row != Math.sqrt(stringLength) ){
        column = row + 1;
    }
        else{
        column = row;
    }
    
    while( column * row < stringLength){
        row++;
    }

    for(index1 = 0; index1 < column; index1++){
        for(index2 = index1; index2 < stringLength; index2+= column){
            encryptedString += copyString[index2];
        }

        encryptedString += ' ';
    }
 
    return encryptedString;
}
