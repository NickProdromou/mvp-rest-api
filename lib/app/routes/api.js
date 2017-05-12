import express from 'express';
import { keys, singleKey, programs, apiIndex } from '../controllers';
import setupOptions from '../middlewares/setupOptions';
import routeNamer from '../middlewares/routeNamer';

const router = express.Router();

router.use(routeNamer);
router.get('/', apiIndex);
router.get('/keys/:program([A-Z]{2,10}||[0-9]{1,3})', setupOptions, keys);
router.get('/key/:id([0-9]{1,4})', setupOptions, singleKey);
router.get('/programs/:program', setupOptions, programs);

export default router;
