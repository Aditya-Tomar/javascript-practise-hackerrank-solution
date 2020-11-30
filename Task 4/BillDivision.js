function bonAppetit(bill, k, b) {

    let annaAmount = 0;
    
    for( let index in bill ){
        if( k != index ){ 
            annaAmount += bill[index];
        }
    }

    annaAmount /= 2;  
    console.log( b - annaAmount <= 0 ? 'Bon Appetit':  Math.abs( b - annaAmount ) );
}