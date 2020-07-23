require('dotenv').config()
const jwt = require('jsonwebtoken');
module.exports = {
  isAuth: (req,res,next) => {
    try {
      if(req.headers.authorization) {
        const token = req.headers.authorization.split('Bearer ')[1];
        var decoded = jwt.verify(token, process.env.APP_SECRET);
        req.user = decoded;
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
