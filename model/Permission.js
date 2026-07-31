const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  permission_code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  permission_name: {
    type: String,
    required: true
  },
  permission_name_ar: {
    type: String,
    required: true
  },
  module: {
    type: String,
    required: true,
    enum: ['TENDER', 'BID', 'USER', 'REPORT', 'SYSTEM']
  }
}, { timestamps: true });

module.exports = mongoose.model('Permission', permissionSchema);