import db from '../db/connection.js'
import post from '../models/post.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const posts = [...Array(100)].map(item => {
    return {
        title: faker.title(),
        author: faker.author(),
        image_url: faker.url(),
        content: faker.content(),
        // **
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
