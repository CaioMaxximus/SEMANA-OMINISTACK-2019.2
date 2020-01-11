const multer = require('multer');
const path = require('path');

module.exports = {
    storage : multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename : (req, file, call_back) =>{
            ext = path.extname(file.originalname);
            call_back(null, `${path.basename(file.originalname, ext)}_${Date.now()}${ext}`);
        },
    }),
}