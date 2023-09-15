import mongoose from "mongoose"


export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI!,{
      dbName:"coursewear"
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};


