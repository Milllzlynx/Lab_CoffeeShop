// server/src/models/Menu.js
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      name: { type: DataTypes.STRING(100), allowNull: false },
      type: { type: DataTypes.STRING(50), allowNull: false },
      origin: { type: DataTypes.STRING(100), allowNull: true },
      price: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: true }
    },
    {
      tableName: "menus", // ✅ เปลี่ยนเป็น menus
      timestamps: true
    }
  )
  return Menu
}
