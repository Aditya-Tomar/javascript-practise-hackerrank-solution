function icecreamParlor(m, arr) {

    let map  = new Map();
    let remmainingAmount = 0;
    let value = 0;
    let outputArr = [];
    
    for( let ele in arr ){
        map.set(arr[ele],ele);
    }
    
    for( let ele in arr ){
        if( arr[ele] < m ){
            remmainingAmount = m - arr[ele];
            if(map.has(remmainingAmount)){
                value = map.get(remmainingAmount);
                if( value === ele){
                    continue;
                }
                else{
                    outputArr.push(Number(ele)+1);
                    outputArr.push(Number(value)+1)
                    return outputArr;
                }
            }
        }
    }
    //console.log(outputArr);
}