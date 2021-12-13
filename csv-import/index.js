const knex = require("knex")
const dotenv = require("dotenv")
const fs = require("fs");
const fastcsv = require("fast-csv")

let count = 0;
let stream = fs.createReadStream("products_ascii.csv");
let csvStream = fastcsv
  .parse()
  .on("data", (data) => {
    if (count > 0) {
      insert(data);
    }
    count++;
  })
  .on('end', () => {
    console.log(`${count - 1} records was inserted`)
    return;
  });

stream.pipe(csvStream);


const insert = async (data) => {

  dotenv.config()

  const connection = knex({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
    }
  });

  const product = {
    id: Number(data[0]),
    name: String(data[1]).toString("utf-8"),
    price: Number(data[2]),
    qty_stock: Number(data[3])
  }

  await connection.raw(`
      INSERT INTO shopper_products (id, name, price, qty_stock) VALUES (${product.id}, '${product.name}', ${product.price}, ${product.qty_stock})
  `);

}


  

