import express from 'express';
const router = express();

router.get('/demo', (req, res) => {
        res.send('Hello world!!');
});

router.post('/demo/post', (req, res) => {
    const request = req.body;
    res.send(request);
});

 const port = 3001;
 router.listen(port, () => {
  // Listening to port
  console.log(`Listening to Port :  ${port}`)
});
