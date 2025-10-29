import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const favoriteSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true, },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
});

const favoriteRestaurantSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  thumb: { type: String, required: true },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },
});

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    },
    thumb: {
      type: String,
      default: "https://e7.pngegg.com/pngimages/504/867/png-clipart-thumb-signal-man-graphy-thumbs-up-hand-photography-thumbnail.png",

    },
    role: {
      type: String,
      required: true,
      default: "guest",
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    favoriteProducts: [favoriteSchema],
    favoriteRestaurants: [favoriteRestaurantSchema],
  },
  {
    timestamps: true,
  }
);

// login
userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// Register
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
