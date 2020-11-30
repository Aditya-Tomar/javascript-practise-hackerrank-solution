function insertionSort1(n, arr) {

    let minElement = arr[n-1];
    let index = 0;
    arr[n-1] = arr[n-2];
    
    for( index = n-1; index > 0; index-- ){
        if( arr[index] >= arr[index - 1] && arr[index - 1] > minElement){
            arr[index] = arr[index - 1];
            console.log(...arr);
        }
        else if( arr[index - 1] < minElement ){
            arr[index] = minElement; 
            break;
        }   
    }
    arr[index] = minElement;
    console.log(...arr);
}