const mongoose = require('mongoose')

const pUpload = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  weight: {
    type: String,
    require: true,
  },
   pincode: {
    type: String,
    require: true,
  },
   landmark: {
    type: String,
    require: true,
  }
})

module.exports = mongoose.model('ProductSchema', pUpload)
