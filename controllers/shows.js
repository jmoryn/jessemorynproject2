const express = require('express')
const router = express.Router()
const Show = require('../models/shows.js')


// Index
// router.get('/', (req, res) => {
//     Show.find({}, (error, allShows) => {
//         res.render('index.ejs', {
//             shows: allShows
//         })
//     })
// })
