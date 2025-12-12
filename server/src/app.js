// app.js — Node.js Coffee API
let express = require('express')
let bodyParser = require('body-parser')
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
 
// Coffee Menu Data
let menus = [
  {
    id: 1,
    name: "Espresso",
    type: "Hot",
    origin: "Italy",
    price: 65,
    description: "กาแฟช็อตเข้มข้น รสชาติจัดเต็ม เหมาะกับคนชอบคาเฟอีนสูง"
  },
  {
    id: 2,
    name: "Americano",
    type: "Hot",
    origin: "Brazil",
    price: 70,
    description: "เอสเปรสโซผสมน้ำร้อน รสนุ่มขึ้น ดื่มง่าย"
  },
  {
    id: 3,
    name: "Latte",
    type: "Hot",
    origin: "Colombia",
    price: 85,
    description: "เอสเปรสโซผสมนมร้อน หอมมัน นุ่มละมุน"
  },
  {
    id: 4,
    name: "Cappuccino",
    type: "Hot",
    origin: "Ethiopia",
    price: 90,
    description: "กาแฟนมหอมฟองนมเนียน ๆ รสชาติกลมกล่อม"
  },
  {
    id: 5,
    name: "Iced Caramel Macchiato",
    type: "Cold",
    origin: "Guatemala",
    price: 95,
    description: "กาแฟเย็นหวานหอมคาราเมล รสละมุนสดชื่น"
  }
]
 
// ROUTE ZONE
// Health Check
app.get('/status', function (req, res) {
  res.send('Hello My coffee!!!')
})
 
// GET all menus
app.get('/menus', function (req, res) {
  res.json({
    message: "เรียกข้อมูลเมนูทั้งหมดสำเร็จ",
    data: menus
  })
})
 
// GET menu by ID
app.get('/menu/:menuID', function (req, res) {
  const id = parseInt(req.params.menuID)
  const menu = menus.find(m => m.id === id)
 
  if (!menu) return res.status(404).json({ message: "ไม่พบเมนูนี้" })
 
  res.json({
    message: "เรียกข้อมูลเมนูสำเร็จ",
    data: menu
  })
})
 
// CREATE new menu
app.post('/menu', function (req, res) {
  const newMenu = req.body
  newMenu.id = menus.length > 0 ? menus[menus.length - 1].id + 1 : 1
 
  menus.push(newMenu)
 
  res.json({
    message: "เพิ่มเมนูใหม่สำเร็จ",
    data: newMenu
  })
})
 
// UPDATE menu
app.put('/menu/:menuID', function (req, res) {
  const id = parseInt(req.params.menuID)
  const index = menus.findIndex(m => m.id === id)
 
  if (index === -1) return res.status(404).json({ message: "ไม่พบเมนูนี้" })
 
  menus[index] = { ...menus[index], ...req.body }
 
  res.json({
    message: "แก้ไขเมนูสำเร็จ",
    data: menus[index]
  })
})
 
// DELETE menu
app.delete('/menu/:menuID', function (req, res) {
  const id = parseInt(req.params.menuID)
  const index = menus.findIndex(m => m.id === id)
 
  if (index === -1) return res.status(404).json({ message: "ไม่พบเมนูนี้" })
 
  const deleted = menus.splice(index, 1)
 
  res.json({
    message: "ลบเมนูสำเร็จ",
    data: deleted[0]
  })
})
 
 
// START SERVER
let port = 8081
app.listen(port, function () {
  console.log('server running on ' + port)
})