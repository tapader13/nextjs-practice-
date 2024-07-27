import mongoose from 'mongoose';

interface IUser {
  username: string;
  email: string;
  password: string;
  role: string; // add role field for user roles like admin, user, etc.
  image: string;
  authProviderId: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: String,
      default: 'user', // default role is 'user'
    },
    image: {
      type: String,
    },
    authProviderId: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model('User', userSchema);

export default User;
