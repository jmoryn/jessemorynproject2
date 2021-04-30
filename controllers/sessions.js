const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

sessions.post('/', (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if (err) {
            console.log(err)
            res.send('sorry, we\'re expreiencing an issue on our end!')
        } else if (!foundUser) {
            res.send('<a href="/sessions/new">Username not found</a>')
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.redirect('/shows')
            } else {
                res.send('<a href="/sessions/new">Try again!</a>')
            }
        }
    })
})

sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/shows')
    })
})

module.exports = sessions
