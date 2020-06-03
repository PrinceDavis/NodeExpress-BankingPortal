const express = require('express')
const path = require('path')
const fs = require('fs')



const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

const accountData = fs.readFileSync(
  path.join(__dirname, 'json/accounts.json'), {encoding: 'UTF8'})
const accounts = JSON.parse(accountData)

const userData = fs.readFileSync(path.join(
  __dirname, 'json/users.json'), {encoding: 'UTF8'})
const users = JSON.parse(userData)


app.get('/', (req, res) => {
  res.render('index', {title: 'Account Summary', accounts})
})

app.get('/savings', (req, res) => {
  res.render('account', {account: accounts.saving})
})

app.get('/credit', (req, res) => {
  res.render('account', {account: accounts.credit})
})

app.get('/checking', (req, res) => {
  res.render('account', {account: accounts.checking})
})

app.get("/profile", (req, res) => {
  res.render('profile', {user: users[0]})
})

app.get('/transfer', (req, res) => {
  res.render('transfer')
})

app.post('/transfer', (req, res) => {
  const {amount, from, to} = req.body
  accounts[from].balance -= parseInt(amount)
  accounts[to].balance += parseInt(amount)
  accountsJSON = JSON.stringify(accounts)

  fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), {encoding: 'UTF8'})
  res.render('transfer', {message: "Transfer Completed"})
})


app.listen(3000,
  () => console.log('PS Project Running on port 3000!'))

