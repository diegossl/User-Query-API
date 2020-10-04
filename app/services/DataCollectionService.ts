import axios from 'axios'
import IUser from '../interfaces/IUser'

export default {
  async getUserData (): Promise<IUser[]> {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    const userData: IUser[] = data
    return userData
  }
}
