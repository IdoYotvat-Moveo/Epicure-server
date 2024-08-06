import { IUser, User } from "../../../models/user.model"
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import CryptoJS from 'crypto-js'


interface ILoginResponse {
    user: IUser
    token: string
}

const saltRounds = 10
const secretKey = process.env.JWT_SECRET || "SECRET-SECRET-KEY"
const cryptoSecretKey = process.env.CRYPTO_KEY || 'your-secret-key'


const getAllUsers = async () => {
    try {
        const users = await User.find()
        return users
    } catch (err) {
        console.log(' user service => error getting users')
        throw err
    }
}

const addUser = async (userData: Partial<IUser>) => {
    try {
        const isUserExist = await User.findOne({ mail: userData.mail })
        if (isUserExist) {
            throw new Error('user aleady exists!')
        }
        if (!userData.password) {
            throw new Error('Password is required');
        }
        const hashedPass = await bcrypt.hash(userData.password, saltRounds)
        userData.password = hashedPass
        const user = new User(userData)
        const saveduser = await user.save()
        const userObj = saveduser.toObject()
        delete userObj.__v
    } catch (err) {
        console.log('user service => error adding user')
        throw err
    }
}

const login = async (mail: string, encryptedPassword: string): Promise<ILoginResponse | null> => {
    try {
        const user = await User.findOne({ mail })
        if (!user) {
            console.error("User not found with email:", mail)
            return null
        }

        const bytes = CryptoJS.AES.decrypt(encryptedPassword, cryptoSecretKey);
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8)

        const isMatch = await bcrypt.compare(decryptedPassword, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, secretKey)
            return { user, token }
        } else {
            console.error("Password does not match for user:", mail)
            return null
        }
    } catch (error) {
        console.error("Error during login:", error)
        throw new Error("An unexpected error occurred during login")
    }
}

export const userService = {
    getAllUsers,
    addUser,
    login
}