const request = require('supertest');
const testData = require('../db/data/test-data/index');
const seed = require('../db/seeds/seed');
const db = require('../db/connection');
const app = require('../app.js');


beforeEach(() => seed(testData))
afterAll(() => db.end())

describe('/api/topics', () => {
  test('should give a status of 200', async () => {
    const { body } = await request(app).get('/api/topics').expect(200);
    expect(Array.isArray(body.topics)).toBe(true);
    body.topics.forEach((topic) => {
    expect(topic).toHaveProperty('slug')
    expect(topic).toHaveProperty('description')
})
  });
  test('should return a 404 status for invalid routes', async () => {
    const { body } = await request(app).get('/api/invalid-route').expect(404);
    expect(body.message).toBe('route is invalid');
  });
});
