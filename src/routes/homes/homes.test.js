import request from 'supertest';
import app from '../../app';
import { mongoConnect, mongoDisconnect } from '../../services/mongo';

describe('Homes routes', () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe('TEST GET /homes', () => {
    test('it should respond with 200', async () => {
      await request(app).get('/homes').expect('Contest-type', /json/).expect(200);
    });
  });
});
