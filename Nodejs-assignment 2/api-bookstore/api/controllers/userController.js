const userServices = require('../services/user.services');

const createUser = async (req, res) => {

    try{    
        const userCredential = await userServices.createUser( req.body );
        res.status(201).send( userCredential );
    } catch (e) {
        res.status(400).send('Unable to create account');
    }
};

const userLogin = async (req, res) => {

    if( !req.body.email || !req.body.password){
        return res.status(400).send('Empty Fields');
    }
    try{
        let result = await userServices.userLogin( req.body.email, req.body.password );
        res.send(result);
    } catch (e) {
        res.status(400).send({ 
            error: 'Unable to deliver request'
        });
    }
}

const userLogout = async (req, res) => {
    try{
        let user = await userServices.userLogout( req.user, req.token );
        res.send(user);
    } catch (e) {
        res.status(400).send('Unable to Logout');
    }
}

const userLogoutAll = async (req, res) =>{
   try{
    const user = await userServices.userLogoutAll( req.user );
    res.send( user );
   } catch (e) {
       res.staus(400).send({
            error: 'Unable to Logout'
        });
   }
};

module.exports = {
    createUser,
    userLogin,
    userLogout,
    userLogoutAll
}