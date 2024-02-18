const express= require('express')
const {uploadProduct,getAllProducts,getSingleProduct,deleteProduct}=require('../controller/productController')

const router=express.Router()


router.get('/', getAllProducts)

router.get('/:id', getSingleProduct)

router.post('/',uploadProduct)

router.delete('/:id',deleteProduct )

router.patch('/:id', updateProduct)

module.exports=router;