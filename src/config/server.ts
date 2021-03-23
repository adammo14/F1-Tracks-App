import express from 'express';
import path from 'path'; 

const app = express()
const PORT : number = 1234;

app.use("*", (req, res) =>{
    res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));