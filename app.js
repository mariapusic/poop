const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000

const Doggies = {
    allDoggies:[
        {id:1,ras:"Mops",livslängd:"15 år",mankHöjd:"28 cm",färger:"fawn,svart",vikt:"6-9kg"},
        {id:2,ras:"Tax",livslängd:"14 år",mankHöjd:"35 cm",färger:"svart, choklad, vildsvin, grå, ljust gulbrun",vikt:"7-14 kg"},
        {id:3,ras:"Pudel",livslängd:"14 år",mankHöjd:"42 cm",färger:"vit,svart.grå,blå,silver,brun,fawn",vikt:"32 kg"},
        {id:4,ras:"Alaskan malamute",livslängd:"12 år",mankHöjd:"64 cm",färger:"grå-vit,sobel-vit,brun-vit,svart-vit",vikt:"43kg"},
        {id:5,ras:"Corgi",livslängd:"12 år",mankHöjd:"33 cm",färger:"Röd.sobel.brindle,blå,svart",vikt:"17kg"},
    ]
}

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")
})
app.get("/Doggies", (req,res) => {
    res.send(Doggies.allDoggies)
})
app.get("/deleteDoggy/:id",(req,res) => {
    if(Doggies.allDoggies[req.params.id-1] == null){
        res.send("No Doggy found. ERROR:404")
    }
    Doggies.allDoggies.splice(req.params.id-1,1)
    res.send("Doggy deleted!!!!")
})
app.get("/addDoggy", (req,res) => {
    res.sendFile(__dirname + "/addDoggy.html")
})
app.post("/addDoggy", (req,res) => {
    let ras = req.body.ras
    let livslängd = req.body.livslängd
    let mankHöjd = req.body.mankHöjd
    let färger = req.body.färger
    let vikt = req.body.vikt
    Doggies.allDoggies.push({id:Doggies.allDoggies.length +1, ras:ras, livslängd:livslängd, mankhöjd:mankHöjd, färger:färger, vikt:vikt})
    res.send("Doggy added!!!!!")

})







app.listen(PORT, () => {
    console.log("Listening to port: " + PORT)
})
