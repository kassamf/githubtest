// getting-started.js
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
mongoose.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  


// Create a model Posts using the userSchema

});

//figure out how to generate a customer id sequentially and assign an agent id
const userSchema = new mongoose.Schema({
         passwd: {
         type: String,
         required: 'Please enter a password',
         trim: true,
         validate: {
             validator: function(v) {
                 return /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{6,}$/.test(v);
               },
               message: props => 
                `Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 6 characters.`
             }            
      },
      CustomerId: {
        type: Number,
        trim: true
     },
      CustFirstName: {
        type: String,
        trim: true
     },
    
      CustLastName: {
        type: String,
        trim: true
     },
      CustAddress: {
        type: String,
        trim: true
     },
      CustCity: {
        type: String,
        trim: true
     },
      CustProv: {
        type: String,
        trim: true
     },
      CustPostal: {
        type: String,
        trim: true
     },
      CustCountry: {
        type: String,
        trim: true
     },
      CustHomePhone: {
         type: String,
         trim: true
      },
     CustBusPhone: {
      type: String,
      trim: true
      },
      CustEmail: {
         type: String,
      trim: true
         },
      AgentId: {
         type: Number,
         trim: true
         },
      userid: {
         type: String,
         trim: true,
         unique:'The username must be unique.'
         },
    });

userSchema.plugin(uniqueValidator);
// Create a model User using the userSchema
module.exports.User = mongoose.model('User', userSchema);     
 