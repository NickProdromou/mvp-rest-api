import express from 'express';
const router = express.Router();

router.get('/', ( req, res) => {
    req.logger.info('Index Route');
    res.status(200).send('ok');
});

export default router;

