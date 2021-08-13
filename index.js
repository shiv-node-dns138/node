import express from 'express';
import winston from 'winston';
winston.add(new winston.transports.Console,{ level: 'info', colorize: true });
const router = express();

router.get('/demo', (req, res) => {
        res.send('Hello world!!'+'this is new api');
});

const port = 3001;
router.listen(port, () => {
  // Listening to port
  winston.info(`Listening to Port :  ${port}`);
});
