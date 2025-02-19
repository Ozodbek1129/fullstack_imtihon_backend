import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads', // Rasmlar saqlanadigan papka
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + extname(file.originalname)); // Rasm nomini unikal qilish
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB cheklov
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      return cb(new Error('Only JPG, JPEG, and PNG files are allowed!'), false);
    }
    cb(null, true);
  },
};
