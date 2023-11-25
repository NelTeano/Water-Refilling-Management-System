import passport from 'passport';
import LocalStrategy from 'passport-local';
import userModel from '../../models/users.js';
import bcrypt from 'bcrypt'

export default function(passport) {

    passport.use(
        new LocalStrategy((username,password,done)=>{
            userModel.findOne({username:username})
                .then((data)=>{
                    if(!data){
                        return done(null, false)
                    }
                    //brypt.compare code goes here
                    return done(null, data)
                })
        })
    )

    passport.serializeUser((user,cb)=>{
        cb(null, user.id)
    })

    passport.deserializeUser((id,cb)=>{
        userModel.findOne({_id:id})
            .then((data) => cb(null,data))
            .catch((err) => cb(err, data))
    })
}