import { message } from 'antd';
import jwt from 'jsonwebtoken';

export const authenticate = async (req, res, next) => {
    const authorizationHeader = req.header('Authorization');
  if (!authorizationHeader) {
    return res.status(401).send({ message: 'Missing Authorization header' });
  }
  const token = authorizationHeader.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ message: 'Invalid token format' });
  }  

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.id = decoded.userid;
    console.log("decoded", req.id);

    next();

  } catch (error) {
    res.status(401).send({ message: 'Invalid token', error });
  }
};