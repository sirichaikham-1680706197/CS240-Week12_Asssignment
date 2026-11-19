# Week 12 Homework - Product Cart: React Router + Zustand

ต่อยอดจาก Week 11 โดยคงข้อมูลสินค้า 16 รายการ รูปภาพสินค้า และรูปแบบ Product Card เดิม

## วิธีเปิดโปรเจกต์
1. ติดตั้ง Node.js
2. เปิด Terminal ในโฟลเดอร์โปรเจกต์
3. ติดตั้ง Library ด้วย `npm install`
4. เปิดเว็บด้วย `npm run dev`
5. ตรวจสอบ TypeScript และ Build ด้วย `npm run build`
6. ทดลอง Build ในเครื่องด้วย `npm run preview`

## ฟังก์ชันตาม Assignment Week 12
- React Router: Home, Cart, About, Product Detail และ 404
- MainLayout ใช้ Navbar และ Outlet ร่วมกันทุกหน้า
- Navbar ใช้ NavLink แสดง Active Page และจำนวนรายการใน Cart
- Zustand Store จัดการ cart และ action ทั้งหมด
- persist Middleware บันทึก cart ลง localStorage ด้วย key `cart-storage`
- เพิ่มสินค้าเดิมซ้ำแล้วเพิ่ม amount ไม่สร้างแถวใหม่
- เปลี่ยนจำนวนสินค้า (ขั้นต่ำ 1), ลบสินค้า และ Checkout
- Product Detail ใช้ Dynamic Route `/product/:id`
- ไม่พบสินค้าแสดงข้อความและลิงก์กลับหน้าแรก
- หน้า 404 แสดง Page Not Found และลิงก์กลับหน้าแรก

## Deploy
โปรเจกต์เตรียม Rewrite ไว้ให้แล้ว 2 รูปแบบ:
- Vercel: `vercel.json` อยู่ที่ root
- Netlify: `public/_redirects` จะถูกคัดลอกไป `dist/` ตอน Build

เลือกใช้ Hosting ตามต้องการ แล้ว Deploy โฟลเดอร์ `dist` หรือเชื่อม GitHub ตามคำแนะนำใน Assignment

## ข้อมูลนักศึกษา
- ชื่อ: นายสิริชัย ขำสุขเลิศ
- รหัสนักศึกษา: 1680706197
- Section: 227D
