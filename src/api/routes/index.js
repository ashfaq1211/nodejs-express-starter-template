
import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import { specs, swaggerConfig } from '../../config/index.js';
import templateRoute from './template.routes.js';
const router = Router();

const specDoc = swaggerJsdoc(swaggerConfig.options)

router.use(specs, serve);
router.get(specs, setup(specDoc, { explorer: true }));

router.use('/templateRoute', templateRoute);

export default router;