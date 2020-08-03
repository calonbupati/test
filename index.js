const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
	res.send('Test')
})

app.get('/about', function (req, res) {
	let data = [
		{
			name: 'Test 1'
		},
		{
			name: 'Test 2'
		}
	]

	res.send(data)
})

console.log('Server Started')
app.listen(3000)