function biggerIsGreater(w) {

    let iterator_1 = 0,iterator_2 = 0;
    let d_flag=1, a_flag = 1;
    let string = '';
    
    
    for(iterator_1 = 0; iterator_1 < w.length-1; iterator_1++){
        if(!(w[iterator_1] >= w[iterator_1+1])){
            d_flag = 0;
        }
    }
    
    
    for(iterator_1 = 0; iterator_1 < w.length-1; iterator_1++){
        if(!(w[iterator_1] < w[iterator_1+1])){
            a_flag = 0;
        }
    }
    
    
    if(d_flag == 1){
        string = "no answer";
    }
    else if (d_flag == 1 && a_flag != 0){
        string = w;
        string[w.length-2] = w[w.length-1];
        string[w.length-1] = w[w.length-2];
    }
return string;
}