'use strict'

// Faço importações com use (apenas para funcionalidades do adonis)
// mas posso fazer com require
const User = use('App/Models/User')

class UserController {
  // Ctx = é o contexto dessa requisição. Ele possui resquest e response
  async store({ request }) {
    // Posso também pegar com request.all, mas isso permitiria a entrada de quaiser dados
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
