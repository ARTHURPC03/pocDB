/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express'

import db from '../database/connection'

export default class UsersControllers {
  async index(request: Request, response: Response) {
    const users = await db('users').select('*')

    return response.json(users)
  }

  async create(request: Request, response: Response) {
    const name = 'Teste'
    const address = 'BR, SP, São Paulo, Avenida Paulista'
    const cpf = '11122233344'

    try {
      await db('users').insert({
        name,
        address,
        cpf,
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        error: 'Unexpected error while creating new user',
      })
    }
  }
}
