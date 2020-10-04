import { Client } from 'elasticsearch'
import path from 'path'

class ElasticSearch {

  private static client: Client

  private constructor () {}

  public static getClient (): Client {
    if (!this.client) {
      this.client = new Client({
        log: {
          type: 'file',
          level: 'trace',
          path: path.resolve(__dirname, '..', 'elasticsearch.log')
        }
      })
    }
    return this.client
  }
}

export default ElasticSearch.getClient()
