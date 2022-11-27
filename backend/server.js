const express = require('express');
const dotenv = require('dotenv');


const app = express();


dotenv.config();

const PORT = process.env.PORT || 5000

app.get('/chats', (req, res) => {
    res.send(["app", 'java', 'javascr'])
})

app.listen(PORT, console.log(`server is starting on port ${PORT}`))