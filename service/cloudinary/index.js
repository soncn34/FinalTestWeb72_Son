const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: "dqh1jw7bk",
    api_key: "941736765673315",
    api_secret: "S5hxk_eWY4aQSlpQ3YNTvFuqFe4"
});

const uploadImage = async (file) => {
    const newFileName = `${new Date().getTime()}-${file.name}`
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: "image", filename_override: `${newFileName}`, use_filename: true, unique_filename: false }, (err) => reject(err)).end(file?.data, () => resolve(newFileName));
    })

};

module.exports = {
    uploadImage
}