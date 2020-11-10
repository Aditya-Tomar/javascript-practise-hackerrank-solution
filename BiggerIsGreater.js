function biggerIsGreater(w) {

    let index = 0;
    let descendingOrderFlag = 1, assendingOrderFlag = 1;
    let outputString = '';
    
    
    for(index = 0; index < w.length-1; index++){
        if(!(w[index] >= w[index+1])){
            descendingOrderFlag = 0;
        }

        if(!(w[index] < w[index+1])){
            assendingOrderFlag = 0;
        }
    }
    
    
    if(descendingOrderFlag == 1){
        outputString = "no answer";
    }
    else if (descendingOrderFlag == 1 && assendingOrderFlag != 0){
        outputString = w;
        outputString[w.length-2] = w[w.length-1];
        outputString[w.length-1] = w[w.length-2];
    }
return outputString;
}