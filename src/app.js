const express = require('express')
const path = require('path')

const accountRoutes = require('./routes/accounts')
const servicesRoutes = require('./routes/services')
const {accounts, users} = require('./data')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))
app.use('/services', servicesRoutes)
app.use('/account', accountRoutes)
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index', {title: 'Account Summary', accounts})
})

app.get("/profile", (req, res) => {
  res.render('profile', {user: users[0]})
})


app.listen(3000,
  () => console.log('PS Project Running on port 3000!'))

