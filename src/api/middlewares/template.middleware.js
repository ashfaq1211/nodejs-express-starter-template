import { errorHelper } from '../../utils/index.js';

export default async (req, res, next) => {
  try {
    // Write logic for middleware here.
    console.log('Middleware is working...')
    next();
  } catch (err) {
    return res.status(401).json(errorHelper('001', req, err.message));
  }
};