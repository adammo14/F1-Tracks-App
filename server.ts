import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req, res) =>{
    res.sendFile("index.html", {root: __dirname});
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));