const request = require("supertest");
const { app, connection } = require("../app");
const { dropData, seedData } = require("../initDB");

beforeAll(async () => {
  await connection.then(async (db) => {
    //DROP
    await dropData(db);
    //SEED
    await seedData(db);
  });
});

describe("manhwas routes", () => {
  test("get manhwas list", () => {
    return request(app)
      .get("/manhwas")
      .then((res) => expect(res.body.responseDB.length).toBe(1));
  });
});

describe("user signin route", () => {
  test("get user after signin", () => {
    return request(app)
      .post("/login")
      .send({ email: "lou@mail.com", password: "azerty" })
      .then((res) => expect(res.statusCode).toBe(200));
  });
});

describe("user signup routes", () => {
  test("get user after signup", () => {
    return request(app)
      .post("/signup")
      .send({
        firstname: "Léa",
        name: "Dupont",
        email: "lea.dupont@mail.com",
        password: "azerty",
      })
      .then((res) => expect(res.body.userId).toBe(13));
  });

  describe("cart routes", () => {
    test("reveive status code 200 if cart is valided", () => {
      return request(app)
        .post("/cart/valid")
        .send([
          // orderNumber: "",
          // manhwaId: "",
          // quantity: 2,
          // unitPrice:60,
          // userId: '11',
          // orderedDate:'2023-01-27',
        ])
        .then((res) => expect(res.body.userId).toBe(13));
    });
});
