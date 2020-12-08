const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const auth = async function( req, res, next){
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisismypoc');

        const user = await userModel.findOne({ _id: decoded.id, 'tokens.token': token });
        req.user = user;
        req.token = token;

        if( !user ){
            return res.status(401).send('Unable to deliver request');
        }
        //res.send( user );
    } catch (e) {
        return res.status(401).send('Err: Please authenticate');
    }
    next();
}

module.exports = auth;