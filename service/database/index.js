const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://sonchaungocstb3:WqmCO6AfdoojE8jd@cluster0.qmy58g1.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connect DB successfull")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb