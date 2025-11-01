const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const app = express();
const PORT = 3000;

const Doctor = require('./Model/doctor')
const Patient = require('./Model/patient')

const dbUrl = process.env.MONGODB_URL

mongoose.connect(dbUrl)
.then(()=>{
  console.log("Successfully connected");
  app.listen(PORT, () =>{
  console.log(`Server is running at http://localhost:${PORT}`)
})
})
.catch((e)=>{
  console.log("ERROR: ", e);
})

app.use(express.json());

app.get('/', (req, res)=>{
  res.send('Hospital')
})

app.use('/', require('./routes/doctors'));
app.use('/patients', require('./routes/patients'));