import { IUser } from '../interfaces/IUser'
import mongoose from 'mongoose'

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      sparse: true,
      lowercase: true,
      index: true
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
      minlength: 7,
      lowercase: true,
      index: true
    },
    status: {
      type: String,
      enum: ['active', 'pending', 'rejected', 'baned', 'spam'],
      default: 'active',
      required: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: true
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        },
        source: {
          type: String
        }
      }
    ],
    avatar: {
      type: String
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
      }
    ],
    subscribers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
      }
    ],
    password: String,
    salt: String
  },
  { timestamps: true }
)

export default mongoose.model<IUser & mongoose.Document>('User', User)
