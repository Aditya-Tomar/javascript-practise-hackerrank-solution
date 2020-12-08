const fs = require('fs');

getBookDetailById = function( path, id ){
    let dataBuffer = '';
    let dataJSON = '';
    let dataBody = '';
        
    dataBuffer = fs.readFileSync( path );
    dataJSON = JSON.parse( dataBuffer.toString() );
    dataJSON.filter( (data) => {
        if(data.book_id === id){
            dataBody = data;
        }
    });
    if( dataBody !== ''){
        return dataBody;
    }
    else{
        return { output : 'Details not present' };
    }
}

getAllBookDetail = function( path ){
    let dataBody = '';
    dataBody = fs.readFileSync( path );
    if( dataBody !== ''){
        return dataBody;
    }
    else{
        return { output : 'Details not present' };
    }
    //console.log(dataBody);
}

addBookDetail = function( path, dataBody ){
    let dataJSON = '';
    let dataBuffer = '[]';
    let uniqueId = '';
    //let bodyField = Object.keys(req.body);
    try{
        dataBuffer = fs.readFileSync( path );
    } catch (err) {
        //console.log('Error : ', err);
        fs.writeFileSync( path, '[]');
    }
    
    dataJSON = JSON.parse(dataBuffer.toString());
    uniqueId = dataJSON.filter( ( element ) => {
        return element.book_id === dataBody.book_id;
    });

    if( uniqueId.length === 0){
        dataJSON.push( dataBody );
        fs.writeFileSync( path, JSON.stringify(dataJSON) );
        return dataBody;
    }
    else{
        return { output : 'Book_id already exist' };
    }
}


updateBookDetailById = function( path, id, dataBody ){
    let dataBuffer = '';
    let dataJSON = '';
    let updatedData = '';

    dataBuffer = fs.readFileSync( path );
    dataJSON = JSON.parse(dataBuffer);

    dataJSON.filter( ( data ) => {
        if( data.book_id === id ){
            for( let field in dataBody ){
                data[field] = dataBody[field];
            }
            updatedData = data;
            fs.writeFileSync( path, JSON.stringify( dataJSON ));
        }
    });
    return updatedData;
}

removeBookDetailById = function( path, id ){
    let bookData = '';
    let dataBuffer = '';
    let dataJSON = '';
    let newDataJSON = [];
    
    dataBuffer = fs.readFileSync( path );
    dataJSON = JSON.parse( dataBuffer.toString() );
    dataJSON.filter( ( data ) => {        
        if( data.book_id === id ){
            bookData = data;
        }
        else{
            newDataJSON.push(data);
        }
    });
    fs.writeFileSync( path, JSON.stringify( newDataJSON ));
    return bookData;
}

module.exports = {
    getBookDetailById,
    getAllBookDetail,
    addBookDetail,
    updateBookDetailById,
    removeBookDetailById
};