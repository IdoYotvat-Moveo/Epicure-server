import { Request, Response } from 'express'
import { userService } from '../services/user.service'

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers()
        res.send(users)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const addUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.addUser(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

