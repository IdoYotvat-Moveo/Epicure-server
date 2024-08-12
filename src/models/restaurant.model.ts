import mongoose, { Schema, Document, Types } from 'mongoose'

export interface IRestaurant extends Document {
  name: string
  chef?: Types.ObjectId
  image: string
  rating: number
  dishes: Types.ObjectId[]
  signatureDish?: Types.ObjectId
  isPopular?: boolean
}

const restaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  chef: { type: Schema.Types.ObjectId, ref: 'Chef'},
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  signatureDish: { type: Schema.Types.ObjectId, ref: 'Dish' },
  isPopular: { type: Boolean, default: false }
})

const Restaurant = mongoose.model<IRestaurant>('Restaurant', restaurantSchema)
export { Restaurant }
