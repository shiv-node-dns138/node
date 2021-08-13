import express from 'express';
const router = express();

router.get('/demo', (req, res) => {
        res.send('Hello world!!');
});

const port = 3001;
router.listen(port, () => {
  // Listening to port
  console.log(`Listening to Port :  ${port}`);
});
