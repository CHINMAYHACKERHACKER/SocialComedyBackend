const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("./Database/DatabaseConnection.js");
const multerGoogleStorage = require('multer-cloud-storage');
const multer = require('multer');

require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use("/ImageUpload", express.static("./ImageUpload"));


app.use("/api", require("./routes/Sign.js"));
app.use("/api", require("./routes/Login.js"));

// List all files in the bucket
// async function listFiles() {
//     try {
//         const files =  multerGoogleStorage.storageEngine({
//             bucket: 'cmeme',
//             projectId: 'matrimony-60dd1',
//             keyFilename: './matrimony-60dd1-046e504025d9.json',
//             uniformBucketLevelAccess: true,
//         }).getDestination((req, file, cb) => {
//             cb(null, '');
//             console.log("Req",req);
//             console.log("file",file);
//             // cb(null,`${file.originalname}`);
//         })
//     } catch (err) {
//         console.error(err);
//     }
// }

// List files when a specific route is accessed
// app.get('/list-files', listFiles);

app.listen(process.env.PORT, (Err) => {
    if (Err) {
        console.log("Failed to start server");
    }
    else {
        console.log("Server started on port", `${process.env.PORT}`);
    }
})
