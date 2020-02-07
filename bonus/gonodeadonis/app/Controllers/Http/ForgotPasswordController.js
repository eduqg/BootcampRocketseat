'use strict'

const moment = require('moment')
const User = use('App/Models/User')
const crypto = require('crypto')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      // all, only, input. Input para apenas um campo
      const email = request.input('email')
      // findByOrFail = Se não conseguiu encontrar email, retornar erro. Cai no catch.
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      // Parametro 1 [] = qual template de email
      // Parametro 2 {} = quais parametros quero enviar
      // Parametro 3 message = recebo a mensagem em si, para quem vou enviar
      await Mail.send(
        ['emails.forgot_password', 'emails.forgot_password-text'],
        { email, token: user.token, link: `${request.input('redirect_url')}?token=${user.token}` },
        message => {
          message
            .to(user.email)
            .from('goadonisteam@goadonis.com', 'Time GoAdonis')
            .subject('Recuperação de senha')
        }
      )
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Algo não deu certo, esse e-mail existe?' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()

      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({ error: { message: 'O token de recuperação está expirado' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()

      console.log(user)
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Algo não deu certo ao atualizar usuário' } })
    }
  }
}

module.exports = ForgotPasswordController
