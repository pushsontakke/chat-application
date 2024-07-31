const express = require('express');
const dotenv = require('dotenv');
const app = express();
const authRouter = require('./routes/auth.routes');

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("hello from server");
});

app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));