const express = require('express')
const shows = express.Router()
const Show = require('../models/shows.js')

//___________________
// Routes
//___________________
//localhost:3000

// Index
shows.get('/' , (req, res) => {
    Show.find({}, (error, allShows) => {
        res.render('index.ejs', {
            shows: allShows
        })
    })
});
// New
shows.get('/new', (req, res) => {
    res.render(
        'new.ejs'
    )
})
// Post New Show
shows.post('/', (req, res)=>{
    Show.create(req.body, (error, createdShow)=>{
        res.redirect('/')
    })
})
// Edit
shows.get('/:id/edit', (req, res)=>{
    Show.findById(req.params.id, (err, foundShow)=>{
        res.render('edit.ejs', {
            show: foundShow,
        })
    })
})
// Show
shows.get('/:id', (req, res) => {
    Show.findById(req.params.id, (error, foundShow) => {
      res.render('show.ejs', {
        show: foundShow
      })
    })
})
// Update
shows.put('/:id', (req, res)=>{
    Show.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/' + req.params.id)
    })
})
// Delete
shows.delete('/:id', (req, res) => {
  Show.findByIdAndRemove(req.params.id, (err, deletedShow) => {
    res.redirect('/')
  })
})

module.exports = shows;
