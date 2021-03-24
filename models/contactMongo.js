//This is for the agencies - get data from database getContact part//

// getting-started.js
const mongo = require('mongodb').MongoClient;

module.exports.getContacts = (query,callback)=>{mongo.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', 
{useNewUrlParser: true, useUnifiedTopology: true},
       (err, db) => {
       if (err) callback(err.errmsg); // send the error to the callback function
       var dbo = db.db("myclouddb");
       dbo.collection("agencies").find(query).toArray(function(err, result) {
         if (err) callback(err.errmsg); // send the error to the callback function
         db.close();
         callback(null, result);
       });
     });
}

//This is for the agents - get data from database getAgents part//
module.exports.getAgents = (query,callback)=>{mongo.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', 
{useNewUrlParser: true, useUnifiedTopology: true},
       (err, db) => {
       if (err) callback(err.errmsg); // send the error to the callback function
       var dbo = db.db("myclouddb");
       dbo.collection("agents").find(query).toArray(function(err, result) {
         if (err) callback(err.errmsg); // send the error to the callback function
         db.close();
         callback(null, result);
       });
     });
}