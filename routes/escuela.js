const express = require('express');
const router = express.Router();


router.get('/',(req, res) => { 
    const productos = []; 
    for(let i =0; i < 100;i++) { 
     productos.push({ 
       name: faker.commerce.productName(), 
       price:  parseInt(faker.commerce.price(),10), 
       image: faker.image.imageUrl(), 
     }) 
    } 
     res.json(productos); 
   }); 
  
   
   
   
  
   router.get('/:id', (req, res) => { 
    const {id} = req.params; 
    res.json({ 
      id, 
      name: 'product 2', 
      prince: 3000 
    }) 
  }) 
  
  router.get('/filter', (req, res)=>{ 
    res.send('soy un filter') 
  }) 
  
  router.get('/:id', (req, res) => { 
    const {id} = req.params; 
    res.json({ 
      id, 
      name: 'product 2', 
      prince: 300 
    }) 
  }) 







module.exports = router;