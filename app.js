import express from 'express'
import {} from 'dotenv/config'


//create app
const app = express()

//set public folder as static folder
app.use(express.static('public'))

//create instance of express router
const router = express.Router()

//set up routes
router.get('/',(req,res) => {
    res.sendFile('index.html',{root: "public"})
})

//load port
const PORT = process.env.PORT || 5000