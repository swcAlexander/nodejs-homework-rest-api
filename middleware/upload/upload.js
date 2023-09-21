import multer from "multer";
import path from "path";

const destination = path.resolve("temp");

const storage = multer.diskStorage({
  destination,
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      // cb(null, file.originalname)
      const filename = file.originalname + uniqueSuffix;
      cb(null, filename)
  }
})
const limits = {
    fileSize: 1024 * 1024 * 5,
}

const upload = multer({ storage, limits })
export default upload;