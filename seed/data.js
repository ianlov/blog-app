import db from '../db/connection.js';
import post from '../models/post.js';
import faker from "faker";

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const posts = [...Array(100)].map(item => {
    return {
        title: faker.lorem.sentence(),
        author: faker.name.findName(),
        image_url: faker.image.imageUrl(),
        content: faker.lorem.paragraph(),
    }
  })
  await post.insertMany(posts)
  console.log('Created projects!')

// close database connection. done.
db.close()
}

insertData()

  // ** Fill in the value for the key when database is setup
  // run nodeseed/data.js when database is created
