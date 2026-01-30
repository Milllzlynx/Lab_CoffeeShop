const { Menu } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const menus = await Menu.findAll({ order: [['id', 'ASC']] })
      res.json({ message: 'เรียกข้อมูลเมนูสำเร็จ', data: menus })
    } catch (err) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: err.message })
    }
  },

  async show(req, res) {
    try {
      const id = parseInt(req.params.id, 10)
      const menu = await Menu.findByPk(id)

      if (!menu) return res.status(404).json({ message: 'ไม่พบเมนูนี้' })
      res.json({ message: 'เรียกดูเมนูสำเร็จ', data: menu })
    } catch (err) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: err.message })
    }
  },

  async create(req, res) {
    try {
      const menu = await Menu.create(req.body)
      res.status(201).json({ message: 'สร้างเมนูสำเร็จ', data: menu })
    } catch (err) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: err.message })
    }
  },

  async update(req, res) {
    try {
      const id = parseInt(req.params.id, 10)
      const menu = await Menu.findByPk(id)

      if (!menu) return res.status(404).json({ message: 'ไม่พบเมนูนี้' })

      await menu.update(req.body)
      res.json({ message: 'แก้ไขเมนูสำเร็จ', data: menu })
    } catch (err) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: err.message })
    }
  },

  async delete(req, res) {
    try {
      const id = parseInt(req.params.id, 10)
      const menu = await Menu.findByPk(id)

      if (!menu) return res.status(404).json({ message: 'ไม่พบเมนูนี้' })

      await menu.destroy()
      res.json({ message: 'ลบเมนูสำเร็จ' })
    } catch (err) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาด', error: err.message })
    }
  }
}
