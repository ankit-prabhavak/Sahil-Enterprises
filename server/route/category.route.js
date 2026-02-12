import { Router } from 'express'
import auth from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
import { createCategory, getCategory, uploadCategoryImages } from '../controllers/category.controller.js';

const categoryRouter = Router();

categoryRouter.post('/uploadCategoryImages',auth, upload.array('images'), uploadCategoryImages);
categoryRouter.post('/createCategory',auth, createCategory);
categoryRouter.get('/', auth, getCategory)


export default categoryRouter;