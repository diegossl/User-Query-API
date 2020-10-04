import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import User from './User'

@Entity({ name: 'phones' })
export class Phone {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  number!: string

  @ManyToOne(type => User, user => user.phone)
  user!: number
}

export default Phone
