import express from 'express';
const router = express();

router.post('/demo', (req, res) => {
    const request = req.body;
    res.send(request);
});

const port = 3001;
router.listen(port, () => {
    // Listening to port
    console.log(`Listening to Port :  ${port}`);
});
