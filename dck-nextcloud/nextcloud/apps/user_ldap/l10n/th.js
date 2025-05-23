OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "ไม่สามารถล้างการแมป",
    "Failed to delete the server configuration" : "ลบการกำหนดค่าเซิร์ฟเวอร์ล้มเหลว",
    "No action specified" : "ไม่ได้ระบุการดำเนินการ",
    "No configuration specified" : "ไม่ได้ระบุการกำหนดค่า",
    "No data specified" : "ไม่ได้ระบุข้อมูล",
    "Action does not exist" : "ไม่มีการดำเนินการนี้อยู่",
    "Very weak password" : "รหัสผ่านคาดเดาง่ายมาก",
    "Weak password" : "รหัสผ่านคาดเดาง่าย",
    "So-so password" : "รหัสผ่านระดับพอใช้",
    "Good password" : "รหัสผ่านระดับดี",
    "Strong password" : "รหัสผ่านคาดเดายาก",
    "The Base DN appears to be wrong" : "Base DN ดูเหมือนจะไม่ถูกต้อง",
    "Testing configuration…" : "กำลังทดสอบการตั้งค่า...",
    "Configuration incorrect" : "การกำหนดค่าไม่ถูกต้อง",
    "Configuration incomplete" : "การกำหนดค่าไม่ครบถ้วน",
    "Configuration OK" : "การกำหนดค่าใช้งานได้",
    "Select groups" : "เลือกกลุ่ม",
    "Select object classes" : "เลือกคลาสวัตถุ",
    "Please check the credentials, they seem to be wrong." : "กรุณาตรวจสอบข้อมูลประจำตัว ดูเหมือนจะใส่ไม่ถูกต้อง",
    "Please specify the port, it could not be auto-detected." : "กรุณาระบุพอร์ต เนื่องจากไม่สามารถตรวจพบโดยอัตโนมัติ",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "ไม่สามารถตรวจพบ Base DN โดยอัตโนมัติ กรุณาแก้ไขข้อมูลประจำตัว โฮสต์ และพอร์ต",
    "Could not detect Base DN, please enter it manually." : "ไม่สามารถตรวจสอบ Base DN โปรดระบุด้วยตนเอง",
    "{nthServer}. Server" : "เซิร์ฟเวอร์ {nthServer}",
    "No object found in the given Base DN. Please revise." : "ไม่พบวัตถุใน Base DN ที่ให้ไว้ กรุณาแก้ไข",
    "More than 1,000 directory entries available." : "ไดเรกทอรีมีอยู่มากกว่า 1,000 รายการ",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "เกิดข้อผิดพลาด กรุณาตรวจสอบ Base DN รวมถึงการตั้งค่าการเชื่อมต่อและข้อมูลประจำตัว",
    "Do you really want to delete the current Server Configuration?" : "คุณแน่ใจหรือไม่ว่าต้องการลบการกำหนดค่าเซิร์ฟเวอร์ปัจจุบัน?",
    "Confirm Deletion" : "ยืนยันการลบทิ้ง",
    "Mappings cleared successfully!" : "ล้างการแมปเรียบร้อยแล้ว",
    "Error while clearing the mappings." : "เกิดข้อผิดพลาดขณะล้างการแมป",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "การผูกนิรนามไม่ได้รับอนุญาต กรุณาระบุ DN ของผู้ใช้และรหัสผ่าน",
    "LDAP Operations error. Anonymous bind might not be allowed." : "ข้อผิดพลาดในการดำเนินการ LDAP การผูกนิรนามอาจจะไม่ได้รับอนุญาต ",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "การบันทึกล้มเหลว โปรดตรวจสอบว่าฐานข้อมูลอยู่ใน Operation โหลดหน้าใหม่ก่อนดำเนินการต่อ",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "การสลับโหมดจะเปิดใช้คิวรี LDAP อัตโนมัติ ซึ่งอาจใช้เวลาสักครู่ขึ้นอยู่กับขนาด LDAP ของคุณ คุณยังต้องการสลับโหมดหรือไม่?",
    "Mode switch" : "สลับโหมด",
    "Select attributes" : "เลือกแอททริบิวต์",
    "User found and settings verified." : "พบผู้ใช้และการตั้งค่าได้รับการตรวจสอบแล้ว",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "ตัวกรองการค้นหาไม่ถูกต้อง อาจเป็นเพราะปัญหาไวยากรณ์ เช่น จำนวนวงเล็บเปิดและปิดที่ไม่สม่ำเสมอ กรุณาแก้ไข",
    "Please provide a login name to test against" : "โปรดระบุชื่อที่ใช้ในการเข้าสู่ระบบเพื่อทดสอบ",
    "Could not find the desired feature" : "ไม่พบคุณลักษณะที่ต้องการ",
    "Invalid Host" : "โฮสต์ไม่ถูกต้อง",
    "Test Configuration" : "ทดสอบการตั้งค่า",
    "Help" : "ช่วยเหลือ",
    "Groups meeting these criteria are available in %s:" : "กลุ่มที่เข้าเกณฑ์เหล่านี้มีอยู่ใน %s:",
    "Only these object classes:" : "เฉพาะคลาสของวัตถุเหล่านี้:",
    "Only from these groups:" : "เฉพาะจากกลุ่มเหล่านี้:",
    "Search groups" : "ค้นหากลุ่ม",
    "Available groups" : "กลุ่มที่สามารถใช้ได้",
    "Selected groups" : "กลุ่มที่เลือก",
    "Edit LDAP Query" : "แก้ไขคิวรี LDAP",
    "LDAP Filter:" : "ตัวกรอง LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "ตัวกรองระบุว่ากลุ่ม LDAP ใดบ้างจะสามารถเข้าถึงเซิร์ฟเวอร์ %s",
    "When logging in, %s will find the user based on the following attributes:" : "เมื่อเข้าสู่ระบบ %s จะค้นหาผู้ใช้ตามแอททริบิวต์ดังต่อไปนี้:",
    "Other Attributes:" : "คุณลักษณะอื่น ๆ:",
    "Test Loginname" : "ทดสอบชื่อที่ใช้เข้าสู่ระบบ",
    "Verify settings" : "ตรวจสอบการตั้งค่า",
    "%s. Server:" : "%s เซิร์ฟเวอร์:",
    "Copy current configuration into new directory binding" : "คัดลอกการตั้งค่าปัจจุบันลงในการผูกไดเรกทอรีใหม่",
    "Delete the current configuration" : "ลบการกำหนดค่าปัจจุบัน",
    "Host" : "โฮสต์",
    "Port" : "พอร์ต",
    "Detect Port" : "ตรวจจับพอร์ต",
    "User DN" : "DN ของผู้ใช้งาน",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN ของผู้ใช้ไคลเอ็นต์ที่ต้องการทำการผูก เช่น uid=agent,dc=example,dc=com สำหรับการเข้าถึงโดยบุคคลนิรนาม ให้เว้นว่างช่อง DN และรหัสผ่าน",
    "Password" : "รหัสผ่าน",
    "For anonymous access, leave DN and Password empty." : "สำหรับการเข้าถึงนิรนาม ให้เว้นช่อง DN และรหัสผ่านไว้",
    "One Base DN per line" : "หนึ่ง Base DN ต่อหนึ่งบรรทัด",
    "You can specify Base DN for users and groups in the Advanced tab" : "คุณสามารถระบุ Base DN หลักสำหรับผู้ใช้งานและกลุ่มต่าง ๆ ได้ในแท็บขั้นสูง",
    "Detect Base DN" : "ตรวจจับ Base DN",
    "Test Base DN" : "ทดสอบ Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "หลีกเลี่ยงคำขอ LDAP อัตโนมัติ ดีกว่าสำหรับการตั้งค่าที่มากกว่า แต่ต้องพอมีความรู้เรื่อง LDAP",
    "Manually enter LDAP filters (recommended for large directories)" : "ป้อนตัวกรอง LDAP ด้วยตนเอง (แนะนำสำหรับไดเรกทอรีขนาดใหญ่)",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "คลาสวัตถุที่พบมากที่สุดสำหรับผู้ใช้มี organizationalPerson, person, user และ inetOrgPerson หากคุณไม่แน่ใจว่าต้องเลือกคลาสวัตถุตัวไหน โปรดปรึกษาผู้ดูแลระบบไดเรกทอรีของคุณ",
    "The filter specifies which LDAP users shall have access to the %s instance." : "ตัวกรองระบุว่าผู้ใช้ LDAP ใดบ้างจะสามารถเข้าถึงเซิร์ฟเวอร์ %s",
    "Verify settings and count users" : "ตรวจสอบการตั้งค่าและนับจำนวนผู้ใช้",
    "Saving" : "กำลังบันทึก",
    "Back" : "ย้อนกลับ",
    "Continue" : "ดำเนินการต่อ",
    "An internal error occurred." : "เกิดข้อผิดพลาดภายใน",
    "Please try again or contact your administrator." : "โปรดลองอีกครั้งหรือติดต่อผู้ดูแลระบบของคุณ",
    "Current password" : "รหัสผ่านปัจจุบัน",
    "New password" : "รหัสผ่านใหม่",
    "Wrong password." : "รหัสผ่านไม่ถูกต้อง",
    "Cancel" : "ยกเลิก",
    "Server" : "เซิร์ฟเวอร์",
    "Users" : "ผู้ใช้งาน",
    "Login Attributes" : "แอททริบิวต์การเข้าสู่ระบบ",
    "Groups" : "กลุ่ม",
    "Expert" : "ผู้เชี่ยวชาญ",
    "Advanced" : "ขั้นสูง",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>คำเตือน:</b> โมดูล PHP LDAP ยังไม่ได้ถูกติดตั้ง แบ็กเอนด์จะไม่สามารถทำงานได้ กรุณาติดต่อให้ผู้ดูแลระบบของคุณทำการติดตั้ง",
    "Connection Settings" : "ตั้งค่าการเชื่อมต่อ",
    "Configuration Active" : "การกำหนดค่าใช้งานอยู่",
    "When unchecked, this configuration will be skipped." : "เมื่อไม่เลือก การกำหนดค่านี้จะถูกข้ามไป",
    "Backup (Replica) Host" : "โฮสต์สำรอง (จำลอง) ",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "ให้โฮสต์สำรอง (ไม่จำเป็น) ซึ่งต้องเป็นแบบจำลองของเซิร์ฟเวอร์ LDAP/AD หลัก",
    "Backup (Replica) Port" : "พอร์ตสำรอง (จำลอง) ",
    "Disable Main Server" : "ปิดใช้งานเซิร์ฟเวอร์หลัก",
    "Only connect to the replica server." : "เชื่อมต่อกับเซิร์ฟเวอร์แบบจำลองเท่านั้น",
    "Turn off SSL certificate validation." : "ปิดใช้งานการตรวจสอบใบรับรอง SSL",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "ไม่แนะนำ ควรใช้สำหรับการทดสอบเท่านั้น! ถ้าการเชื่อมต่อใช้งานได้เฉพาะกับตัวเลือกนี้ นำเข้าใบรับรอง SSL ของเซิร์ฟเวอร์ LDAP ในเซิร์ฟเวอร์ %s ของคุณ ",
    "Cache Time-To-Live" : "เวลาที่ดำรงอยู่ของแคช",
    "in seconds. A change empties the cache." : "ในวินาที การเปลี่ยนค่านี้จะล้างข้อมูลในแคช",
    "Directory Settings" : "ตั้งค่าไดเร็กทอรี",
    "User Display Name Field" : "ช่องชื่อที่แสดงของผู้ใช้",
    "The LDAP attribute to use to generate the user's display name." : "แอททริบิวต์ LDAP เพื่อใช้ในการสร้างชื่อที่แสดงของผู้ใช้",
    "2nd User Display Name Field" : "ช่องชื่อที่แสดงของผู้ใช้ที่ 2",
    "Base User Tree" : "รายการผู้ใช้งานหลักแบบ Tree",
    "One User Base DN per line" : "หนึ่ง Base DN ผู้ใช้ ต่อหนึ่งบรรทัด",
    "User Search Attributes" : "คุณลักษณะการค้นหาชื่อผู้ใช้",
    "Optional; one attribute per line" : "ตัวเลือกเพิ่มเติม; หนึ่งคุณลักษณะต่อบรรทัด",
    "Group Display Name Field" : "ช่องชื่อที่แสดงของกลุ่ม",
    "The LDAP attribute to use to generate the groups's display name." : "แอททริบิวต์ LDAP เพื่อใช้ในการสร้างชื่อที่ปรากฏของกลุ่ม",
    "Base Group Tree" : "รายการกลุ่มหลักแบบ Tree",
    "One Group Base DN per line" : "หนึ่ง Base DN กลุ่ม ต่อหนึ่งบรรทัด",
    "Group Search Attributes" : "แอททริบิวต์การค้นหากลุ่ม",
    "Group-Member association" : "ความสัมพันธ์ของกลุ่ม-สมาชิก",
    "Nested Groups" : "กลุ่มที่ซ้อนกัน",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "เมื่อเปิดสวิตซ์ กลุ่มที่มีกลุ่มอยู่ด้านในจะได้รับการสนับสนุน (ใช้ได้เฉพาะถ้าแอททริบิวต์สมาชิกกลุ่มมี DN)",
    "Paging chunksize" : "ขนาดกลุ่มเพจ",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "ขนาดกลุ่มที่ใช้สำหรับการค้นหา LDAP แบบเพจ ที่อาจส่งคืนผลลัพธ์ขนาดใหญ่ เช่น การนับผู้ใช้หรือกลุ่ม (ตั้งค่าเป็น 0 เพื่อปิดการใช้งานการค้นหา LDAP แบบเพจในสถานการณ์เหล่านั้น)",
    "Special Attributes" : "แอททริบิวต์พิเศษ",
    "Quota Field" : "ช่องโควต้า",
    "Quota Default" : "โควต้าเริ่มต้น",
    "Email Field" : "ช่องอีเมล",
    "User Home Folder Naming Rule" : "กฎการตั้งชื่อโฮมโฟลเดอร์ของผู้ใช้",
    "Internal Username" : "ชื่อผู้ใช้ภายใน",
    "Internal Username Attribute:" : "แอททริบิวต์ชื่อผู้ใช้ภายใน:",
    "Override UUID detection" : "ยกเว้นการตรวจสอบ UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "โดยค่าเริ่มต้น แอททริบิวต์ UUID จะถูกตรวจพบโดยอัตโนมัติ แอททริบิวต์ UUID จะใช้เพื่อระบุผู้ใช้และกลุ่มของ LDAP โดยไม่ต้องสงสัย นอกจากนี้ หากไม่ได้ระบุไว้ข้างต้น ชื่อผู้ใช้ภายในจะถูกสร้างขึ้นโดยใช้ UUID เป็นฐาน คุณสามารถแทนที่การตั้งค่าและส่งแอททริบิวต์ที่คุณเลือกได้ คุณต้องให้แน่ใจว่าแอททริบิวต์ที่คุณเลือกสามารถดึงได้สำหรับทั้งผู้ใช้และกลุ่มและต้องไม่ซ้ำกัน ปล่อยว่างไว้สำหรับรูปแบบการทำงานเริ่มต้น การเปลี่ยนแปลงจะมีผลเฉพาะผู้ใช้ LDAP และกลุ่มที่เพิ่งแมปใหม่ (เพิ่งเพิ่ม)",
    "UUID Attribute for Users:" : "แอททริบิวต์ UUID สำหรับผู้ใช้:",
    "UUID Attribute for Groups:" : "แอททริบิวต์ UUID สำหรับกลุ่ม:",
    "Username-LDAP User Mapping" : "การแมปชื่อผู้ใช้-ผู้ใช้ LDAP",
    "Clear Username-LDAP User Mapping" : "ล้างการแมปชื่อผู้ใช้-ผู้ใช้ LDAP",
    "Clear Groupname-LDAP Group Mapping" : "ล้างการแมปกลุ่ม Groupname-LDAP"
},
"nplurals=1; plural=0;");
