import { Router } from 'express'
import auth from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
import { createProduct, deleteProduct, getAllFeaturedProducts, getAllProducts, getAllProductsByCatId, getAllProductsByCatName, getAllProductsByPrice, getAllProductsByRating, getAllProductsBySubCatId, getAllProductsBySubCatName, getAllProductsByThirdSubCatId, getAllProductsByThirdSubCatName, getAllProductsCount, getProduct, updateProduct, uploadProductImages } from '../controllers/product.controller.js';

const productRouter = Router();
productRouter.post('/uploadProductImages', auth, upload.array('images'), uploadProductImages);
productRouter.post('/create', auth, createProduct);
productRouter.get('/getAllProducts', getAllProducts);
productRouter.get('/getAllProductsByCatId/:id', getAllProductsByCatId);
productRouter.get('/getAllProductsByCatName', getAllProductsByCatName);
productRouter.get('/getAllProductsBySubCatId/:id', getAllProductsBySubCatId);
productRouter.get('/getAllProductsBySubCatName', getAllProductsBySubCatName);
productRouter.get('/getAllProductsByThirdSubCatId/:id', getAllProductsByThirdSubCatId);
productRouter.get('/getAllProductsByThirdSubCatName', getAllProductsByThirdSubCatName);
productRouter.get('/getAllProductsByPrice/', getAllProductsByPrice);
productRouter.get('/getAllProductsByRating/', getAllProductsByRating);
productRouter.get('/getAllProductsCount/', getAllProductsCount);
productRouter.get('/getAllFeaturedProducts/', getAllFeaturedProducts);
productRouter.delete('/:id', auth, deleteProduct);
productRouter.get('/:id', getProduct);
// Yahan Par removeImageFromCloudinary Wala Part Illogical laga to nahi kiya hai
productRouter.put('/updateProduct/:id', auth, updateProduct);

export default productRouter;
