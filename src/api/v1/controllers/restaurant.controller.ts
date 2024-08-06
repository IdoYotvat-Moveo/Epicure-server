import { Request, Response } from "express"
import { restaurantService } from "../services/restaurant.service"


export const getRestaurants = async (req: Request, res: Response) => {
    try {
        const restaurant = await restaurantService.getAllRestaurants()
        res.send(restaurant)
    } catch (err) {
        res.status(400).send(err)
    }
}

export const getPopularRestaurants = async (req: Request, res: Response) => {
    try {
        const popularRestaurant = await restaurantService.getPopularRestaurants()
        res.send(popularRestaurant)
    } catch (err) {
        res.status(400).send(err)
    }
}

export const getResaurantById = async (req: Request, res: Response) => {
    try {
        const restaurant = await restaurantService.getRestaurantbyId(req.params.id)
        if (!restaurant) return res.status(404).send('Restaurant not found')
        res.send(restaurant)
    } catch (err) {
        res.status(400)
    }
}

export const addRestaurant = async (req: Request, res: Response) => {
    try {
        const restaurant = await restaurantService.addRestaurant(req.body)
        res.status(201).send(restaurant)
    } catch (err) {
        res.status(400).send(err)
    }
}

export const updateRestaurant = async (req: Request, res: Response) => {
    try {
        const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body)
        if (!restaurant) return res.status(404).send('Restaurant not found')
        res.send(restaurant)
    } catch (err) {
        res.status(400).send(err)
    }
}

export const removeRestaurant = async (req: Request, res: Response) => {
    try {
        const restaurant = await restaurantService.removeRestaurant(req.params.id)
        if (!restaurant) return res.status(404).send('Restaurant not found')
        res.send(restaurant)
    } catch (err) {
        res.status(400).send(err)
    }
}