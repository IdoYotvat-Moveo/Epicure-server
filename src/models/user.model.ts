import mongoose, { Schema, Document, Types } from 'mongoose'
import { ERole } from '../api/v1/enum/role'

export interface IUser extends Document {
    name: string
    surename: string
    mail: string
    password: string
    role: ERole
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    surename: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ERole, default: null }
})

const User = mongoose.model<IUser>('User', userSchema)
export {User}