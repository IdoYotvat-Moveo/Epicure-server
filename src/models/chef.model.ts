import mongoose, { Schema, Document, Types } from 'mongoose'

export interface IChef extends Document {
  name: string
  bio: string
  image?: string
  restaurants?: Types.ObjectId[]
  isChefOfTheWeek: boolean
}

const chefSchema = new Schema<IChef>({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: true },
  restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  isChefOfTheWeek: { type: Boolean, required: true, default: false }
})

const Chef = mongoose.model<IChef>('Chef', chefSchema)
export { Chef }