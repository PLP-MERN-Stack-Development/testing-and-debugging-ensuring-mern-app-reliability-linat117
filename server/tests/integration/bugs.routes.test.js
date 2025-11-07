const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongod;
const app = require('../../src/app');
const Bug = require('../../src/models/bug.model');

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});

afterEach(async () => {
  await Bug.deleteMany();
});

describe('POST /api/bugs', () => {
  test('creates a bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'New bug', description: 'desc' })
      .expect(201);

    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toBe('New bug');
  });

  test('rejects invalid payload', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: '' })
      .expect(400);

    expect(res.body.message).toMatch(/Title is required/);
  });
});
