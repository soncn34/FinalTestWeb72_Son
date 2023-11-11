const express = require("express") // commonjs
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = 3001
const morgan = require("morgan")
const router = require("./routers")
const cors = require("cors")
const { logMiddleWare } = require("./middlewares")
const connectDb = require("./database")
const fileUpload = require("express-fileupload");

app.use(morgan("combined"))
app.use(cors({ origin: "*" }))
connectDb()
app.use(express.json())
app.use(fileUpload());
// app.use(logMiddleWare)
app.use(router)


app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})