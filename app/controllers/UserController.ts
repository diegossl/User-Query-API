import { Request, Response } from 'express'
import { getConnection, Repository } from 'typeorm'
import DataCollectionService from '../services/DataCollectionService'
import User from '../models/User'
import Address from '../models/Address'
import Phone from '../models/Phone'
import Company from '../models/Company'
import IUser from '../interfaces/IUser'

export default {
  async index (request: Request, response: Response): Promise<Response> {
    try {
      const users: IUser[] = await DataCollectionService.getUserData()
      return response.status(200).send({ users })
    } catch (error) {
      return response.status(500).send({ error: 'Internal server error' })
    }
  },

  async store (request: Request, response: Response): Promise<Response> {
    try {
      const users: IUser[] = await DataCollectionService.getUserData()

      const filteredUsers: IUser[] = users.filter((user: IUser) => {
        const suite = user.address.suite.split(' ')
        if (suite[0] === 'Suite') {
          return user
        }
      })

      const userRepository: Repository<User> = getConnection().getRepository(User)
      // const addressRepository: Repository<Address> = getConnection().getRepository(Address)
      // const phoneRepository: Repository<Phone> = getConnection().getRepository(Phone)
      // const companyRepository: Repository<Company> = getConnection().getRepository(Company)

      const user = userRepository.create(data)
      // const address = userRepository.create(data)
      // const phone = userRepository.create(data)
      // const company = userRepository.create(data)

      const results = await userRepository.save(user)

      return response.status(200).send({ results })
    } catch (error) {
      return response.status(500).send({ error: 'Internal server error' })
    }
  }
}
