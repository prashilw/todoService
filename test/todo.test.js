const supertest = require('supertest');
const assert = require('assert');
const app = require('../util/express.js')


describe('server', function () {
    let container;
    beforeEach( () => {
        container =  supertest(app)
    })
    
    it('allowed headers', async () => {
        const res = await container
                    .get("/")
                    .expect('Allow', /GET/)
                    .expect('Allow', /HEAD/)
                    .expect('Allow', /OPTIONS/)
                    .expect(200);
    
    });

    it('negative test', async () => {
        const res = await container
            .get('/todoById/dsd')
    
        console.log(res)
    });
});

