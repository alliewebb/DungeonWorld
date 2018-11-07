const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/profile/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getUser(id).then()
    res.render('profile')
  })

module.exports = router