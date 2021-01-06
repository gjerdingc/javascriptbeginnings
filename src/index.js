import 'dotenv/config';
import cors from 'cors'
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
 
let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'Bye World',
    userId: '2',
  },
};



app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});
 
app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});
 
app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});
 
app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});


app.post('/messages', (req, res) => {
  const id = uuidv4();
  const date = Date.parse(req.body.date);
  const count = Number(req.body.count);

  const message = {
    id,
    text: req.body.text,
  };
 
  console.log(req.body)
  console.log(message)
  messages[id] = message;
 
  return res.send(message);
});




app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

