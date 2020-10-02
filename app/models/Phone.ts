import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
 
@Entity({ name: 'phones' })
export class Phone {
  @PrimaryGeneratedColumn()
  id!: number
 
  @Column()
  number!: string
}

export default Phone