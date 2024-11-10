import mongoose from 'mongoose';
let Schema = mongoose.Schema;
const CategorySchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  icon: {
    type: String,
    default: 'default'  
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Category' 
  },
  label: {
    type: String,
    required: [true, 'Please provide a label for this account.'],
    maxlength: [25, 'Label cannot be more than 25 characters.']
  }
}, { timestamps: true });
export default mongoose.model.Category || mongoose.model('Category', CategorySchema);

