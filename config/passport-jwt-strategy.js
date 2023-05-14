const passport = require('passport');
const UserDB = require('../models/user');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ComplexKey@1234!"
}

passport.use(new jwtStrategy(opts,async function(payload,done){
    let user =await UserDB.findById(payload._id);
    
    if(!user){
        return done(null,false);
    }

    return done(null,user);
}))

module.exports=passport;