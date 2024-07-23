import { Request, Response } from 'express'
import { chefService } from '../services/chef.service'


export const getChefs = async (req: Request, res: Response) => {
    try {
        const chefs = await chefService.getAllChefs()
        res.send(chefs)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const getChefByid = async (req: Request, res: Response) => {
    try {
        const chef = await chefService.getChefByid(req.params.id)
        if (!chef) return res.status(404).send('Chef not found')
        res.send(chef)
    } catch (err) {
        res.status(500).send(err)
    }
}
export const getChefOfTheWeek = async (req: Request, res: Response) => {
    try {
        const chef = await chefService.getChefOfTheWeek()
        if (!chef) return res.status(404).send('Chef of the week not found')
        res.send(chef)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const addChef = async (req: Request, res: Response) => {
    try {
        const chef = await chefService.addChef(req.body)
        res.status(201).send(chef)
    } catch (err) {
        res.status(400).send(err)
    }
}

export const updateChef = async (req: Request, res: Response) => {
    try {
        const chef = await chefService.updateChef(req.params.id, req.body)
        if (!chef) return res.status(404).send('chef not found')
        res.send(chef)
    } catch (err) {
        res.status(400).send(err)
    }
}

export const removeChef = async (req: Request, res: Response) => {
    try {
        const chef = await chefService.removeChef(req.params.id)
        if (!chef) return res.status(404).send('chef not found')
            res.send(chef)
    } catch (err) {
        res.status(500).send(err)
    }
}