const express = require('express');
const router = express.Router();
const config = require('../configDB');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');






router.post('/signup', (req, res) => {

  let sql = 'SELECT email FROM users WHERE email = ?';
  let emailBody = [req.body.email];

  config.query(sql, emailBody, (err, userEmail) => {
    const errResponse = {
      'sacces': false,
      'message': 'Почта занята',
      'status': 409
    };
    const rightResponse = {
      'sacces': true,
      'message': 'Пользователь создан',
      'status': 201
    };
    if (userEmail.length >= 1) {
      res.send(errResponse);
      console.log('mail exist');
      return;
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        } else {
          console.log('here');
          let sql = 'INSERT INTO users SET ?';
          const user = {
            email: req.body.email,
            password: hash,
          };
          console.log(user);
          config.query(sql, user, (err) => {
            if (err) {
              console.log(err);
              res.json({
                "message": 'SQL Error'
              });
            } else {
              //res.sendStatus(201);
              res.send(rightResponse);
              // res.status(201).json({
              //   'message': "Спасибо за регестрацию"
              // });
              console.log('User created');
              return;
            }
          });
        }
      });
    }
  });
});

router.post('/signin', (req, res) => {

  let sql = 'SELECT * FROM users WHERE email = ?';
  let userEmail = [req.body.email];

  config.query(sql, userEmail, (err, user) => {
    console.log(user.length);
    if (user.length < 1) {
      res.json({
        message: 'Mail missing',
        loginStatus: false
      });
      console.log('Mail missing');
      return;
    }
    if (err) {
      console.log(err);
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (err) {
        return res.json({
          message: 'Auth failed'
        });
      }
      if (result) {
        const token = jwt.sign({
            email: user[0].emaill,
            userId: user[0].id,
            userName: user[0].name
          },
          process.env.JWT_KEY, {
            expiresIn: '1h'
          }
        );
        res.status(200).json({
          message: 'Auth successful',
          token: token,
          loginStatus: true
        });
        return;

      }
      return res.json({
        message: 'Incorrect username or pasword',
        loginStatus: false
      });
    });
  });
});






module.exports = router;
