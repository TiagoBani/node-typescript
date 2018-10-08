import * as supertest from 'supertest'
import app from './App'

describe('App', () => {
  it('welcome', () =>
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
  )
  it('competitors', () =>
  supertest(app)
  .get('/api/competitors')
  .expect('Content-Type', /json/)
  .expect(200)
  )
  it('competitions', () =>
  supertest(app)
  .get('/api/competitions')
  .expect('Content-Type', /json/)
  .expect(200)
  )
  it('tournaments', () =>
    supertest(app)
      .get('/api/tournaments')
      .expect('Content-Type', /json/)
      .expect(200)
  )
})
