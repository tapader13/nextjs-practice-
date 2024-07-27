import mongoose from 'mongoose';

let isConnected = false;

export const connectDb = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected:', db.connection.host);
    isConnected = true;
  } catch (error) {
    console.error(error.message);
  }
};
