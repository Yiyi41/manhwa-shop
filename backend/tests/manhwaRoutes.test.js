const request = require("supertest");
const app = require('../app');

const {createConnection}=require("promise-mysql");
const manhwaRoutes = require("../routes/manhwaRoutes");
const userRoutes = require("../routes/userRoutes");
const cartRoutes = require("../routes/cartRoutes");
const paymentRoute = require("../routes/paymentRoute");


let database;
process.env["NODE_ENV"] == "test"
  ? (database = process.env.testDatabase)
  : (database = process.env.database);

const connectionOptions = {
  host: process.env.host,
  database: database,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
};

const connection = createConnection(connectionOptions).then(async (db) => {
  // app.get('/', async (req, res) => {
  //   try {
  //     res.sendStatus(200)
  //   } catch (error) {
  //    res.sendStatus(400)
  //   }
  // })
    manhwaRoutes(app, db);
    userRoutes(app, db);
    cartRoutes(app, db);
    paymentRoute(app, db);
  });

beforeAll(async () => {
  await connection;

});

// afterAll(async() => {
//   await connection.end();
// });

// beforeEach(async () => {
//   await connection
// });



describe("manhwas routes", () => {

  test("get manhwas list",() => {
    return request(app).get("/").then(res => (expect(res.statusCode).toEqual(200)))
  });
});
