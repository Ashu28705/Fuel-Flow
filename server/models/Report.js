import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
  station: { type: mongoose.Schema.Types.ObjectId, ref: 'Station' },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  totalSales: Number,
  billImage: String,
});

export default mongoose.model('Report', ReportSchema);
