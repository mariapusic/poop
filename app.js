const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('Public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000

const Doggies = {
    allDoggies:[
        {id:1,breed:"Mops",lifespan:"15 år",height:"28 cm",colors:"fawn,svart",weight:"6-9kg"},
        {id:2,breed:"Tax",lifespan:"14 år",height:"35 cm",colors:"svart, choklad, vildsvin, grå, ljust gulbrun",weight:"7-14 kg"},
        {id:3,breed:"Pudel",lifespan:"14 år",height:"42 cm",colors:"vit,svart.grå,blå,silver,brun,fawn",weight:"32 kg"},
        {id:4,breed:"Alaskan malamute",lifespan:"12 år",height:"64 cm",colors:"grå-vit,sobel-vit,brun-vit,svart-vit",weight:"43kg"},
        {id:5,breed:"Corgi",lifespan:"12 år",height:"33 cm",colors:"Röd.sobel.brindle,blå,svart",weight:"17kg"},
    ]
}

app.get("/")
app.get("/Doggies", (req,res) => {
    res.send(Doggies.allDoggies)
})
app.delete("/Doggy/:id",(req,res) => {
    const doggyId = Doggies.allDoggies.findIndex(({id}) => id === parseInt(req.params.id))
    if(doggyId < 0){
        return res.status(404).send("No Doggy found!!")
    }

    Doggies.allDoggies.splice(doggyId,1)
    res.send("Doggy deleted!!!!")
})
// app.get("/addDoggy", (req,res) => {
//     res.sendFile(__dirname + "/addDoggy.html")
// })
app.post("/Doggy", (req,res) => {
    const {breed, lifespan, height, colors, weight} = req.body
    console.log(req.body)
    // let breed = req.body.breed
    // let lifespan = req.body.lifespan
    // let height = req.body.height
    // let colors = req.body.colors
    // let weight = req.body.weight
    Doggies.allDoggies.push({id:Doggies.allDoggies.length +1, breed:breed, lifespan:lifespan, height:height, colors:colors, weight:weight})
    // Doggies.allDoggies.push(req.body)
    res.send("Doggy added!!!!!")

})

app.listen(PORT, () => {
    console.log("Listening to port: " + PORT)
})
