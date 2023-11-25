import passport from 'passport';
import LocalStrategy from 'passport-local';
import userModel from '../../models/users.js';
import bcrypt from 'bcrypt'

export default function(passport) {
    
    passport.serializeUser((user,cb)=>{
        cb(null, user.id)
    })

    passport.deserializeUser((id,cb)=>{
        console.log('im called')
        userModel.findOne({_id:id},(err,data)=>cb(err,data))
    })
    
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

}