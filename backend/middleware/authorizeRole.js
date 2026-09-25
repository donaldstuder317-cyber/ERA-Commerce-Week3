function authorizeRole(Role){
    return function(req, res, next){
        if(req.user.role !== role){
            return res.status(403).json({messege: "Forbidden. Admins Only"});
        }
        next();
    };
}

module.exports = authorizeRole;