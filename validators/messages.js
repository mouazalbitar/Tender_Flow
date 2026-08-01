const messages_en = {
    "string.base": "{#label} must be a string",
    "string.empty": "{#label} cannot be empty",
    "string.min": "{#label} must be at least {#limit} characters long",
    "string.max": "{#label} must not exceed {#limit} characters",
    "string.length": "{#label} must be exactly {#limit} characters long",
    "string.email": "{#label} must be a valid email address",
    "string.pattern.base": "{#label} contains an invalid format",
    "string.trim": "{#label} must not have leading or trailing whitespace",
    "number.base": "{#label} must be a number",
    "number.min": "{#label} must be at least {#limit}",
    "number.max": "{#label} must not exceed {#limit}",
    "number.integer": "{#label} must be an integer",
    
    "date.base": "{#label} must be a valid date",
    "date.format": "{#label} must be in YYYY-MM-DD format",
    
    "boolean.base": "{#label} must be true or false",
    
    "array.base": "{#label} must be an array",
    "array.min": "{#label} must contain at least {#limit} items",
    "array.max": "{#label} must not contain more than {#limit} items",
    
    "object.base": "{#label} must be an object",
    "object.unknown": "{#label} contains an unauthorized field",
    
    "any.required": "{#label} is required",
    "any.only": "{#label} must be one of the allowed values",
    "any.ref": "{#label} must match {#ref}"
};

const messages_ar = {
    "string.base": "{#label} يجب أن يكون نصاً",
    "string.empty": "{#label} لا يمكن أن يكون فارغاً",
    "string.min": "{#label} يجب ألا يقل عن {#limit} حرف",
    "string.max": "{#label} يجب ألا يتجاوز {#limit} حرف",
    "string.length": "{#label} يجب أن يكون طوله بالضبط {#limit} حرف",
    "string.email": "{#label} يجب أن يكون بريداً إلكترونياً صالحاً",
    "string.pattern.base": "{#label} يحتوي على تنسيق غير صالح",
    "string.trim": "{#label} يجب ألا يحتوي على مسافات أمامية أو خلفية",
    "number.base": "{#label} يجب أن يكون رقماً",
    "number.min": "{#label} يجب ألا يقل عن {#limit}",
    "number.max": "{#label} يجب ألا يتجاوز {#limit}",
    "number.integer": "{#label} يجب أن يكون عدداً صحيحاً",
    
    "date.base": "{#label} يجب أن يكون تاريخاً صالحاً",
    "date.format": "{#label} يجب أن يكون بالتنسيق YYYY-MM-DD",
    
    "boolean.base": "{#label} يجب أن يكون صح أو خطأ",
    
    "array.base": "{#label} يجب أن يكون قائمة",
    "array.min": "{#label} يجب أن تحتوي على {#limit} عنصر على الأقل",
    "array.max": "{#label} يجب ألا تحتوي على أكثر من {#limit} عنصر",
    
    "object.base": "{#label} يجب أن يكون كائن",
    "object.unknown": "{#label} يحتوي على حقل غير مسموح به",
    
    "any.required": "{#label} مطلوب",
    "any.only": "{#label} يجب أن يكون أحد القيم المسموح بها",
    "any.ref": "{#label} يجب أن يطابق {#ref}",
};

module.exports = {
    messages_en,
    messages_ar
};