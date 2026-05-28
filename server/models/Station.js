import mongoose from 'mongoose';

const StationSchema = new mongoose.Schema({
  name: String,
  location: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Station', StationSchema);
