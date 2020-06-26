const Woovly = require('../model/woovly')

exports.getBucketById = (req, res, id) => {
    Woovly.findById(id).exec((err,data)=> {
        if(err){
            return res.status(400).json({
                error:"Bucket data not found in the database"
            })
        }
        res.json(data)
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
    })
}

exports.updateBucketData = (req, res) => {
    Woovly.findByIdAndUpdate(
        {_id:req.body._id},
        {$set:req.body},
        {new: true, useFindAndModify:false},
        (err,bucket) =>{
            if(err){
                return res.status(400).json({
                    error:"Unable to update the data"
                })
            }
            res.json(bucket)
        }
    )
}

exports.removeBucket = (req, res) => {
    Woovly.findByIdAndDelete({_id:req.body._id},(err,result) => {
        if(err){
            return res.status(400).json({
                error: "Unable to delete the bucket list"
            })
        }
        res.json(result)
    })
}