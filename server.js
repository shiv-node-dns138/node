import express from 'express';
import winston from 'winston';
winston.add(new winston.transports.Console,{ level: 'info', colorize: true });
const router = express();

router.get('/demo', (req, res) => {
        res.send('Hello world!!');
});

router.post('/demo/post', (req, res) => {
    const request = req.body;
    res.send(request);
});

router.post('/demo', (req, res) => {
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
