import cloudinary from "../config/cloudinary-setup.js";
export const imageUpload = async (file, folder) => {

  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto',
        folder: folder,
      },
      (err, result) => {
        if (err) {
          reject(err.message);
        }
        resolve(result);
      }
    ).end(bytes);
  });
};



export const deleteImage = (publicId) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
  };
  
