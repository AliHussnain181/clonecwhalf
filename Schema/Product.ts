import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  theme: { type: String, required: true },
  size: { type: String, required: true },
  colour: { type: String, required: true },
  price: { type: Number, required: true },
  highlights: { type: String, required: true },
  description: { type: String },
  tags: { type: String, required: true },
  images: { type: String, required: true }
});


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;