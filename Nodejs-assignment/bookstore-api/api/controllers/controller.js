const services = require('../services/service');

const path = './public/books.json';

module.exports = {
    getBookDetailById : function(req, res) {
        try{
            let data = services.getBookDetailById( path, req.params.id);
            res.send(data);    
        } catch (err) {
            return res.status(400).send();
        }
    },

    getAllBookDetail : function ( req, res ) {
        try{
            let data = services.getAllBookDetail( path );
            res.send( JSON.parse(data.toString()) );
        } catch (e) {
            return res.status(400).send({ error: 'Unable to deliver request' });
        }
    },

    addBookDetail : function( req, res ) {
        try{
            let dataBody = services.addBookDetail( path, req.body );
            res.send( dataBody );    
        } catch (e) {
            res.status(400).send('Unable to add file');
        }
    },

    updateBookDetailById : function( req, res ) {
        try{
            let updatedData = services.updateBookDetailById( path, req.params.id, req.body );
            res.send(updatedData);
        } catch ( err ){
            res.status(400).send({ 
                error : 'Unable to deliver data'
            });
        }
    },

    removeBookDetailById : function( req, res ) {
        try{
            let bookData = services.removeBookDetailById( path, req.params.id );
            res.send(bookData);
        } catch (e) {
            res.status(400).send( { error: 'unable to deliver request'} );
        }
    }
}