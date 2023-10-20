const request = require("supertest");
const {app} = require("../app.js");


describe("All /dinner route tests", ()=>{

    // test get all request
        test("should respond with a 200 and json data", async()=>{
            const response = await request(app).get("/breakfast").send({
                nothing: "nothing"
            });
                            console.log(response);
            expect(response.statusCode).toBe(200);
        })
})