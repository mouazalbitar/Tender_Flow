const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  org_type_id: {
    type: Number,
    required: true
  },
  role_name: {
    type: String,
    required: true,
    enum: [
      'PUB_ADMIN', 'PUB_MANAGER', 'PUB_EMPLOYEE', 
      'BID_ADMIN', 'BID_MANAGER', 'BID_EMPLOYEE', 
      'SUPER_ADMIN', 'COMPANY_APPROVER', 'AUDITOR', 'SUPPORT'
    ]
  },
  role_name_ar: {
    type: String,
    required: true,
    enum: [
      'مدير ناشر', 'مدير مناقصات', 'موظف ناشرة', 
      'مدير منفذة', 'مدير عروض', 'موظف منفذ', 
      'سوبر أدمن', 'موظف قبول', 'مدقق', 'دعم فني'
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

module.exports = mongoose.model('Role', roleSchema);