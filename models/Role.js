const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  role_name: {
    type: String,
    required: true,
    enum: [
      'PUB_ADMIN', 'PUB_MANAGER', 'PUB_EMPLOYEE', 
      'BID_ADMIN', 'BID_MANAGER', 'BID_EMPLOYEE', 
      'SUPER_ADMIN', 'COMPANY_APPROVER', 'SUPPORT'
    ]
  },
  role_name_ar: {
    type: String,
    required: true,
    enum: [
      'مدير ناشر', 'مدير مناقصات', 'موظف ناشرة', 
      'مدير منفذة', 'مدير عروض', 'موظف منفذ', 
      'سوبر أدمن', 'موظف قبول', 'دعم فني'
    ]
  },
  description: {
    type: String,
    trim: true
  },
  permissions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Permission'
  }]
}, { timestamps: true });

const Role = mongoose.model('Role', roleSchema);
module.exports = {Role};