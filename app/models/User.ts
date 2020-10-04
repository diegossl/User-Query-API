import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm'
import Address from './Address'
import Company from './Company'
import Phone from './Phone'

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  username!: string

  @Column()
  email!: string

  @Column()
  website!: string

  @ManyToOne(type => Address, address => address.user)
  address!: number

  @ManyToOne(type => Company, company => company.user)
  company!: number

  @OneToMany(type => Phone, phone => phone.user)
  phone!: number
}

export default User
