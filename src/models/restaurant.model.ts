import mongoose, { Schema, Document, Types } from 'mongoose'
import { IChef } from './chef.model'

export interface IRestaurant extends Document {
  name: string
  chef: Types.ObjectId | IChef
  image: string
  rating: number
  dishes: Types.ObjectId[]
}

const restaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  chef: { type: Schema.Types.ObjectId, ref: 'Chef', required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }]
})

const Restaurant = mongoose.model<IRestaurant>('Restaurant', restaurantSchema)
export { Restaurant }
