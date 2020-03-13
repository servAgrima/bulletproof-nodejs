import mongoose from 'mongoose'
const source_ip = new mongoose.Schema(
  {
    ip: {
      type: String,
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
