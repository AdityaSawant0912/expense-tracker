import mongoose from 'mongoose';
let Schema = mongoose.Schema;
const TagSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  label: {
    type: String,
    required: [true, 'Please provide a label for this account.'],
    maxlength: [25, 'Label cannot be more than 25 characters.']
  }
}, { timestamps: true });
export default mongoose.model.Tag || mongoose.model('Tag', TagSchema);

