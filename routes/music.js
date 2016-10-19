var express = require('express')
var router = express.Router()
var Music = require('../models/music')
// var Other = require('../models/music')

//GET
router.get('/all', function (req, res) {
  // all Musics view under INDEX.EJS

  // Signature of a Music find
  // Model.find({field}, callback(err, data))
  Music.find({}, function (err, musicArr) {
    if (err) throw new Error(err)
    console.log(musicArr)

    res.render('Music/index', {
      musicArr: musicArr,
    })
  })
})

router.get('/all', function (req, res) {
  res.render('music/index')
}).get('/new', function (req, res) {
  res.render('music/new')
}).get('/:id', function (req, res) {
  res.send('music\'s ' + req.params.id + ' details')
}).get('/:id/edit', function (req, res) {
  res.send('edit music\'s ' + req.params.id + ' details')
})

//POST
router.post('/', function (req, res) {

  // var newother = new Other({
  //   label: req.body.label,
  //   genre: req.body.genre
  // })

  var newmusic = new Music({
    album: req.body.album,
    artist: req.body.artist,
    year: req.body.year,
    // other: newother
  })

  newmusic.save(function (err) {
    if (err) throw new Error(err)
  })

  res.send(newmusic)

  // console.log(req.body)
})

//PUT
router.put('/:id', function (req, res) {
  res.send('edit music' + req.params.id)
})

//DELETE
router.delete('/:id', function (req, res) {
  res.send('delete music' + req.params.id)
})

module.exports = router
