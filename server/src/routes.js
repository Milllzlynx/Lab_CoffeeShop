const MenuController = require('./controllers/MenuController')

module.exports = (app) => {
    app.get('/menus', MenuController.index)
    app.get('/menu/:id', MenuController.show)
    app.post('/menu', MenuController.create)
    app.put('/menu/:id', MenuController.update)
    app.delete('/menu/:id', MenuController.delete)
}
