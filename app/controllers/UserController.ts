import { Request, Response } from 'express'
import DataService from '../services/DataService'

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
    
  }
}