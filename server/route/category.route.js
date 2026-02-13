import { Router } from 'express'
import auth from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
import { createCategory, deleteCategory, getCategories, getCategoriesCount, getCategory, getSubCategoriesCount, removeImageFromCloudinary, updateCategory, uploadCategoryImages } from '../controllers/category.controller.js';

const categoryRouter = Router();

categoryRouter.post('/uploadCategoryImages',auth, upload.array('images'), uploadCategoryImages);
categoryRouter.post('/createCategory',auth, createCategory);
categoryRouter.get('/', getCategories)
categoryRouter.get('/get/count', getCategoriesCount)
categoryRouter.get('/get/count/subCat', getSubCategoriesCount)
categoryRouter.get('/:id', getCategory)
categoryRouter.delete('/deleteImages/:id', auth, removeImageFromCloudinary);
categoryRouter.delete('/:id',auth, deleteCategory);
categoryRouter.put('/:id', auth, updateCategory);


export default categoryRouter;