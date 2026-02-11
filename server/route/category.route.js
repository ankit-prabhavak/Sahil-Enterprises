import { Router } from 'express'
import auth from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
import { createCategory, uploadCategoryImages } from '../controllers/category.controller.js';

const categoryRouter = Router();

categoryRouter.post('/uploadCategoryImages',auth, upload.array('images'), uploadCategoryImages);
categoryRouter.post('/createCategory',auth, createCategory);


export default categoryRouter;