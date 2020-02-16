const express = require('express');
const Product  = require('../models/product');
const router = express.Router();

router.route('/')
  //Getting  All product item from database
.get((req,res,next)=>{
    Product.find({})
    .then((product)=>{
        status=200;
        // res.json({productName:req.product.product, brand:req.product.brand, price:req.product.price, image:req.product.Image});
        res.json(product);
    })
    .catch((err)=>next(err));

})
 //inserting  new product item to the database
.post((req,res,next)=>{
    Product.create(req.body)
    .then((product)=>{
        res.status=200;
        res.json(product);
    })
    .catch((err) => next(err));
})



// })
// .put((req,res,next)=>{
//     res.statusCode=201;
//     res.json("You cannot update Food");

// })
//  //Deleting  All food item from database
// .delete((req,res,next)=>{
//     Food.deleteMany({})
//     .then((food)=>{
//         res.json(food);

//     })
// });

//  //Getting particular food iteam by id from database
//  router.route('/:id')
//   .get((req,res,next)=>{
//     Food.findById(req.params.id)
//      .then((food)=>{
//         res.json(food);
//      })
//      .catch((err) => next(err));
//  })
//  .post((req,res,next)=>{
//      res.statusCode=201;
//      res.json("You cannot add food on here");
//  })
//  //Updating the particular food item by id

//  .put((req,res,next)=>{
//      Food.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
//      .then((food)=>{
//          res.json(food);

//      })
//      .catch((err)=> next(err));
//  })

//  // Deleting particular food by id

//  .delete((req,res,next)=>{
//      Food.findByIdAndDelete(req.params.id)
//      .then((food)=>{
//          res.json(food);
//      })
//      .catch((err)=> next(err));
//  })

module.exports= router;


