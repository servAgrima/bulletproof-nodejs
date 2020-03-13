import { IDevice } from '../interfaces/IDevice'
import mongoose from 'mongoose'

const Device = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true
    },
    last_ip: {
      type: String
    },
    last_user_agent: {
      type: String
    },
    last_location: {
      type: { type: String, default: 'Point' },
      coordinates: [Number]
    },
    salt: String
  },
  { timestamps: true }
)

export default mongoose.model<IDevice & mongoose.Document>('Device', Device)
