const e = require('express');
const fs = require('fs');

const readData = ( path = './public/books.json' ) => {
    let dataBuffer = '';
    try{
        dataBuffer = fs.readFileSync(path);
    } catch ( err ) {
        fs.writeFileSync(path, '[]');
        return '[]';
    }
    return dataBuffer.toString();
};

const writeData = ( path = './public/books.json' ) => {
    let dataBuffer = '[]';
    let dataJSON = '';

    dataBuffer = readData();
    dataJSON = JSON.parse(dataBuffer);
    return  dataJSON;
}

module.exports = {
    readData,
    writeData
}