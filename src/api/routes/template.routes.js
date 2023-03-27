import { Router } from 'express';
import { templateController } from '../controllers/template/index.js';
import { templateMiddleware } from '../middlewares/index.js';

const router = Router();

router.post('/', templateMiddleware, templateController);


export default router