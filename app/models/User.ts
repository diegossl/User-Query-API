import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  username!: string

  @Column()
  email!: string

  @Column()
  website!: string
}

export default User
