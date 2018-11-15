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

router.get('/add', (req, res) => {
    res.render('add')
  })

router.post('/add', (req, res) => {
    const user = req.body.newuser
    db.addUser(user)
    .then(() => {
        res.redirect('/')
    })
})

router.get('/profile/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getCharacters(id).then(characters => {
        db.getUser(id).then(users => {
            console.log(characters)
            res.render('profile', {characters, users})
        })
    })
})

router.get('/character/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getCharacter(id).then(character => {
        console.log(character)
        res.render('character', character[0])
    })
})

router.post('/character/:id', (req, res) => {
    const character = {
      char_name: req.body.name,
      class: req.body.class,
      level: req.body.level,
      xp: req.body.xp,
      max_hp: req.body.maxHp,
      hp: req.body.HP,
      level: req.body.level,
      armour: req.body.armour,
      damage: req.body.damage,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma
    }
    db.updateCharacter(req.params.id, character)
      .then(() => {
        res.redirect('/')
      })
  })

router.get('/profile/:id/add', (req, res) => {
    const id = Number(req.params.id)
    db.getUser(id).then(user => {
        res.render('newCharacter', {user})
    })
})

router.post('/profile/:id/add', (req, res) => {
    const id = Number(req.params.id)
    const character = {
        user_id: id,
        char_name: req.body.name,
        class: req.body.class
    }
    db.createCharacter(character)
    .then(() => {
        res.redirect('/')
        })
})
module.exports = router