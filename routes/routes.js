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
    res.render('character', character[0])
  })
})

router.post('/character/:id', (req, res) => {
  const character = {
    char_name: req.body.name,
    class: req.body.class,
    level: req.body.level,
    xp: req.body.xp,
    hp: req.body.hp,
    items: req.body.items,
    bonds: req.body.bonds,
    alignment: req.body.alignment,
    armour: req.body.armour,
    damage: req.body.damage,
    strength: req.body.strength,
    dexterity: req.body.dexterity,
    constitution: req.body.constitution,
    intelligence: req.body.intelligence,
    wisdom: req.body.wisdom,
    charisma: req.body.charisma,
    race: req.body.race
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

router.get('/character/:id/delete', (req, res) => {
  db.getCharacter(Number(req.params.id))
    .then(character => {
      console.log(character[0])
      res.render('delete', character[0])
    })
})

router.post('/character/:id/delete', (req, res) => {
  db.deleteCharacter(Number(req.params.id))
    .then(() => {
      res.redirect('/')
    })
})

router.get('/character/:id/:stat/hack', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('hack', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/volley', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('volley', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/parley', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      console.log(mod)
      res.render('parley', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/defy', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      console.log(mod)
      res.render('defy', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/defend', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('defend', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/discern', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('discern', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/lore', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('lore', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/aid', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2
      res.render('aid', {character, id, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/warrants', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('warrants', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/last', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2
      res.render('last', {character, id, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/watch', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('watch', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/journey', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('journey', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/carouse', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2
      res.render('carouse', {character, id, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/supply', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('supply', {character, id, mod, roll, roll2, sum})
    })
})

router.get('/character/:id/:stat/recruit', (req, res) => {
  let id = (Number(req.params.id))
  db.getCharacter(id)
    .then(character => {
      let mod = db.findStat(Number(req.params.stat))
      let roll = db.dieRoll(6)
      let roll2 = db.dieRoll(6)
      let sum = roll + roll2 + mod
      res.render('recruit', {character, id, mod, roll, roll2, sum})
    })
})

module.exports = router
