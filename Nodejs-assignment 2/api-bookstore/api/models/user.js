const validator = require('validator');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate( value ){
            if( !validator.isEmail(value)){
                throw new Error('Invalid Email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate( value ){
            if( value.includes('password') ){
                throw new Error('Password should not contain term password');
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.virtual('bookDetail', {
    ref: 'book',
    localField: '_id',
    foreignField: 'owner'
});

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
}

userSchema.methods.generateAuthToken = async function(req, res) {

    const token = jwt.sign({ id: this._id.toString() }, 'thisismypoc');
    this.tokens = this.tokens.concat( {token} );
    return token;
};


userSchema.pre( 'save', async function ( next ) {
    if( this.isModified('password') ){
        this.password = await bcrypt.hash( this.password, 8);
    }
    next();
});

const userModel = mongoose.model('user', userSchema );

module.exports = userModel;