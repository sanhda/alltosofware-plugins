var multer = require('multer');
const fs = require('fs');

function getUploader() {
    // Set up multer for handling file uploads
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        
            // get path from app name
            let path = 'uploads/products/' + req.body.name

            // Set the destination folder based on the field name
            if (file.fieldname === 'images' || file.fieldname === 'app-icon') {
                path += '/images/'
            } else if (file.fieldname === 'file') {
                path += '/file/'
            } else {
                path += '/other/'
            }

            // create path if its not exist
            fs.access(path, fs.constants.F_OK, (err) => {
                fs.mkdir(path, { recursive: true }, (err) => {
                    if (err) {
                    cb(err, null); // Return error if folder creation fails
                    } else {
                    cb(null, path); // Folder created successfully, set destination folder
                    }
                });
            });
        },

        filename: function (req, file, cb) {
        // Use the original name of the file for its filename
        cb(null, file.originalname);
        }
    });
    const upload = multer({ storage: storage });

    return upload.fields([{ name: 'images', maxCount: 10 },
    { name: 'file', maxCount: 1 },
    { name: 'app-icon', maxCount: 1 }
    ])
}


module.exports = getUploader