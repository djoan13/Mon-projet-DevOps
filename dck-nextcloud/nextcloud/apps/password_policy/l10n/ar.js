OC.L10N.register(
    "password_policy",
    {
    "Password is expired, please use forgot password method to reset" : "انتهت صلاحية كلمة المرور. يرجى إعادة تعيينها من خلال \"نسيت كلمة المرور\" .",
    "Password must not have been used recently before." : "يجب ألاّ تكون كلمة المرور قد أُستُخدمت مؤخراً.",
    "Password is among the 1,000,000 most common ones. Please make it unique." : "كلمة المرور هذه ضمن الـ 1,000,000 كلمة الأكثر شيوعاً. رجاءً، إجعلها فريدة ومختلفة.",
    "Password is present in compromised password list. Please choose a different password." : "كلمة المرور هذه ضمن قائمة كلمات المرور المُتسرّبة. رجاءً، إختر كلمةً مخلتفةً",
    "Password needs to be at least %s characters long." : "يجب ألّا يقل طول كلمة المرور عن %s حروف.",
    "Password needs to contain at least one numeric character." : "يجب أن تحوي كلمة المرور خانة عددية و احدة على الأقل.",
    "Password needs to contain at least one special character." : "يجب أن تحوي كلمة المرور حرفاً خاصاً واحداً على الأقل.",
    "Password needs to contain at least one lower and one upper case character." : "يحب أن تحوي كلمة المرور حرفاً صغيراً واحداً و حرفاً كبيراً واحداً على الأقل.",
    "Password policy" : "سياسة كلمات المرور",
    "Allows admins to configure a password policy" : "تمكين المديرين من تهيئة سياسة كلمات المرور",
    "Allow admin to define certain pre-conditions for password, e.g. enforce a minimum length" : "تمكين المديرين من تعريف شروط مسبقة معينة لكلمة المرور. مثلاً: فرض حد أدنى من الحروف للكلمة",
    "General password policies" : "سياسات كلمات المرور العامة",
    "Add policy set" : "أضِف مجموعة سياسات",
    "Login policies" : "سياسات تسجيل الدخول",
    "Password history size" : "حجم تاريخ كلمات المرور",
    "Number of passwords to keep (securely hashed) to prevent users from reusing previously used passwords." : "عدد كلمات المرور التي يتوجب الاحتفاظ بها (مشفرة بالاختزال) لمنع المستخدمين من إعادة استخدام كلمات المرور المستخدمة سابقًا.",
    "Maximum login attempts" : "أقصى عدد محاولات",
    "Number of login attempts before the user account will be disabled until manual action is taken. (0 for no limit)" : "عدد محاولات تسجيل الدخول قبل تعطيل حساب المستخدم حتى يتم اتخاذ الإجراء اليدوي. (0 بلا حدود)",
    "Please note, this option is meant to protect attacked accounts. Disabled accounts have to be re-enabled manually by administration. Attackers that try to guess passwords of accounts will have their IP address blocked by the bruteforce protection independent from this setting." : "يرجى ملاحظة أن هذا الخيار يهدف إلى حماية الحسابات التي تعرضت للهجوم. يجب إعادة تمكين الحسابات المعطلة يدويّاً بواسطة الإدارة. المهاجمون الذين يحاولون تخمين كلمات مرور الحسابات سيتم حظر عنوان IP الخاص بهم بواسطة إجراءات الحماية من هجمات القوة الكاسحة بشكل مستقل عن هذا الإعداد.",
    "Number of days until user password expires" : "عدد الأيام المتبقية حتى انتهاء صلاحية كلمة سر المستخدم",
    "Password expiration" : "إنتهاء صلاحية كلمة المرور",
    "Warning: enabling password expiration is nowadays considered a security risk by several security agencies." : "تحذير: يعتبر تمكين انتهاء صلاحية كلمة المرور في الوقت الحاضر بمثابة خطر أمني من قبل العديد من وكالات الأمن.",
    "Remove policy" : "إزالة السياسية",
    "Minimum password length" : "الحد الأدنى لطول كلمة المرور",
    "Forbid common passwords" : "إمنع الكلمات الشائعة",
    "Enforce upper and lower case characters" : "إفرض استعمال الحروف الصغيرة و الكبيرة",
    "Enforce numeric characters" : "إفرض استعمال الخانات العددية",
    "Enforce special characters" : "إفرض استعمال الحروف الخاصة",
    "Check password against the list of breached passwords from haveibeenpwned.com" : "تحقّق من كلمة المرور المُعطاة في قائمة الكلمات المُتسرّبة على الموقع haveibeenpwned.com",
    "This check creates a hash of the password and sends the first 5 characters of this hash to the haveibeenpwned.com API to retrieve a list of all hashes that start with those. Then it checks on the Nextcloud instance if the password hash is in the result set." : "يقوم هذا بتوليد مستخلص hash من كلمة المرور ثم يرسل الـ 15 حرفاً الأولى منه إلى API الموقع haveibeenpwned.com؛ و ذلك لاسترجاع قائمة بكل المستخلصات في الموقع التي تبدأ بنفس بدايات المستخلص الحالي. بعدها يقوم بمقارنة المستخلص الحالي كاملاً بالمستخلصات المسترجعة من الموقع الخارجي.",
    "Account password policies" : "سياسات كلمة مرور الحساب",
    "Share password policies" : "سياسات كلمة مرور المُشارَكة",
    "Unknown error" : "خطأ غير مُحدّد",
    "Minimal length has to be a non negative number" : "الحد الأدنى للطول يجب إلاً يكون أقل من صفر.",
    "History size has to be a non negative number" : "حجم السجل التاريخي يجب ألاّ يكون أقل من صفر",
    "Expiration days have to be a non negative number" : "عدد الأيام المتبقية حتى انتهاء الصلاحية يجب ألاّ يكون أقل من صفر",
    "Maximum login attempts have to be a non negative number" : "أقصى عدد لمحاولات الدخول يجب ألاّ يكون أقل من صفر",
    "Settings saved" : "تم حفظ الإعدادات",
    "Error while saving settings" : "خطأ أثناء حفظ الإعدادات",
    "User password history" : "استعمل السجل التاريخي لكلمات المرور السابقة",
    "Please note, that this option is meant to protect attacked accounts. Disabled accounts have to be re-enabled manually by administration. Attackers that try to guess passwords of accounts will have their IP address blocked by the bruteforce protection independent from this setting." : "يرجى ملاحظة أن هذا الخيار يهدف إلى حماية الحسابات التي تعرضت للهجوم. يجب إعادة تمكين الحسابات المعطلة يدويًا بواسطة الإدارة. المهاجمون الذين يحاولون تخمين كلمات مرور الحسابات سيتم حظر عنوان IP الخاص بهم بواسطة إجراءات الحماية من هجمات القوة الكاسحة بشكل مستقل عن هذا الإعداد."
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
