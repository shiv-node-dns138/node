import express from 'express';
import winston from 'winston';
winston.add(new winston.transports.Console,{ level: 'info', colorize: true });
const router = express();

router.post('/demo1/post', (req, res) => {
    const request = req.body;
    res.send(request);
});

router.get('/demo1/new', (req, res) => {
    res.send('This is my new api');

router.post('/user', (req, res) => {
  const request = req.body;
  res.send(request);
});

router.get('/user', (req, res) => {
  const data = [
    {
      name: 'jaini shah',
      email: 'jaini.shivinfotech@gmail.com'
    },
    {
      name: 'bansari patel',
      email: 'bansari.shivinfotech@gmail.com'
    },
    {
      name: 'dhara shah',
      email: 'dhara.shivinfotech@gmail.com'
    }
  ]

  res.send(data);
})
router.get('/demo/new', (req, res) => {
    res.send('this is my new api');

});

 const port = 3001;
 router.listen(port, () => {
  // Listening to port
  winston.info(`Listening to Port :  ${port}`);
});
