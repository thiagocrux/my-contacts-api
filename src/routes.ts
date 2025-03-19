import { Router } from 'express';

import ContactController from './app/controllers/ContactController';
import CategoryController from './app/controllers/CategoryController';

const router = Router();

router.get('/contacts', ContactController.index);
router.post('/contacts', ContactController.store);
router.get('/contacts/:id', ContactController.show);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.get('/categories/:id', CategoryController.show);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);

export default router;
