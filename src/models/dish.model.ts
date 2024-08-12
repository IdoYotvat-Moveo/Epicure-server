import { Document, Schema, Types, model } from "mongoose"
import { EiconMeaning } from "../api/v1/enum/icon"

export interface IDish extends Document {
    title: string
    image?: string
    ingredients: string[]
    price: number
    restaurant: Types.ObjectId
    icons: EiconMeaning[] | null
    isActive: boolean
}

const dishSchema = new Schema<IDish>({
    title: { type: String, required: true },
    image: { type: String},
    ingredients: { type: [String], required: true },
    price: { type: Number, required: true },
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    icons: [{ type: String, enum: Object.values(EiconMeaning), default: null }],
    isActive: { type: Boolean, default: true }
})

const Dish = model<IDish>('Dish', dishSchema)
export { Dish }