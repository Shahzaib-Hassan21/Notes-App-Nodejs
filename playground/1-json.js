const fs = require('fs')
const { userInfo } = require('os')
// const book = {
//     title : 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const JSONdata = fs.readFileSync('1-json.json')
const dataBuffer = JSONdata.toString()
const user = JSON.parse(dataBuffer)

user.name = 'Shahzaib'
user.age = 23

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)