import mongoose from 'mongoose'
const location = new mongoose.Schema(
  {
    location: {
      type: { type: String, default: 'Point' },
      coordinates: [Number],
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    device: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'device'
    }
  },
  { timestamps: true }
)
