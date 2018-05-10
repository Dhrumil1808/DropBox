var express = require('express');
var router = express.Router();
var User = require('../models/user');
var kafka = require('../kafka/client');



router.post('/', function(req, res, next) {
   
     kafka.make_request('loadusers_topic',{
         "index":req.body.index,
         }, function(err,results){
         console.log('in result');
         console.log(results);
         if (err){
             res.json({
                 status:"error",
                 msg:"Sytem Error, Try Again."
             })
         }else{
     
                 res.json({
                     users:results.users
                 })
            
             }
         
     });
 
     
  
 })
 module.exports = router;