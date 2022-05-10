const express = require('express')
const app = express()

const port = 5000
const path = require('path')
var urllib = require('urllib');


app.use(express.static(path.join(__dirname, 'index')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756"
}
const teams = {
    lakers:[],
    warriors:[],
    heat:[],
    suns:[]
}
app.get('/teams/:teamName', function (req, res) {
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, response) {
        if (err) {
            throw err; 
        }
        let teamName = req.params.teamName
        let Data = JSON.parse(data).league.standard
        let MyNew = Data.filter(elemnt => elemnt.teamId === teamToIDs[teamName])
        MyNew = MyNew.map(elemnt => {return{ firstName:elemnt.firstName, lastName:elemnt.lastName, jersey:elemnt.jersey , pos:elemnt.pos}})
        res.send(MyNew)
    })
})

app.get('/', function (req, res) {
   
})


app.listen(port, function () {

})