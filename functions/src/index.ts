//import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
import registryFunctions from './services/registry.functions';

registryFunctions.forEach(f => {
    exports[f.key] = f.Fun;
});
//
// require('dotenv').config()
// import {MongoClient} from 'mongodb'
//
// const connectMongoDB = () => MongoClient.connect(process.env.MONGODB)
//
// const getContacts = (req: any, res: any) => {
//     return connectMongoDB()
//         .then(
//             (db: any) => db.collection('appointments')
//                 .find({})
//                 .toArray()
//                 .then(documents => ({db, documents}))
//         )
//         .then(({db, documents}) => {
//             db.close()
//             return documents
//         })
//         .then(appointments => res.json(appointments))
//         .catch(err => res.status(400).send(err.toString()))
// }
//
// const createContact = (req, res) => {
//     return connectMongoDB()
//         .then(
//             db => db.collection('appointments').insertOne(req.body)
//                 .then(result => db)
//         )
//         .then(db => db.close())
//         .then(() => res.json({result: 'ok'}))
//         .catch(err => res.status(400).send(err.toString()))
// }
//
// export const handler = (req, res) => {
//     if (req.method === 'POST') {
//         return createContact(req, res)
//     }
//
//     return getContacts(req, res)
// }