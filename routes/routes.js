const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getUsers()
      .then(users => {
        res.render('home', {users})
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

router.post('/', (req, res) => {
    const user = {
        name: req.body.newname,
    }
    db.addUser(user)
        .then(() => {
        res.redirect('/profile/:id')
        })
})

router.get('/profile/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getUser(id).then(users => {
        res.render('profile', users)
    })
    
  })

module.exports = router