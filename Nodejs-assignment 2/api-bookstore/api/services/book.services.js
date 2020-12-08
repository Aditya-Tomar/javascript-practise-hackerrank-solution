const userModel = require("../models/user");
const bookModel = require("../models/book");

getBookDetailById = async ( id ) => {
    const user = await userModel.findById( id );
    if( user ){
        await user.populate('bookDetail').execPopulate();
        return user.bookDetail;
    }
    return { output : 'Details not present' };
} 

getBookDetailByGenre = async ( userId, bookGenre ) => {

    const user = await userModel.findOne( { _id : userId._id } );
    await user.populate('bookDetail').execPopulate();
    user.bookDetail = user.bookDetail.filter( (book) => {
        return book.genre === bookGenre;
    });
    if( user.bookDetail.length === 0){
    }
    else{
        return user.bookDetail;
    }
}

getBookDetailByAuthorName = async ( userId, authorName = undefined ) => {
    const user = await userModel.findOne({ _id: userId });
    //await user.populate('bookDetail').execPopulate();
    console.log(user);
    await user.populate({
        path: 'bookDetail',
        match: authorName ? { author_name : authorName } : {}
    }).execPopulate();
    // user.bookDetail = user.bookDetail.filter( ( book ) => {
    //     return book.author_name === req.query.authorName;
    // });
    return user.bookDetail;
}

createBookDetail = async ( userId ) => {
    const bookDetail = new bookModel({ 
        ...req.body,
        owner: userId._id
    });
    await bookDetail.save();
    return bookDetail;
}

module.exports = {
    getBookDetailById,
    getBookDetailByGenre,
    getBookDetailByAuthorName,
    createBookDetail,
}