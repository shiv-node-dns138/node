import express from 'express';
const router = express();

router.get('/demo', (req, res) => {
        res.send('Hello world!!');
});

router.post('/demo/post', (req, res) => {
    const request = req.body;
    res.send(request);
});

router.get('/user', (req, res) => {
  const data = [
    {
      name: 'jaini',
      email: 'jaini.shivinfotech@gmail.com'
    },
    {
      name: 'bansari',
      email: 'bansari.shivinfotech@gmail.com'
    },
    {
      name: 'dhara',
      email: 'dhara.shivinfotech@gmail.com'
    }
  ]

  res.send(data);
})

 const port = 3001;
 router.listen(port, () => {
  // Listening to port
  console.log(`Listening to Port :  ${port}`)
});
