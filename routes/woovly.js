const express = require('express')
const router = express.Router()


const {getBucketById,createBucket,getAllBucketList,updateBucketData,removeBucket} = require('../controller/woovly')
router.param('bucketId', getBucketById)

//create routes
router.post('/bucket',createBucket)

//read routes
router.get('/bucket',getAllBucketList)

router.get('/bucket/:bucketId',getBucketById)

//update
router.put('/bucket/:bucketId',updateBucketData)

//delete
router.delete('/bucket/:bucketId',removeBucket)


module.exports = router;
