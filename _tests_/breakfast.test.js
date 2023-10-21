const app = require('../expressApp')
const { expect } = require('@jest/globals');
const request = supertest('supertest')


describe('Test Handlers', () => {
   test('responds to /', async () => {
        const res = await request.get('/');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

//GET all breakfasts
   test('responds to /breakfast', async () => {
        const res = await request.get('/breakfast');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

// GET breakfast by id
   test('GET /breakfast/ :id', async () => {
        const res = await request.get('/breakfast/65270d43da5c3f710a669f0d');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

// Post new breakfast    
   test('responds to post /breakfast', async () => {
        const res = await request.post('/breakfast').send(    {
                main_dish: "German Pancakes",
                item_1: "2 cups Milk",
                item_2: "6 Eggs",
                item_3: "1 cup Flour",
                item_4: "1 tsp Vanilla",
                category: "American",
        });
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(201)
    })

// update breakfast by id    
    test('responds to PUT /breakfast/:id', async () =>{
        const res = (await request.put('/breakfast/65270d43da5c3f710a669f0d')).send({
            main_dish: 'Updated German Pancakes',
            item_1: '3 cups Milk',
            item_2: '8 Eggs',
            item_3: '1.5 cups Flour',
            item_4: '1.5 tsp Vanilla',
            category: 'American',
        });
       
        expect(res.statusCode).toBe(201)
    })

// Delete breakfast by id
    test('response to delete /breakfast/ :id', async () =>{
        const res = await request.delete('/breakfast/65270d43da5c3f710a669f0d');
        expect(res.statusCode).toBe(201)
    })
    

}) 