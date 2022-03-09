const jwt = require('jsonwebtoken');

const User = require('../models/User');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json('Login required');
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.JWT_SEC);
    const { id, email } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(500).json('Invalid user');
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (err) {
    res.status(500).json('Expired or invalid token');
  }
};
