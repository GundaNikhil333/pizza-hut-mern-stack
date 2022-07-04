const mongoose = require('mongoose');
require("colors");
const express = require('express')

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
   
    });
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
