import mongoose from "mongoose";
// 'mongodb+srv://admin:admin@food-delivery.tze6w.mongodb.net/food-delivery?retryWrites=true&w=majority'
const connectDatabase = async () => {

  try {
    const conn = await mongoose.connect('mongodb+srv://admin:admin@foodies.hplmw.mongodb.net/?retryWrites=true&w=majority&appName=foodies', {});

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
