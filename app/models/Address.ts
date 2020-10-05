import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import User from './User'

@Entity({ name: 'adresses' })
export class Address {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  street!: string

  @Column()
  suite!: string

  @Column()
  city!: string

  @Column()
  zipcode!: string

  @Column()
  lat!: number

  @Column()
  lng!: number

  @OneToMany(type => User, user => user.address)
  user!: number
}

export default Address
