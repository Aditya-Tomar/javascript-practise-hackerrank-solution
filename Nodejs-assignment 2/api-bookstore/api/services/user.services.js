const userModel = require('../models/user');
const bcrypt = require('bcrypt');

createUser = async ( body ) => {
    const user = new userModel( body );
    const token = await user.generateAuthToken();
    await  user.save();
    
    return { user, token };
}

userLogin = async ( email, password) => {
    const user = await userModel.findOne({ email : email});
    const isMatched = await bcrypt.compare( password, user.password );

    if( isMatched ){
        const token = await user.generateAuthToken();
        await user.save();
        return { user, token};
    }
    else{
        return { output : 'Unable to login' };    
    }
}

userLogout = async ( user, userToken ) => {
    user.tokens = user.tokens.filter( (token) => {
        return token.token !== userToken;
    });
    await user.save();
    return user;
}

userLogoutAll = async ( user ) => {
    user.tokens = [];
    await user.save();
    return user;
}


module.exports = {
    createUser,
    userLogin,
    userLogout,
    userLogoutAll
}