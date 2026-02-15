import { Router } from 'express'
import auth from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
import { createProduct, getAllProducts, uploadProductImages } from '../controllers/product.controller.js';

const productRouter = Router();
productRouter.post('/uploadProductImages', auth, upload.array('images'), uploadProductImages);
productRouter.post('/create', auth, createProduct);
productRouter.get('/getAllProducts', getAllProducts);

export default productRouter;
