import mongoose from "mongoose";
import app from '../app.js';
import request from 'supertest';



const { DB_HOST_TEST, PORT } = process.env;

describe("test sign in controller", () => {
    let server = null;
    beforeAll(async() => {
        await mongoose.connect(DB_HOST_TEST);
        server = app.listen(PORT);
    })

    afterAll(async () => {
        await mongoose.connection.close()
        server.close();
    })

    test("test signin with correct data", async () => {
        const signInData = {
            email: 'dmytro@gmail.com',
            password: '123456',
        };

    const {status, body} = await request(app)
      .post('api/auth/login') 
      .send(signInData);

    expect(status).toBe(200);
    expect(body.email).toBe(signInData.email);
    expect(body).toHaveProperty('token');
    expect(body).toHaveProperty('user');
    expect(body.user).toHaveProperty('email', signInData.email);
    expect(body.user).toHaveProperty('subscription', expect.any(String));
        
    })
})