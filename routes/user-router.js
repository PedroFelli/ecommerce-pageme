import express from 'express';
import controller from '../controllers/user-controller';
import auth from '../middlewares/authentication';


const router = express.Router();
const _ctrl = new controller();

router.post('/register', _ctrl.post);
router.post('/authenticate', _ctrl.authenticate);

router.get('/', auth, _ctrl.get);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;
