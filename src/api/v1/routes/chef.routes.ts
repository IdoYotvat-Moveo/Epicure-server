import { Router } from "express";
import * as chefController from '../controllers/chef.controller'

const chefsRouter = Router()



chefsRouter.get('/', chefController.getChefs)
chefsRouter.get('/:id', chefController.getChefByid)
chefsRouter.post('/', chefController.addChef)
chefsRouter.put('/:id', chefController.updateChef)
chefsRouter.delete('/:id', chefController.removeChef)


export default chefsRouter