import mongoose from 'mongoose'

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  'mongodb://127.0.0.1:27017/blogDatabase'

// Uncomment to debug Mongoose queries
// mongoose.set('debug', true)

// This is for Model.findByIdAndUpdate method, specifically so that { new: true} is the default
mongoose.set('returnOriginal', false)

// Setup connection for MongoDB
mongoose
  .connect(MONGODB_URI)
  .catch((error) => console.error('Error connecting to MongoDB: ', error.message))

// Listen to MongoDB events
mongoose.connection.on('disconnected', () => console.log(`Disconnected from MongoDB!`))

// Listen to any errors while connected to MongoDB
mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

// Export the connection
export default mongoose.connection



// Didn't connect to a database yet