import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
      typeof: String,
      required: [true, "Please provide a name for this user."],
      maxlength: [100, "Name cannot be more than 100 characters."]
  },
  email: {
      typeof: String,
      unique: [true, "User with Email {VALUE} already exists"],
      required: [true, "Please provide an email for this user."],
      maxlength: [150, "Email cannot be more than 150 characters."],
      validate: {
          validator: value =>{
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
          },
          message: prop => `${prop} is not a valid email!`
      }
  },
  image: {
      typeof: String,
      required: [true, "Please provide an image for this user."]
  },
  emailVerified: {
      typeof: Boolean,
      default: false,
  }
});

export default mongoose.model.User || mongoose.model("User", UserSchema);