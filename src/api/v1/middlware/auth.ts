import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || "SECRET-SECRET-KEY"

interface DecodedToken {
    id: string
    name: string
    role: string
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    try {
        // Extract token
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(401).json({ error: 'Authorization header is missing' })
        }

        const token = authHeader.split(' ')[1]
        if (!token) {
            return res.status(401).json({ error: 'Token is missing' })
        }

        // Verify the token
        const decodedToken = jwt.verify(token, secretKey) as DecodedToken
        if (!decodedToken) {
            throw 'Problem with token'
        } else {
            next()
        }
    } catch (error) {
        res.status(401).json({
            error: (error instanceof Error) ? error.message : 'Invalid request!',
        })
    }
}

export default authMiddleware
