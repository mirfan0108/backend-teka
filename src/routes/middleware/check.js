module.exports = {
    isExist: (req, res, next) => {
      try {
        if(req.params.userId) {          
            next();
        } else {
            res.status(404).json({
                message: 'Header is Invalid'
            });
        }
      } catch(err) {
            res.status(401).json({
            message: 'Token is Invalid'
            });
      }
    }
  };