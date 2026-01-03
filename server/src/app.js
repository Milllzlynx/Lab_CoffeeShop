const express = require("express")
const cors = require("cors")

const { sequelize } = require("./models")
const config = require("./config/config")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// เรียกใช้ Routes ที่เราแยกไฟล์ไว้
require("./routes")(app)

// health check
app.get("/status", (req, res) => {
  res.send("Hello CoffeeShop API!")
})

app.get("/hello/:name", (req, res) => {
  console.log("hello - " + req.params.name)
  res.send("say hello with " + req.params.name)
})

// Sync DB แล้วค่อยเปิด server
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(config.port, () => {
      console.log("Server running on port " + config.port)
    })
  })
  .catch((err) => {
    console.error("DB sync failed:", err)
  })

module.exports = app
