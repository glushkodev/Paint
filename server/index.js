const express = require('express')
const WSServer = require('express-ws')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const aWss = WSServer(app).getWss()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.ws('/', (ws, req) => {
	ws.on('message', (msg) => {
		msg = JSON.parse(msg)
		switch (msg.method) {
			case 'connection':
				connectionHandler(ws, msg)
				break;
			case 'drow':
				broadcastConnection(ws, msg)
				break;
		}
	})
})

app.listen(PORT, () => console.log('сервер запущен'))

const connectionHandler = (ws, msg) => {
	ws.id = msg.id
	broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
	aWss.clients.forEach(client => {
		if (client.id === msg.id) {
			client.send(JSON.stringify(msg))
		}
	})
}