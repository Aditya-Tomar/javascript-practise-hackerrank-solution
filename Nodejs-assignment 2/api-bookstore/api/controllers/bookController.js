const bookServices = require('../services/book.services');

const getBookDetailById = async ( req, res) => {
    try{
        let bookDetail = await bookServices.getBookDetailById( req.params.id );
        res.send( bookDetail );
    } catch (e) {
        res.status(400).send( {
            error: 'unable to deliver request'
        });
    }
}

const getBookDetailByGenre = async (req,res) => {
    try{
        const bookDetail = await bookServices.getBookDetailByGenre( req.user, req.query.genre );
        res.send( bookDetail );
    } catch (e){
        res.status(400).send({
            error: 'Unable to deliver request'
        });
    }
}

const getBookDetailByAuthorName = async( req, res) => {
    try{
        const bookDetail = await bookServices.getBookDetailByAuthorName( req.user._id, req.query.authorName );
        res.send(bookDetail);
    } catch (e) {
        res.status(401).send("Details not present");
    }
}

const createBookDetail = async (req, res ) => {
    try{
        const bookDetail = bookServices.createBookDetail();
        res.send( bookDetail );
    } catch (e) {
        res.status(400).send("Unable to create book detail");
    }
}

module.exports = {
    getBookDetailById,
    getBookDetailByGenre,
    getBookDetailByAuthorName,
    createBookDetail,
    //deleteBookDetailByName
}