import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const API_URL = "https://secrets-api.appbrewery.com"

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "/random")
        const result = response.data
        res.render("index.ejs", {
            secret: result.secret,
            user: result.username
        })
        } catch (error) {
            console.log(error.response.data);
            res.status(500);
        }
})

app.listen(port, (req, res) => {
    console.log("Server running at port " + port)
})