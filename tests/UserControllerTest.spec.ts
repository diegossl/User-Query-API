import request from 'supertest'
import app from '../app'

describe('Testing UserController routes', () => {

  it('It should response the GET method', async () => {
    const { status } = await request(app).get('/list')
    expect(status).toBe(200)
  })

  it('It should response the POST method', async () => {
    const { status } = await request(app).post('/register')
    expect(status).toBe(200)
  })

})
