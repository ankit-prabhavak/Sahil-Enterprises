import { Router } from "express";
import auth from "../middlewares/auth.js";
import { addToMyListController, deleteFromMyListController, getItemsFromMyListController } from "../controllers/myList.controller.js";

const myListRouter = Router();

myListRouter.post('/add', auth, addToMyListController);
myListRouter.delete('/:id', auth, deleteFromMyListController);
myListRouter.get('/', auth, getItemsFromMyListController);

export default myListRouter;