const cloudinary = require('cloudinary').v2;

function configCloudinary(){
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });      
}


const uploadFile = async (file,folder) => {
    try {
        
        const response = await cloudinary.uploader.upload(file, {
            folder: `Naseem/${folder}`
        });
        return response.public_id
        
    } catch (error) {
        console.log("Error in UploadFile:", error);
        throw error
    }
};

module.exports = {
    uploadFile,
    configCloudinary
};