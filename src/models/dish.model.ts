import { Document, Schema, Types, model } from "mongoose"

export interface IDish extends Document {
    title: string
    image: string
    ingredients: string[]
    price: number
    restaurant: Types.ObjectId
    icons: { type: string, img: string }[]
    isActive: boolean

}

const dishSchema = new Schema<IDish>({
    title: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: [String], required: true },
    price: { type: Number, required: true },
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    icons: [{
        type: { type: String, required: true },
        img: { type: String, required: true }
    }],
    isActive: { type: Boolean, default: true }
})

const Dish = model<IDish>('Dish', dishSchema)
export { Dish }