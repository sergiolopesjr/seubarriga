const request = require('supertest');
const app = require('../main/app');

test('Listar usuários', () => request(app)
    .get('/users')
    .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('name', 'John Doe');
        expect(res.body[0]).toHaveProperty('mail', 'john@mail.com');
    }));

test('Inserir usuário', () => request(app)
    .post('/users')
    .send({ name: 'Walter Mitty', mail: 'walter@mail.com' })
    .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Walter Mitty');
        expect(res.body.mail).toBe('walter@mail.com');
    }));
