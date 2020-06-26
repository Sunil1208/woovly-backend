const Woovly = require('../model/woovly')

exports.getBucketById = (req, res,next, id) => {
    Woovly.findById(id).exec((err,data)=> {
        if(err){
            return res.status(400).json({
                error:"Bucket data not found in the database"
            })
        }
        req.bucketData =data
        next()
    })
}

exports.createBucket = (req, res) => {
    const bucket = new Woovly(req.body);
    bucket.save((err,data) => {
        if(err){
            return res.status(400).json({
                error: "Not able to save the bucket data"
            })
        }
        res.json({bucket})
    })
}

exports.getAllBucketList = (req, res) => {
    Woovly.find().exec((err,bucketList) => {
        if(err) {
            return res.status(400).json({
                error:"No data found"
            })
        }
        res.json(bucketList)
    })
}

exports.updateBucketData = (req, res) => {
    const bucket = req.bucketData;
    bucket.title = req.body.title;
   bucket.save((err,updatedBucketData) => {
       if(err){
           return res.status(400).json({
               error:"Failed to update the data"
           })
       }
       res.json(updatedBucketData)
   })
}

exports.removeBucket = (req, res,id) => {
    const bucket = req.bucketData
   bucket.remove((err,bucket) => {
       if(err){
           return res.status(400).json({
               error: "Failed to delete the buckelist"
           })
       }
       res.json({
           message:`${bucket.title} is successfully deleted`
       })
   })
}