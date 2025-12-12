let drinks = [
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
  }
]

module.exports = {

  // GET /drinks
  index(req, res) {
    res.json({
      message: "เรียกข้อมูลเครื่องดื่มสำเร็จ",
      data: drinks
    })
  },

  // GET /drink/:id
  show(req, res) {
    const id = parseInt(req.params.id)
    const drink = drinks.find(d => d.id === id)

    if (!drink) {
      return res.status(404).json({ message: "ไม่พบเมนูนี้" })
    }

    res.json({
      message: "เรียกดูเมนูสำเร็จ",
      data: drink
    })
  },

  // POST /drink
  create(req, res) {
    const newDrink = req.body
    newDrink.id = drinks.length > 0 ? drinks[drinks.length - 1].id + 1 : 1

    drinks.push(newDrink)

    res.json({
      message: "เพิ่มเมนูสำเร็จ",
      data: newDrink
    })
  },

  // PUT /drink/:id
  update(req, res) {
    const id = parseInt(req.params.id)
    const index = drinks.findIndex(d => d.id === id)

    if (index === -1) {
      return res.status(404).json({ message: "ไม่พบเมนูนี้" })
    }

    drinks[index] = { ...drinks[index], ...req.body }

    res.json({
      message: "แก้ไขเมนูสำเร็จ",
      data: drinks[index]
    })
  },

  // DELETE /drink/:id
  delete(req, res) {
    const id = parseInt(req.params.id)
    const index = drinks.findIndex(d => d.id === id)

    if (index === -1) {
      return res.status(404).json({ message: "ไม่พบเมนูนี้" })
    }

    const deleted = drinks.splice(index, 1)

    res.json({
      message: "ลบเมนูสำเร็จ",
      data: deleted[0]
    })
  }
}
