// server/src/models/Drink.js
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define(
    "Drink",
    {
      name: { type: DataTypes.STRING(100), allowNull: false },
      type: { type: DataTypes.STRING(50), allowNull: false }, // Hot / Cold
      origin: { type: DataTypes.STRING(100), allowNull: true },
      price: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: true }
    },
    {
      tableName: "drinks",
      timestamps: true // createdAt / updatedAt
    }
  )

  return Drink
}
