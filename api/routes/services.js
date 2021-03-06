const express = require('express');
const router = express.Router();
const config = require('../configDB');
const checkAuth = require('../middleware/check-auth');


router.get('/', checkAuth, (req, res) => {
    let sql = 'SELECT * FROM services';
    config.query(sql, (err, rows) => {
      if (err) {
        res.json({
          'Error': true,
          message: 'Error Execute Sql'
        });
        console.log(err);
      } else {
        res.status(200).json({
          'Error': false,
          message: 'Success',
          'services': rows
        });
        
        
      //  console.log(rows);
        console.log('services list completed');
  
      }
    });
  });

  module.exports = router;