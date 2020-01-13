'use strict'

const User = use('App/Models/User')
const crypto = require('crypto')

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      // all, only, input. Input para apenas um campo
      const email = request.input('email')
      // findByOrFail = Se não conseguiu encontrar email, retornar erro. Cai no catch.
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Algo não deu certo, esse e-mail existe?' } })
    }
  }
}

module.exports = ForgotPasswordController
