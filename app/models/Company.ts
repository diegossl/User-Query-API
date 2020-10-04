import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import User from './User'

@Entity({ name: 'companies' })
export class Company {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  catchPhrase!: string

  @Column()
  bs!: string

  @OneToMany(type => User, user => user.company)
  user!: number
}

export default Company
