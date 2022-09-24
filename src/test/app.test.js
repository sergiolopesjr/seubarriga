const request = require('supertest');

const app = require('../main/app');

test('Deve responder na raiz', () => request(app)
    .get('/')
    .then(response => {
        expect(response.status).toBe(200);
    }));
