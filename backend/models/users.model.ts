import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    steamId: {
      type: String,
      unique: true,
      sparse: true,
    },
    gameLibrary: {
      type: [String],
      default: [],
    },
    preferences: {
      genres: {
        genres: {
          types: [String],
          default: [],
        },
        playtime: {
          type: Number,
          default: 0,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
