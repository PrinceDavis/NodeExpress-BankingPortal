const express = require('express')

const data = require('../data')

const router = express.Router()


router.get('/savings', (req, res) => {
  res.render('account', {account: accounts.saving})
})

router.get('/credit', (req, res) => {
  res.render('account', {account: accounts.credit})
})

router.get('/checking', (req, res) => {
  res.render('account', {account: accounts.checking})
})

module.exports = router