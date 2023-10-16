const supertest = require('supertest');
// app is supposed to point to the app.js file
const app = require('/app');

describe('Testing POSTS/shots endpoint', async () => {
    it('respond with valid HTTP status code and description and message', async function (done) {
        // Make POST Request
        const response = await supertest(app).post('/shots').send({
            title: 'How to write a shot',
            body: "Access the Edpresso tutorial"
        });

        // Compare response with expectations
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
        expect(response.body.message).toBe('Shot Saved Successfully.');
    });
});