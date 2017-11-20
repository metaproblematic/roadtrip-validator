const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded ({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))



app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/html/index.html')
})

app.post('/timeToValidate', function(req, res) {
	console.log(typeof req.body.displayPrice)
	console.log(req.body.displayPrice, req.body.displayWeight)
	console.log(req.body.displayPrice > 200, req.body.displayWeight > 200)
	if (req.body.displayPrice > 200 || req.body.displayWeight > 200) {
		res.send('invalid cargo')
	}
	else {
		res.send('You are good to go')
	}
})


app.listen(8080, function () {
	console.log('listening on 8080')
})