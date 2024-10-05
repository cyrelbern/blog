
const express = require("express")


const router = express.Router()

router.get("/home", (req, res) => {
    res.send("welcome home")
})

router.get("/about", (req, res) => {
    res.send("about us")
})

router.get("/contact", (req, res) => {
    res.send("my contact")
})

router.get("/info", (req, res) => {
    res.send("my info")
})

router.get("/dashboard", (req, res) => {
    res.send("My dashboard")
})


module.exports = router