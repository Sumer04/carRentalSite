// middleware/multer.js
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary.js';
import cloudinary from '../config/cloudinary-setup.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'cars', 
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

const upload = multer({ storage });

export default upload;
