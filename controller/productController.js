const Product = require('../models/productModel');

//business logic

exports.getProducts = async(req,res)=>{
    try{
        const allProducts =await  Product.find();
        if(!allProducts){
            res.json({
                message: "there no products"
            })
        }

        res.status(200).json({
            succses : true,
            products :allProducts
        })

    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "server error"
        })
    }
}

exports.createProduct = async(req,res)=>{
    try{
        const {name, price, description, category} = req.body;
        const newProduct = new Product ({name,price,description,category});
        await newProduct.save();
        res.status(200).json({
            product : newProduct

        })
        
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "server error"
        })
    }
}

exports.updateProduct = async(req,res)=>{
    try{
        console.log("req recived");
        const {id}= req.params;
         const {name, price, description, category} = req.body;
         const updatedProduct = await Product.findByIdAndUpdate(id,{name, price, description, category},{new:true});
         if(!updatedProduct){
            message:" could not update"
         }
         res.status(200).json({
            product : updatedProduct
         })
       
        
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "server error"
        })
    }
}

exports.deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if(!deletedProduct){
            res.json({
                message: "product not found"
            })
        }

        res.status(200).json({
            message: "product deleted successfully",
            products : deletedProduct
        })

    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "server error"
        })
    }
}



