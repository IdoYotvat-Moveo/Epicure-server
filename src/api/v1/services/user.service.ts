import { IUser, User } from "../../../models/user.model"



const getAllUsers = async () => {
    try{
        const users = await User.find()
        return users
    } catch (err){
        console.log(' user service => error getting users')
        throw err
    }
    
}

const addUser = async (userData:Partial<IUser>)=>{
    try{
        const user = new User(userData)
        const saveduser = await user.save()
        const userObj = saveduser.toObject()
        delete userObj.__v
    } catch (err) {
        console.log('user service => error adding user')
        throw err
    }

}


export const userService = {
    getAllUsers,
    addUser
}