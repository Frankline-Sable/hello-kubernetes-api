const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
            message: "Hello Sable from kubernetes",
            hostname: require('os').hostname(),
        }
    );
});

app.get("/health/live", (req, res) => {
    res.status(200).json({
        status: 'alive'
    });
});


app.get("/health/ready", (req, res) => {
    res.status(200).json({
        status: 'ready'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API running on port ${PORT}`);
});
