const { app } = require("../app");
const request = require("supertest");
const mysql = require("promise-mysql");
console.log(mysql);

const manhwaRoutes = require("../routes/manhwaRoutes");
const userRoutes = require("../routes/userRoutes");
const cartRoutes = require("../routes/cartRoutes");
const paymentRoute = require("../routes/paymentRoute");

// let database;
// process.env["NODE_ENV"] == "test"
//   ? (database = process.env.testDatabase)
//   : (database = process.env.database);

const connectionOptions = {
  host: process.env.host,
  database: process.env.testDatabase,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
};

const connection = mysql.createConnection(connectionOptions);
connection.connect();
// then((db) => {
//   manhwaRoutes(app, db);
//   userRoutes(app, db);
//   cartRoutes(app, db);
//   paymentRoute(app, db);
// });
describe("manhwas routes", () => {
  beforeAll(() => {
    // connection.connect();
  });

  afterAll(() => {
    connection.end();
  });

  test("get manhwas list", async () => {
    // `supertest` démarre le serveur et appelle une route
    const response = await request(app).get("/manhwas");
    expect(response.statusCode).toEqual(200);
    done();
  });
});
