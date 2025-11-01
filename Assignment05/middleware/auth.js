const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
  const authHeader = req.header('Authorization');

  if(!authHeader){
    return res.status(401).json({
      message: 'No token'
    })
  }
  const token = authHeader.split(' ')[1];
  if(!token){
    return res.status(401).json({
      message: 'invalid'
    })
  }
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    ref.user = {
      doctorId: decoded.doctorId
    };

    next();
  }catch(e){
    res.status(401).json({
      message: 'Token not valid'
    })
  }
};