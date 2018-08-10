import express from 'express';
import ctrl from './viagens.ctrl';

const router = express.Router();

router
    .route('/viagens')
    .get(ctrl.getAll)
    .post(ctrl.create);
router
    .route('/viagens/:id')
    .delete(ctrl.remove)
    .put(ctrl.update);

router
    .route('/viagens/reduce/')
    .get(ctrl.mapReduce);

export default router;