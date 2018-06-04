var express = require('express');
app = express();


app.use('/data', (req, res) => {
    res.status(200).json({
        message: "Successfully started server........"
    })
});

app.listen(10012, () => {
    console.log("server started at 10012");
});