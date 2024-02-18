const UploadProduct=require('../models/uploadProductModel')
const mongoose=require ('mongoose')

uploadProduct=async(req,res)=>{
    const {name,type,weight,pincode,landmark}=req.body
    
    try{
        const uploadProduct=await UploadProduct.create({name,type,weight,pincode,landmark})
        res.status(200).json(uploadProduct)
        console.log({name,type,weight,pincode,landmark})
    
    }
    catch(error){
        res.status(400).json({error:error.message})
    
    }
}

getAllProducts=async(req,res)=>{
    const getAproducts=await UploadProduct.find({})
    res.status(200).json(getAproducts)
}

getSingleProduct=async(req,res)=>{
    const {id}=req.params

if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"not found any result"})
}

    const getSingle=await UploadProduct.findById(id)
    
    if (!getSingle) {
       return res.status(404).json({"result":"not found any result"})
        
    }
    res.status(200).json(getSingle)
}


deleteProduct=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"not found any result"})
    }

    const deletepro=await UploadProduct.deleteOne({_id: id})
    res.status(200).json({success:'deleted successfully'})

}

updateProduct=async(req,res)=>{
    const {name,type,weight,pincode,landmark}=req.body
const {id}=req.params

    try{
        const updatepro=await UploadProduct.updateOne({_id:id},{$set:{name,type,weight,pincode,landmark}})
       return res.status(200).json(updatepro)
        console.log({pduct})
    }
    catch(error){
         return res.status(404).json({status:'not found'})
    }
    next()
}

module.exports={
    uploadProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct
}