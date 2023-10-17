// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const app = require('./server')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


// describe('Test Handlers', () => {
  
//     test('responds to /breakfast', async () => {
//         const res = await request.get('/');
//         expect(res.header['content-type']).toBe('application/json; charset=utf-8');
//         expect(res.statusCode).toBe(200)
//     })

//     // test('responds to /dessert', async () => {
//     //     const res = await request.get('/users');
//     //     expect(res.header['content-type']).toBe('application/json; charset=utf-8');
//     //     expect(res.statusCode).toBe(200)
//     // })
// })

describe('Test Handlers', () => {
  test('responds to post /breakfast', async () => {
      const res = await request.post('/breakfast').send(    {
        main_dish: "pancakes",
        item_1: "flour",
        item_2: "eggs",
        item_3: "syrup",
        item_4: "milk",
        category: "American"
      });
      expect(res.header['content-type']).toBe('application/json; charset=utf-8');
      expect(res.statusCode).toBe(201)
  })
})