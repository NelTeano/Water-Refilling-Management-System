export const EnsureAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); // Proceed to the next middleware or route handler
    } else {
        res.status(401).json({ message: 'Unauthorized' }); // or redirect to login
    }
};
