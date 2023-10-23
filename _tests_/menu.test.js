const app = require('../expressApp');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);



describe("Test Handlers", () => {
  // testing for dessert
  test("responds to get /dessert", async () => {
    const res = await request.get('/dessert');
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200)
  })

  test("responds to get /dessert by id", async () => {
    const res = await request.get("/dessert/65270d5fda5c3f710a669f11")
    expect(res.statusCode).toBe(200)
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
  })

  test("responds to post /dessert", async () => {
    const res = await request.post("/dessert").send({
      main_dish: 'Texas Sheet Cake',
      item_1: "1 cup Butter",
      item_2: "2 cups Sugar",
      item_3: "2 Eggs",
      item_4: "1 tsp Salt",
      item_5: "2 cups Flour",
      item_6: "1/2 cup Cocoa Powder",
      category: "American"
    })
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.statusCode).toBe(200)    
  })

  test("responds to put /dessert", async () => {
    const res = await request.put("/dessert/65270d5fda5c3f710a669f11").send({
      main_dish: 'Texas Sheet Cake',
      item_1: "1 cup Butter",
      item_2: "2 cups Sugar",
      item_3: "2 Eggs",
      item_4: "1 tsp Salt",
      item_5: "2 cups Flour",
      item_6: "1/2 cup Cocoa Powder",
      category: "American"
    })
    expect(res.statusCode).toBe(200)
  })

  test("responds to delete /dessert by id", async () => {
    const res = await request.delete("/dessert/65270d5fda5c3f710a669f11")
    expect(res.statusCode).toBe(200)
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
  })

  // testing for breakfast
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

// test for dinner
test("responds to get /dinner", async () => {
  const res = await request.get('/dinner');
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
  expect(res.statusCode).toBe(200)
})

test("responds to get /dinner by id", async () => {
  const res = await request.get("/dinner/65270d74da5c3f710a669f14")
  expect(res.statusCode).toBe(200)
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
})

test("responds to post /dinner", async () => {
  const res = await request.post("/dinner").send({
    main_dish: 'Roast',
    item_1: "3lb Pork Butt Roast",
    item_2: "Carrots",
    item_3: "Potatoes",
    item_4: "Seasoning Packet",
    category: "American"
  })
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
  expect(res.statusCode).toBe(200)    
})

test("responds to put /dinner", async () => {
  const res = await request.put("/dinner/65270d74da5c3f710a669f14").send({
    main_dish: 'Roast',
    item_1: "3lb Pork Butt Roast",
    item_2: "Carrots",
    item_3: "Potatoes",
    item_4: "Seasoning Packet",
    category: "American"
  })
  expect(res.statusCode).toBe(200)
})

test("responds to delete /dinner by id", async () => {
  const res = await request.delete("/dinner/65270d74da5c3f710a669f14")
  expect(res.statusCode).toBe(200)
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
})

// test for lunch
test("responds to get /lunch", async () => {
  const res = await request.get('/lunch');
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
  expect(res.statusCode).toBe(200)
})

test("responds to get /lunch by id", async () => {
  const res = await request.get("/lunch/65270d87da5c3f710a669f17")
  expect(res.statusCode).toBe(200)
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
})

test("responds to post /lunch", async () => {
  const res = await request.post("/lunch").send({
    main_dish: 'Chicken Salad',
    item_1: "1Lb Shredded Chicken",
    item_2: "1/2 cup Mayo",
    item_3: "1 cup cut Grapes",
    item_4: "1/3 cup Honey",
    category: "American"
  })
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
  expect(res.statusCode).toBe(200)    
})

test("responds to put /lunch", async () => {
  const res = await request.put("/lunch/65270d87da5c3f710a669f17").send({
    main_dish: 'Chicken Salad',
    item_1: "1Lb Shredded Chicken",
    item_2: "1/2 cup Mayo",
    item_3: "1 cup cut Grapes",
    item_4: "1/3 cup Honey",
    category: "American"
  })
  expect(res.statusCode).toBe(200)
})

test("responds to delete /lunch by id", async () => {
  const res = await request.delete("/lunch/65270d87da5c3f710a669f17")
  expect(res.statusCode).toBe(200)
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8")
})
});
