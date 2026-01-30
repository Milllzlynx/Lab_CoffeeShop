import Api from './Api'

export default {
  index() {
    return Api().get('menus')
  },
  show(menuId) {
    return Api().get('menu/' + menuId)
  },
  post(menu) {
    return Api().post('menu', menu)
  },
  put(menuId, menu) {
    return Api().put('menu/' + menuId, menu)
  },
  delete(menuId) {
    return Api().delete('menu/' + menuId)
  }
}
