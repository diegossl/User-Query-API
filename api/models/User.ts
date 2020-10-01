import { Table, Column, Model } from 'sequelize-typescript'
 
@Table
class User extends Model<User> {

  @Column
  name!: string
 
}

export default User