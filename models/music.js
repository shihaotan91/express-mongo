var express = require('express')
var mongoose = require('mongoose')

// var otherSchema = new mongoose.Schema({
//   label: String,
//   genre: Number
// })

var musicSchema = new mongoose.Schema({
  album: String,
  artist: Number,
  year: Number,
  // other : [otherSchema]
})

// var Other = mongoose.model('Other', otherSchema)
var Music = mongoose.model('Music', musicSchema)

module.exports = Music
// module.exports = Other
