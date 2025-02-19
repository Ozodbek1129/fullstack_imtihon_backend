import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class UploadService {
  storage = diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName = uuidv4() + fileExt;
      cb(null, fileName);
    },
  });
}
