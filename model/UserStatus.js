const mongoose = require('mongoose');

const userStatusSchema = new mongoose.Schema({
  status_name: {
    type: String,
    required: true,
    unique: true,
    enum: ['PENDING', 'ACTIVE', 'REJECTED', 'SUSPENDED', 'BANNED']
  },
  status_name_ar: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('UserStatus', userStatusSchema);