const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    customer_id: { type: Schema.Types.ObjectId, ref: 'customers' },
    shop_id: { type: Schema.Types.ObjectId, ref: 'shops' },
    medicine_id: { type: Schema.Types.ObjectId, ref: 'medicines' },
    prescription_url: { type: String },
    booking_amount: { type: String },
    time_range: { type: Number },
    expired: { type: Boolean },
    deadline: { type: String },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;
