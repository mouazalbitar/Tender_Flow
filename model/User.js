const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  org_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
  role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  status: { 
    type: String, 
    enum: ['PENDING', 'ACTIVE', 'REJECTED', 'SUSPENDED', 'BANNED'], 
    default: 'PENDING' 
  },
  f_name: { type: String, required: true },
  l_name: { type: String, required: true },
  father_name: String,
  national_num: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  device_token: String,

  // بيانات خاصة بموظفي النظام (Null إذا لم يكن موظف نظام)
  system_employee_info: {
    employee_code: String,
    department: { type: String, enum: ['APPROVAL', 'AUDIT', 'SUPPORT', 'ADMIN'] },
    hired_at: Date
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);