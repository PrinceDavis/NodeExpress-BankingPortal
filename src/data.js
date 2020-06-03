const path = require('path')
const fs = require('fs')


const accountData = fs.readFileSync(
  path.join(__dirname, 'json/accounts.json'), {encoding: 'UTF8'})
const accounts = JSON.parse(accountData)

const userData = fs.readFileSync(path.join(
  __dirname, 'json/users.json'), {encoding: 'UTF8'})
const users = JSON.parse(userData)


const writeJSON = () => {
  accountsJSON = JSON.stringify(accounts)
  fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'utf8')
}

module.exports = {
  users, accounts, writeJSON
}