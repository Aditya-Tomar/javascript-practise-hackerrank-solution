function encryption(s) {

    let stringLength = 0;
    let row = 0, column = 0;
    let copyString = '';
    let encryptedString = '';
    
    for(let index1 = 0; index1 < s.length; index1++){
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

    for(let index1 = 0; index1 < column; index1++){
        for(let index2 = index1; index2 < stringLength; index2+= column){
            encryptedString += copyString[index2];
        }
        encryptedString += ' ';
    }
 
    return encryptedString;
}
