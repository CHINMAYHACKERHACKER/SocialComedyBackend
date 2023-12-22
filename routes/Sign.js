const router = require("express").Router();
const express = require("express");
const app=express();
const {SignController} = require("../controller/Signcontroller.js");
var multer = require("multer");
// var multerGoogleStorage = require("multer-cloud-storage");
const upload = multer({ dest: 'ImageUpload/' })



// var uploadHandler = multer({
//     storage: multerGoogleStorage.storageEngine({
//       autoRetry: true,
//       bucket: 'cmeme',
//       projectId: 'matrimony-60dd1',
//       keyFilename: './matrimony-60dd1-046e504025d9.json',
//       uniformBucketLevelAccess:true,
//       filename: (req, file, cb) => {
//         cb(null, `/Image/${Date.now()}_${file.originalname}`);
//       }
//     })
//   });


router.post("/sign", SignController);

module.exports = router;