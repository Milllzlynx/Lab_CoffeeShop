// server/src/controllers/DrinkController.js
const { Drink } = require("../models")

module.exports = {
  // GET /drinks
  async index(req, res) {
    try {
      const drinks = await Drink.findAll({ order: [["id", "ASC"]] })
      res.json({ message: "เรียกข้อมูลเครื่องดื่มสำเร็จ", data: drinks })
    } catch (err) {
      res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err.message })
    }
  },

  // GET /drink/:id
  async show(req, res) {
    try {
      const id = parseInt(req.params.id, 10)
      const drink = await Drink.findByPk(id)

      if (!drink) return res.status(404).json({ message: "ไม่พบเมนูนี้" })
      res.json({ message: "เรียกดูเมนูสำเร็จ", data: drink })
    } catch (err) {
      res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err.message })
    }
  },

  // POST /drink
  async create(req, res) {
    try {
      // ✅ ถ้าส่งมาเป็นหลายรายการ (Array)
      if (Array.isArray(req.body)) {
        const created = await Drink.bulkCreate(req.body, { validate: true })
        return res.json({ message: "เพิ่มเมนูหลายรายการสำเร็จ", data: created })
      }

      // ✅ ถ้าส่งมาเป็นรายการเดียว (Object)
      const created = await Drink.create(req.body)
      return res.json({ message: "เพิ่มเมนูสำเร็จ", data: created })
    } catch (err) {
      return res.status(400).json({ message: "เพิ่มเมนูไม่สำเร็จ", error: err.message })
    }
  },

  // PUT /drink/:id
  async update(req, res) {
    try {
      const id = parseInt(req.params.id, 10)
      const drink = await Drink.findByPk(id)

      if (!drink) return res.status(404).json({ message: "ไม่พบเมนูนี้" })

      await drink.update(req.body)
      res.json({ message: "แก้ไขเมนูสำเร็จ", data: drink })
    } catch (err) {
      res.status(400).json({ message: "แก้ไขไม่สำเร็จ", error: err.message })
    }
  },

  // DELETE /drink/:id
  async delete(req, res) {
    try {
      const id = parseInt(req.params.id, 10)
      const drink = await Drink.findByPk(id)

      if (!drink) return res.status(404).json({ message: "ไม่พบเมนูนี้" })

      await drink.destroy()
      res.json({ message: "ลบเมนูสำเร็จ", data: drink })
    } catch (err) {
      res.status(500).json({ message: "ลบไม่สำเร็จ", error: err.message })
    }
  }
}
