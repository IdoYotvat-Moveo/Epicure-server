import { Request, Response } from "express";
import { dishService } from "../services/dish.service";


export const getDishes = async (req: Request, res: Response) => {
    try {
        const dish = await dishService.getAllDishesFromRestaurant(req.params.id)
        res.send(dish)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const getDishById = async (req: Request, res: Response) => {
    try {
        const dish = await dishService.getDishById(req.params.Id)
        if (!dish) return res.status(404).send('Dish not found')
        res.send(dish)
    } catch (err) {
        res.status(500)
    }
}

export const addDish = async (req: Request, res: Response) => {
    try {
        const dish = await dishService.addDish(req.body)
        res.status(201).send(dish)
    } catch (err) {
        res.status(400).send(err)
    }
}

export const updateDish = async (req: Request, res: Response) => {
    try {
        const dish = await dishService.updateDish(req.params.id, req.body)
        if (!dish) return res.status(404).send('Dish not found')
        res.send(dish)
    } catch (err) {
        res.status(400).send(err)
    }
}

export const removeDish = async (req: Request, res: Response) => {
    try {
        const dish = await dishService.removeDish(req.params.id)
        if (!dish) return res.status(404).send('Dish not found')
        res.send(dish)
    } catch (err) {
        res.status(500).send(err)
    }
}