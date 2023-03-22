const productModel = require("../model/products");
const cloudinary = require("../helpers/cloudinary");
const { create } = require("../model/products");


exports.newProducts = async(req,res)=>{
    try {
        const { productName, description, price, stockQuantity, category } = req.body;
        const result = await cloudinary.uploader.upload(req.files.image.tempFilePath)
        const createData = {
            productName,
            description,
            price,
            stockQuantity,
            category,
        };
        const created = new productModel(createData);
        created.image = result.secure_url;
        created.cloudId = result.public_id;
        await created.save()
        res.status(201).json({
            data: created
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.allProducts = async(req,res)=>{
    try {
        const all = await productModel.find();
        if(all.length === 0){
            res.status(404).json({
                message: "Database currently empty..",
                length: all.length
            })
        }else{
            res.status(200).json({
                message: "Here are all the products...",
                length: all.length,
                data: all
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

exports.singleProducts = async(req,res)=>{
    try {
        let prodId = req.params.prodId;
        const single = await productModel.findById(prodId);
            res.status(200).json({
                message: "Here are single the products...",
                data: single
            })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};


exports.delProducts = async(req,res)=>{
    try {
    const prodId = req.params.prodId;
    const del = await productModel.findById(prodId);
    await cloudinary.uploader.destroy(del.cloudId)
    res.status(200).json({
        message: "Deleted successsfully..."
    })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};