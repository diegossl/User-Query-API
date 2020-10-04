import { Request, Response } from 'express'
import { getConnection, Repository } from 'typeorm'
import DataCollectionService from '../services/DataCollectionService'
import User from '../models/User'
import Address from '../models/Address'
import Phone from '../models/Phone'
import Company from '../models/Company'
import IUser from '../interfaces/IUser'
import log from '../../config/elasticsearch'

export default {
  async index (request: Request, response: Response): Promise<Response> {
    try {
      const users: IUser[] = await DataCollectionService.getUserData()
      // log.info({ body: 'Success', method: 'POST' })
      return response.status(200).send({ users })
    } catch (error) {
      return response.status(500).send({ error: 'Internal server error' })
    }
  },

  async store (request: Request, response: Response): Promise<Response> {
    try {
      const users: IUser[] = await DataCollectionService.getUserData()

      const userRepository: Repository<User> = getConnection().getRepository(User)
      const addressRepository: Repository<Address> = getConnection().getRepository(Address)
      const phoneRepository: Repository<Phone> = getConnection().getRepository(Phone)
      const companyRepository: Repository<Company> = getConnection().getRepository(Company)

      users.forEach(async (user: IUser) => {
        const suite = user.address.suite.split(' ')
        if (suite[0] === 'Suite') {
          const currentAddress = addressRepository.create({
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            lat: user.address.geo.lat,
            lng: user.address.geo.lng
          })

          const currentCompany = companyRepository.create({
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs,
            user: user.id
          })

          const address = await addressRepository.save(currentAddress)
          const company = await companyRepository.save(currentCompany)

          const currentUser = userRepository.create({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            website: user.website,
            address: address.id,
            company: company.id
          })

          const currentPhone = phoneRepository.create({
            number: user.phone,
            user: user.id
          })

          await userRepository.save(currentUser)
          await phoneRepository.save(currentPhone)
        }
      })
      return response.status(200).send({ success: 'Successfully registered users' })
    } catch (error) {
      return response.status(500).send({ error: 'Internal server error' })
    }
  }
}
