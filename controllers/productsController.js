const express = require('express')
const controller = express.Router()

const productSchema = require('../schema/productSchema')




controller.route('/').get(async(req, res) => {
    try {
        res.status(200).json(await productSchema.find())
    }
    catch {
        res.status(400).json()
    }
    
})

controller.route('/:tag').get(async (req, res) => {
    const products = await productSchema.find({ tag: req.params.tag })
    if(products)
    res.status(200).json(products)
    else 
    res.status(404).json()
    })

    
controller.route('/:tag/:take').get(async (req, res) => {
    const products = await productSchema.find({ tag: req.params.tag }).limit(req.params.take)
    if(products)
        res.status(200).json(products)
    else 
        res.status(404).json()
    })


    controller.route('/product/details/:articleNumber').get(async (req, res) => {
        const product = await productSchema.findById(req.params.articleNumber)
    if(product)
        res.status(200).json(product)
    else 
        res.status(404).json()
       
        })

module.exports = controller
