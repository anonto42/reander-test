import express from 'express';

const app = express();

app.get('/test',(req, res) => {
    res.json({ message: 'Hello, World!' });
})

app.listen(3760,() => console.log(`Server is running on port 3000`));