const express = require('express')
const shows = express.Router()
const Show = require('../models/shows.js')

//___________________
// Routes
//___________________
//localhost:3000

// New
shows.get('/new', (req, res) => {
    res.render(
        'new.ejs', {
            currentUser: req.session.currentUser
        }
    )
})

// Edit
shows.get('/:id/edit', (req, res)=>{
    Show.findById(req.params.id, (err, foundShow)=>{
        res.render('edit.ejs', {
            show: foundShow,
            currentUser: req.session.currentUser
        })
    })
})

// Delete
shows.delete('/:id', (req, res) => {
  Show.findByIdAndRemove(req.params.id, (err, deletedShow) => {
    res.redirect('/shows')
  })
})

// Show
shows.get('/:id', (req, res) => {
    Show.findById(req.params.id, (error, foundShow) => {
      res.render('show.ejs', {
        show: foundShow,
        currentUser: req.session.currentUser
      })
    })
})

// Update
shows.put('/:id', (req, res)=>{
    Show.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/shows/' + req.params.id)
    })
})

// Create
shows.post('/', (req, res)=>{
    Show.create(req.body, (error, createdShow)=>{
        res.redirect('/shows')
    })
})

// Index
shows.get('/', (req, res) => {
    Show.find({}, (error, allShows) => {
        res.render('index.ejs', {
            shows: allShows,
            currentUser: req.session.currentUser
        })
    })
});







module.exports = shows
