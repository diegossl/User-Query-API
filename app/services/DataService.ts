import axios from 'axios'

export default {
  async getUserData () {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
  }
}