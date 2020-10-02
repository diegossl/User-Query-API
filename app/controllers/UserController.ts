import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import DataService from '../services/DataService'
import User from '../models/User'

export default {
  async index (request: Request, response: Response) {
    try {
      const users = await DataService.getUserData()
      return response.status(200).send({ users })
    } catch (error) {
      return response.status(500).send({ error: 'Internal server error' })
    }
  },

  async save (request: Request, response: Response) {
    try {
      const userData = request.body
      const userRepository = getConnection().getRepository(User)
      const user = userRepository.create(userData)
      const results = await userRepository.save(user)
      return response.status(200).send({ results })
    } catch (error) {
      return response.status(500).send({ error: 'Internal server error' })
    }
  }
}