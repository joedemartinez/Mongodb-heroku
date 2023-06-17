const { MongoClient } = require('mongodb')
// import { MongoClient } from "mongodb"


let conn
module.exports = {
    connectToDb: (fn) => {
        MongoClient.connect(process.env.MONGO_URI)
        .then((client) => {
            conn = client.db()
            return fn()
        })
        .catch(err => {
            console.log(err)
            return fn(err)
        })
    },
    getDb: () => conn
}