var express = require('express');
app = express();


app.use('/data', (req, res) => {
    res.status(200).json({
        message: "Success"
    })
});

app.listen(10011, () => {
    console.log("server started at 10011");
});