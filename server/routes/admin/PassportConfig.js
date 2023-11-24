import passport from 'passport';
import LocalStrategy from 'passport-local';
import userModel from '../../models/users.js';

// Passport Configuration
const passportInit = () => {
    passport.serializeUser(function(user, cb) {
        cb(null, {id: user._id, username: user.username});
    });
    
    passport.deserializeUser(function(user, cb) {
        cb(null, user);
    });
    
    passport.use(new LocalStrategy(async function verify(username, password, cb) {
        try {
            let user = await userModel.findOne({ username: username });
            
            if (!user) {
                return cb(null, false, { message: 'Incorrect username or password.' });
            }
    
            // You might verify the password here using bcrypt.compare()
            // For example:
            // const isValidPassword = await bcrypt.compare(password, user.password);
            // if (!isValidPassword) {
            //     return cb(null, false, { message: 'Incorrect password.' });
            // }
    
            return cb(null, user);
        } catch (err) {
            return cb(err);
        }
    }));
}

passportInit(); // Invoke passportInit to set up Passport

export default passport;
